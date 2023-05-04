<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { usePokenonStore } from '../stores/pokemon'
import PokemonCard from '../components/PokemonCard.vue'

const tableRef = ref()
const pokemonStore = usePokenonStore()
const { count, pokemons } = storeToRefs(pokemonStore)
const { fetch } = pokemonStore

const loading = ref(true)
const pagination = ref({
  sortBy: 'asc',
  descending: false,
  page: 1,
  rowsPerPage: 8,
  rowsNumber: 255,
})

async function onRequest(props) {
  loading.value = true
  try {
    const { page, rowsPerPage } = props.pagination
    await fetch(rowsPerPage, (page - 1) * rowsPerPage)
    pagination.value.page = page
    pagination.value.rowsPerPage = rowsPerPage
    pagination.value.rowsNumber = count.value
  }
  finally {
    loading.value = false
  }
}
onMounted(() => {
  tableRef.value.requestServerInteraction()
})
</script>

<template>
  <div class="flex flex-center">
    <q-table
      ref="tableRef"
      v-model:pagination="pagination"
      title="Pokemons"
      :rows-per-page-options="[4, 8, 12, 24, 48]"
      :rows="pokemons"
      row-key="id"
      grid
      hide-header
      class="full-width"
      style="max-width: 1024px"
      :loading="loading"
      @request="onRequest"
    >
      <template #item="props">
        <div
          class="q-pa-xs col-xs-6 col-sm-4 col-md-3 grid-style-transition"
        >
          <PokemonCard :id="props.row.id" :key="props.row.id" />
        </div>
      </template>
    </q-table>
  </div>
</template>

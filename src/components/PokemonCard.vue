<script setup>
import { onMounted, ref, computed } from 'vue'
import { usePokenonStore } from '../stores/pokemon'

const props = defineProps({
  id: Number,
})

const pokemonStore = usePokenonStore()
const pokemon = ref({})
const { get } = pokemonStore

const types = computed(() => pokemon.value.types || [])
onMounted(async () => {
  pokemon.value = await get(props.id)
})
</script>

<template>
  <q-card class="my-card">
    <q-img :src="pokemon?.sprites?.front_default">
      <div class="absolute-bottom text-h6">
        {{ pokemon?.name }}
      </div>
    </q-img>
    <q-list dense>
      <q-item>
        <q-item-section>
          name: {{ pokemon?.name }}
        </q-item-section>
      </q-item>
      <q-item v-for="item in types" :key="item.slot">
        <q-item-section>
          type {{ item.slot }}: {{ item.type.name }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

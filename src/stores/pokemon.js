import { defineStore } from 'pinia'

export const usePokenonStore = defineStore('pokenon', {
  state: () => ({
    count: 0,
    pokemons: [],
  }),
  actions: {
    async fetch(limit, offset) {
      const { data } = await this.api.get(`/pokemon?limit=${limit}&offset=${offset}`)
      this.pokemons = data.results.map((item) => {
        const { name, url } = item
        const id = parseInt(url.match(/v2\/pokemon\/(\d*)/)[1])
        return { id, name }
      })
      this.count = data.count
    },
    async get(id) {
      const { data } = await this.api.get(`/pokemon/${id}`)
      return data
    },
  },
})

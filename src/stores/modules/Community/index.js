import { fetchFeaturedPicksBanners } from '@/service/modules/FeaturedPicks/index.js'
import { defineStore } from 'pinia'

const useCommunityStore = defineStore('community', {
  state: () => ({}),
  actions: {
    async FetchFeaturedPicksBanners() {
      const res = await fetchFeaturedPicksBanners()
      console.log(res)
    }
  }
})

export default useCommunityStore

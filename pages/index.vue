<template>
  <div>
    <w-banner/>
    <v-container 
      fill-height 
      grid-list-lg>
      <v-layout 
        row 
        wrap>
        <v-flex>
          <h2>Podcasts à la une</h2>
        </v-flex>
        <v-flex>
          <w-podcast
            :podcasts="podcasts"
          />
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import WPodcast from '@/components/WPodcast'
import WBanner from '@/components/WBanner'

export default {
  components: {
    WPodcast,
    WBanner
  },

  transition: 'page',

  computed: {
    ...mapState({
      podcasts: state => state.application.items
    })
  },

  mounted () {
    this.$store.dispatch('getApplication')
  }
}
</script>

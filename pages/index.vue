<template>
  <v-container>
    <v-layout>
      <v-flex>
        <w-card
          :podcasts="podcasts"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import WCard from '@/components/WCard'

export default {
  components: {
    WCard,
  },

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

<template>
  <v-container grid-list-xs>
    <v-layout 
      row 
      wrap>
      <v-flex 
        v-for="(item, index) in 4" 
        :key="index"
        xs12
        sm6
        lg4>
        <v-card
          hover
          tile 
          flat>
          <v-img
            :src="`https://picsum.photos/500/300?image=${item * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${item * 5 + 10}`"
            aspect-ratio="2"
            class="grey"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import WPodcast from '@/components/WPodcast'


export default {
  transition: 'page',
  middleware: 'protected',

  components: {
    WPodcast,
  },

  computed: {
    ...mapState({
      podcasts: state => state.application.items
    })
  },
}
</script>
<template>
  <v-layout 
    v-if="podcasts.length > 0" 
    row 
    wrap>
    <v-flex
      v-for="podcast in podcasts"
      :key="podcast.id" 
      xs12
      sm6
      md4
      lg3>
      <v-hover>
        <v-card 
          slot-scope="{ hover }"
          :class="{ 'elevation-12 grey--text text--lighten-2 grey darken-4 ' : hover} " 
          height="100%"
          class="flexcard grey--text">
          <div class="relative">
            <v-img
              :src="podcast.linkThumbnail"
              height="180px"
            />
            <w-play-button :item="podcast"/>
          </div>
          <v-card-title primary-title>
            <div>
              <h3>{{ podcast.title }}</h3>
              <small> Publié le {{ formatDate(podcast.createdAt) }} </small>
            </div>
          </v-card-title>
          <v-card-text class="grow">
            <span class="linebreak">{{ podcast.description }}</span>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
  <v-layout v-else>
    <v-flex 
      xs6 
      md4
      lg3>
      <v-card>
        <v-card-text>
          Aucune Voicy disponible
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

import WPlayButton from '@/components/WPlayButton'
import formatDate from '@/mixins/formatDate'

export default {
  components: {
    WPlayButton
  },

  mixins: [
    formatDate
  ],

  computed: {
    ...mapState({
      podcasts: state => state.application.items,
    })
  },
}
</script>

<style lang="scss" scoped>
.linebreak {
  white-space: pre-line;
}
</style>

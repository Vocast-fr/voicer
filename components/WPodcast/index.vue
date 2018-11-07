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
      <v-card height="100%">
        <div class="relative">
          <v-img
            :src="podcast.linkThumbnail"
            height="150px"
          />
          <v-btn
            absolute
            fab
            bottom
            right
            color="primary"
            @click.native="handleClick(podcast)">
            <v-icon large>play_arrow</v-icon>
          </v-btn>
        </div>
        <v-card-title primary-title>
          <div>
            <h3>{{ podcast.title }}</h3>
            <small> Publié le {{ formatDate(podcast.createdAt) }} </small>
          </div>
        </v-card-title>
        <v-card-text>
          <span class="linebreak">{{ podcast.description }}</span>
        </v-card-text>
      </v-card>
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
import formatDate from '@/mixins/formatDate'

export default {
  mixins: [
    formatDate
  ],

  props: {
    podcasts: {
      type: Array,
      default: () => { return null }
    }
  },

  methods: {
    handleClick (item) {
      this.$store.dispatch('selectPlayerItem', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.linebreak {
  white-space: pre-line;
}
.relative {
  position: relative
}
</style>

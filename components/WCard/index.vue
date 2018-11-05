<template>
  <v-layout 
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
            :src="`http://localhost:1337/${podcast.thumbnail.url}`"
            height="200px"
          />
          <v-btn
            absolute
            dark
            fab
            bottom
            right
            color="primary"
          >
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </div>
        <v-card-title>
          <div>
            <h3>{{ podcast.title }}</h3>
            <small> {{ formatDate(podcast.createdAt) }} </small>
          </div>
        </v-card-title>
        <v-card-text>
          <span class="linebreak">{{ podcast.description }}</span>
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
      default: undefined
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

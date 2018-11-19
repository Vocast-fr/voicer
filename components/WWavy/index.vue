<template>
  <v-layout>
    <v-flex 
      v-for="(wave, index) in waves" 
      :key="index"
      xs12
      sm6
      lg4>
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="{ 'elevation-12 grey--text text--lighten-2 grey darken-4 ' : hover} "
          tile 
          flat>
          <div class="relative">
            <v-img
              :src="wave.linkThumbnail"
              :class="{'grey' : hover}"
              class="relative"
              aspect-ratio="2"
              cover>
              <div
                class="d-flex grey darken-4 v-card--reveal title white--text">
                3 M d'écoutes
              </div>
            </v-img>
            <w-play-button :item="wave"/>
          </div>
          <v-card-title primary-title>
            <h4 class="subheading">{{ wave.title }}</h4>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import WPlayButton from '@/components/WPlayButton'

export default {
  components: {
    WPlayButton
  },
  computed: {
    ...mapState({
      waves: state => state.application.waves
    })
  }
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  opacity: 0;
  transition: opacity .3s;
}

.v-card:hover .v-card--reveal {
    opacity: .75
  }

.v-card--reveal {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>



<template>
  <transition name="slide">
    <div
      v-if="fullscreen"
      class="player-fullscreen py-5">
      <v-card 
        height="100%" 
        class="flexcard">
        <v-card-text 
          class="my-3 fullheight">
          <v-layout 
            :column="$vuetify.breakpoint.xsOnly"
            fill-height
            align-center
            justify-center>
            <v-flex 
              :class="{ 
                'pa-3': $vuetify.breakpoint.smAndUp,
                'pa-5': $vuetify.breakpoint.lgAndUp
              }"
              xs12
              sm6
              class="flex-thumbnail">
              <v-img
                :src="thumbnail ? thumbnail : undefined"
                aspect-ratio="1"
                contain>
                <v-layout
                  slot="placeholder"
                  fill-height
                  align-center
                  justify-center
                  ma-0>
                  <v-progress-circular 
                    indeterminate 
                    color="grey lighten-5"/>
                </v-layout>
              </v-img>
            </v-flex>
            <v-flex 
              v-if="chapters.length > 0"
              class="flex-chapters pa-3" 
              xs12 
              sm6>
              <v-list class="transparent chapters-list">
                <v-subheader>
                  Chapitres de la Voicy
                </v-subheader>
                <template v-for="(chapter, index) in chapters">
                  <v-divider :key="index"/>
                  <v-list-tile 
                    :key="index" 
                    @click="handleClick">
                    <v-list-tile-content>
                      {{ chapter.title }}
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-btn icon>
                        <v-icon>play_arrow</v-icon>
                      </v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </template>
              </v-list>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    fullscreen: {
      type: Boolean,
      default: false
    },
    thumbnail: {
      type: String,
      default: ''
    },
    chapters: {
      type: Array,
      default: () => { return [] }
     }
  },

  methods: {
    handleClick () {
      console.log('chapitre sélectionné')
    }
  }
}
</script>

<style lang="scss" scoped>
.player-fullscreen {
  z-index: 4;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.fullheight {
  height: 100%
}
.flex {
  &-thumbnail {
    width: 66.6%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-chapters {
    width: 100%
  }
}

@media screen and (max-width: 600px) {
  .chapters-list {
    max-height: calc(100% - 56px);
    overflow: scroll
  }
}
</style>

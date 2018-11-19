<template>
  <div>
    <w-player-audio 
      :source="item.linkAudio"
      :playing-status="audio.isPlaying"
      :volume="audio.volume"
      :time="audio.currentTime"/>
    <w-player-fullscreen 
      :fullscreen="fullscreen" 
      :thumbnail="item.linkThumbnail"
      :chapters="chapters"/>
    <transition name="slide">
      <div
        v-if="isActive"
        class="player-persistent">
        <v-card 
          tile 
          @click.native="fullscreen = !fullscreen">
          <v-progress-linear
            v-model="audio.currentTime"
            size="1000"
            class="my-0 no-transition"
            height="3"/>
          <v-list
            :dense="$vuetify.breakpoint.xsOnly">
            <v-list-tile>
              <v-list-tile-avatar 
                v-if="$vuetify.breakpoint.smAndUp" 
                tile>
                <v-img
                  :src="item.linkThumbnail"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  cover>
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
              </v-list-tile-avatar>
              <v-list-tile-content v-if="$vuetify.breakpoint.smAndUp">
                <v-list-tile-title>{{ item ? item.title : 'Aucun média' }}</v-list-tile-title>
                <v-list-tile-sub-title>Album, auteur ou description courte</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-spacer v-if="$vuetify.breakpoint.smAndUp"/>
              <v-list-tile-action v-if="$vuetify.breakpoint.xsOnly">
                <v-tooltip 
                  top 
                  content-class="infos">
                  <v-btn 
                    slot="activator"
                    color="grey--text"
                    icon 
                    @click.stop="tooltip = !tooltip">
                    <v-icon>info</v-icon>
                  </v-btn>
                  <span>Vous écoutez : {{ item.title }}</span>
                </v-tooltip>
              </v-list-tile-action>
              <v-spacer/>
              <v-list-tile-action>
                <v-btn icon>
                  <v-icon>replay_10</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn 
                  icon
                  @click.native.stop="handleControl(item)">
                  <v-icon 
                    v-if="!audio.isPlaying || audio.isLoading" 
                  >play_arrow</v-icon>
                  <v-icon v-else>pause</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn icon>
                  <v-icon>forward_10</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-spacer v-if="$vuetify.breakpoint.xsOnly"/>
              <w-player-menu/>
            </v-list-tile>
          </v-list>
        </v-card>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import WPlayerAudio from '@/components/WPlayerAudio'
import WPlayerFullscreen from '@/components/WPlayerFullscreen'
import WPlayerMenu from '@/components/WPlayerMenu'

export default {
  components: {
    WPlayerAudio,
    WPlayerFullscreen,
    WPlayerMenu
  },

  data: () => ({
    fullscreen: false,
    tooltip: false,
  }),
  
  computed: {
    ...mapState({
      isActive: state => state.player.isActive,
      item: state => state.player.item,
      audio: state => state.player.audio
    }),
    ...mapGetters({
      chapters: 'getPlayerChapters'
    })
  },

  watch:{
    $route (to, from) {
      this.fullscreen = false
    }
  },

  methods: {
    handleControl (item) {
      this.$store.dispatch('changePlayerStatus', item)
      this.$store.commit('setPlayLocation', 'player')
    }
  },
}
</script>

<style lang="scss" scoped>
.player-persistent {
  z-index: 4;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.no-transition .progress-linear {
  transition: all 0.1s linear;
}
.v-list__tile__action {
  justify-content: center
}
.infos {
  position: fixed;
}
@media screen and (max-width: 600px) {
  .player-persistent {
    bottom: 56px;
  }
}
</style>

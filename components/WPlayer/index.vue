<template>
  <div>
    <w-player-audio 
      :source="item.linkAudio"
      :playing-status="audio.isPlaying"
      :volume="audio.volume"
      :time="audio.currentTime"/>
    <w-player-fullscreen :fullscreen="fullscreen"/>
    <transition name="slide">
      <div
        v-if="isActive"
        class="player-persistent">
        <v-card 
          tile 
          @click="fullscreen = !fullscreen">
          <v-progress-linear
            :value="0"
            class="my-0"
            height="3"/>
          <v-list
            :dense="$vuetify.breakpoint.xsOnly">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item ? item.title : 'Aucun média' }}</v-list-tile-title>
                <v-list-tile-sub-title>Album, auteur ou description courte</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-spacer/>
              <v-list-tile-action>
                <v-btn icon>
                  <v-icon>replay_10</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  @click.native="handleControl">
                  <v-icon>pause</v-icon>
                </v-btn>
              </v-list-tile-action>
              <v-list-tile-action>
                <v-btn icon>
                  <v-icon>forward_10</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import WPlayerFullscreen from '@/components/WPlayerFullscreen'
import WPlayerAudio from '@/components/WPlayerAudio'

export default {
  components: {
    WPlayerFullscreen,
    WPlayerAudio
  },

  data: () => ({
    fullscreen: false
  }),
  
  computed: {
    ...mapState({
      isActive: state => state.player.isActive,
      item: state => state.player.item,
      audio: state => state.player.audio
    })
  },

  watch:{
    $route (to, from) {
      this.fullscreen = false
    }
  },

  methods: {
    handleControl () {
      this.$store.dispatch('changePlayerStatus')
    }
  }
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
@media screen and (max-width: 600px) {
  .player-persistent {
    bottom: 56px;
  }
}

.slide-enter-active, .slide-leave-active {
  animation: slide-in .2s;
  transition: opacity .2s ease-in-out;
}
.slide-enter, .slide-leave-active {
  animation: slide-out .3s;
  opacity: 0
}

@keyframes slide-in {
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
}
@keyframes slide-out {
  0% { transform: translateY(0) }
  100% { transform: translateY(10%) }
}

</style>

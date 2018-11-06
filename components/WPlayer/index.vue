<template>
  <transition name="slide">
    <div
      v-if="isActive"
      class="player-persistent"
    >

      <w-player-fullscreen
        :fullscreen="fullscreen"
      />

      <v-card 
        tile 
        @click.native="fullscreen = !fullscreen">
        <v-progress-linear
          :value="50"
          class="my-0"
          height="3"
        />

        <v-list
          :dense="$vuetify.breakpoint.xsOnly">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>The Walker</v-list-tile-title>
              <v-list-tile-sub-title>Fitz & The Trantrums</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-spacer/>

            <v-list-tile-action>
              <v-btn icon>
                <v-icon>replay_10</v-icon>
              </v-btn>
            </v-list-tile-action>

            <v-list-tile-action>
              <v-btn icon>
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
</template>

<script>
import { mapState } from 'vuex'

import WPlayerFullscreen from '@/components/WPlayerFullscreen'

export default {
  components: {
    WPlayerFullscreen
  },

  data: () => ({
    fullscreen: true
  }),
  
  computed: {
    ...mapState({
      isActive: state => state.player.isActive
    })
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
  animation: slide-in .3s;
  transition: opacity .2s;
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
  100% { transform: translateY(100%) }
}

</style>

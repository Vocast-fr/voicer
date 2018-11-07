<template>
  <transition name="slide">
    <div
      v-if="fullscreen"
      class="player-fullscreen"
    >
      <v-card height="100%">
        <v-card-text>
          <v-container 
            fill-height 
            align-center
            justify-center>
            <v-layout>
              <v-flex xs6>
                ici
              </v-flex>
              <v-flex xs6>
                ici
              </v-flex>
            </v-layout>
          </v-container>
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
</style>

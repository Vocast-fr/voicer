<template>
  <transition name="slide">
    <div
      v-if="fullscreen"
      class="player-fullscreen"
    >
      <v-card>
        c'est moi
      </v-card>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    fullscreen: {
      type: Boolean,
      default: true
    }
  }
}
</script>
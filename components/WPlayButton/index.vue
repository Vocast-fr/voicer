<template>
  <v-btn
    :loading="isActive(item) && isLoading"
    absolute
    fab
    bottom
    right
    color="primary"
    @click.native="handleClick(item)">
    <transition 
      name="rotate" 
      mode="out-in">
      <v-icon 
        v-if="isActive(item) && playLocation === 'card'"
        key="icon-pause" 
        large>pause</v-icon>
      <v-icon 
        v-else-if="isActive(item) && playLocation === 'player'"
        key="icon-sound"
        large>volume_up</v-icon>
      <v-icon 
        v-else 
        key="icon-play"
        large>play_arrow</v-icon>
    </transition>
  </v-btn>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    ...mapState({
      isPlaying: state => state.player.audio.isPlaying,
      isLoading: state => state.player.audio.isLoading,
      playLocation: state => state.player.playLocation,
      playerItemId: state => state.player.item.id,
    }),
  },

  methods: {
    isActive: function (item) {
      return this.isPlaying && item.id === this.playerItemId ? true : false
    },

    async handleClick (item) {
      await this.$store.dispatch('changePlayerStatus', item)
      this.$store.dispatch('selectPlayerItem', item)
      this.$store.commit('setPlayLocation', 'card')
    },
  }
}
</script>

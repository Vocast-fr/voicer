<template>
  <audio 
    id="player"
    ref="player" 
    :src="source"
    type="audio/mpeg"
    preload="auto">
    Your browser does not support the audio tag.
  </audio>
</template>

<script>
export default {
  props: {
    playingStatus: {
      type: Boolean,
      default: undefined
    },
    source: {
      type: String,
      default: undefined
    }
  },

  watch: {
    playingStatus: function () {
      if (this.playingStatus === true) {
        this.$refs.player.play()
      } else {
        this.$refs.player.pause()
      }
    },

    source: async function () {
      // If we were listening, then we keep playing with new source
      if (this.playingStatus === true) {
        this.$refs.player.pause()
        try {
          await this.$refs.player.load()
          this.$refs.player.play()
        } catch(err) {
          console.error(err)
        }
      // Else we just load the audio content, making it ready to play
      } else {
        this.$refs.player.load()
      }
    },
  }
}
</script>

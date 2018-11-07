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
        } catch (error) {
          console.log('An error has occuried:', error)
        }
      // Else we just load the audio content, making it ready to play
      } else {
        this.$refs.player.load()
      }
    },
  },

  mounted () {
    const media = this.$refs.player
    media.addEventListener('loadstart', () => {
      this.$store.commit('setPlayerLoading', true)
    })
    media.addEventListener('loadedmetadata', () => {
      this.$store.commit('setPlayerLoading', false)
      // this.$store.commit('setMediaDuration', media.duration)
    }),
    media.addEventListener('timeupdate', () => {
      // this.$store.commit('updateProgress', media.currentTime)
    }),
    media.addEventListener('ended', () => {
      // If we are the last chapter, we stop the media and go back to 0
      // if (chapter )
    })
  }
}
</script>

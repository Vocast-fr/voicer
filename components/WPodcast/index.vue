<template>
  <v-layout 
    v-if="podcasts.length > 0" 
    row 
    wrap>
    <v-flex
      v-for="podcast in podcasts"
      :key="podcast.id" 
      xs12
      sm6
      md4
      lg3>
      <v-card 
        height="100%" 
        class="flexcard">
        <div class="relative">
          <v-img
            :src="podcast.linkThumbnail"
            height="180px"
          />
          <v-btn
            :loading="isActive(podcast) && isLoading"
            absolute
            fab
            bottom
            right
            color="primary"
            @click.native="handleClick(podcast)">
            <transition 
              name="rotate" 
              mode="out-in">
              <v-icon 
                v-if="isActive(podcast) && playLocation === 'card'"
                key="icon-pause" 
                large>pause</v-icon>
              <v-icon 
                v-else-if="isActive(podcast) && playLocation === 'player'"
                key="icon-sound"
                large>volume_up</v-icon>
              <v-icon 
                v-else 
                key="icon-play"
                large>play_arrow</v-icon>
            </transition>
          </v-btn>
        </div>
        <v-card-title primary-title>
          <div>
            <h3>{{ podcast.title }}</h3>
            <small> Publié le {{ formatDate(podcast.createdAt) }} </small>
          </div>
        </v-card-title>
        <v-card-text class="grow">
          <span class="linebreak">{{ podcast.description }}</span>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn 
            small 
            icon>
            <v-icon small>save_alt</v-icon>
          </v-btn>
          <v-btn 
            small 
            icon>
            <v-icon small>share</v-icon>
          </v-btn>
          <v-btn 
            small 
            icon>
            <v-icon small>favorite_border</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout v-else>
    <v-flex 
      xs6 
      md4
      lg3>
      <v-card>
        <v-card-text>
          Aucune Voicy disponible
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

import formatDate from '@/mixins/formatDate'

export default {
  mixins: [
    formatDate
  ],

  computed: {
    ...mapState({
      podcasts: state => state.application.items,
      isPlaying: state => state.player.audio.isPlaying,
      isLoading: state => state.player.audio.isLoading,
      playerItemId: state => state.player.item.id,
      playLocation: state => state.player.playLocation,
    })
  },

  methods: {
    async handleClick (item) {
      await this.$store.dispatch('changePlayerStatus', item)
      this.$store.dispatch('selectPlayerItem', item)
      this.$store.commit('setPlayLocation', 'card')
    },

    isActive: function (podcast) {
      return this.isPlaying && podcast.id === this.playerItemId ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
.linebreak {
  white-space: pre-line;
}
.relative {
  position: relative
}
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>

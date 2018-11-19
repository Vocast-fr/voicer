<template>
  <v-app dark>
    <v-toolbar app>
      <nuxt-link 
        to="/" 
        style="line-height: 0">
        <img
          src="@/static/logo.png"
          width="42px"
        >
      </nuxt-link>
      <v-toolbar-title>
        VocastPWA
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          flat 
          to="/">Accueil</v-btn>
        <v-btn 
          flat 
          to="/voices">Voices</v-btn>
        <v-btn 
          flat 
          to="/waves">Waves</v-btn>
      </v-toolbar-items>
      <w-search-menu/>
      <v-spacer/>
      <v-btn 
        v-if="!auth"
        color="transparent"
        outline
        large
        icon
        to="/login">
        <v-icon 
          large 
          color="primary">account_circle</v-icon>
      </v-btn>
      
      <w-toolbar-menu 
        v-else
        :user="user"/>
      
    </v-toolbar>
    <v-content class="mb-2 pb-5">
      <nuxt/>
      <w-player/>
    </v-content>
    <w-bottom-nav/>
    <v-footer 
      class="hidden-xs-only">
      Made with ♥	by TakCastel
    </v-footer>
  </v-app>
</template>

<script>
import WBottomNav from '@/components/WBottomNav'
import WSearchMenu from '@/components/WSearchMenu'
import WToolbarMenu from '@/components/WToolbarMenu'
import WPlayer from '@/components/WPlayer'

import userData from '@/mixins/userData'

export default {
  components: {
    WBottomNav,
    WSearchMenu,
    WToolbarMenu,
    WPlayer
  },

  mixins: [
    userData
  ],

  mounted () {
    if (this.auth) {
      this.$store.dispatch('getApplication')
      this.$store.dispatch('getWaves')
    }
  }
}
</script>


<style lang="scss" scoped>
.v-toolbar {
  z-index: 5
}
.v-footer {
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

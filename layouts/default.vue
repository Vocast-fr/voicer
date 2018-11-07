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
        Voicer
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
          to="/live">Ondes</v-btn>
      </v-toolbar-items>
      <v-btn 
        :ripple="false" 
        :hover="false"
        icon
        color="transparent"
        to="/search">
        <v-icon>search</v-icon>
      </v-btn>
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
      <v-menu 
        v-else
        bottom 
        left>
        <v-btn 
          slot="activator"
          color="transparent"
          outline
          large
          icon>
          <v-icon 
            large 
            color="primary">more_vert</v-icon>
        </v-btn>
        <w-toolbar-menu
          :user="user"
        />
      </v-menu>
    </v-toolbar>
    <v-content class="mb-2 pb-5">
      <nuxt/>
      <w-player/>
    </v-content>
    <w-bottom-nav/>
    <v-footer 
      class="hidden-xs-only">
      Made with ♥	by Mediameeting
    </v-footer>
  </v-app>
</template>

<script>
import WBottomNav from '@/components/WBottomNav'
import WToolbarMenu from '@/components/WToolbarMenu'
import WPlayer from '@/components/WPlayer'

import userData from '@/mixins/userData'

export default {
  components: {
    WBottomNav,
    WToolbarMenu,
    WPlayer
  },

  mixins: [
    userData
  ],

  mounted () {
    if (this.auth) {
      this.$store.dispatch('getApplication')
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

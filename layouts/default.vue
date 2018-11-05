<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-title>Webradio</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container 
        fluid 
        grid-list-lg>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer 
      class="hidden-xs-only">
      © 2018
      <nuxt-link to="/policies">Mentions légales</nuxt-link>
    </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
  .v-footer {
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

<template>
  <v-list-tile-action>
    <v-menu
      v-model="menu"
      attach
      nudge-right="36"
      absolute
      top
      left>
      <v-btn 
        slot="activator"
        color="transparent grey--text"
        icon
        @click.native.stop="menu = !menu">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list 
        dense 
        class="grey darken-4">
        <v-list-tile 
          v-for="option in options"
          :key="option.value"
          class="grey darken-4 grey--text text--lighten-2"
          @click="handleCli.nativeckMenu(option.value)">
          <v-list-tile-content class="text-truncate">
            {{ option.title }}
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon color="grey">{{ option.icon }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>       
    </v-menu>
  </v-list-tile-action>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    options: [
      { title: 'Ajouter aux favoris', value: 'like', icon: 'favorite_border' },
      { title: 'Partager sur les réseaux', value: 'share', icon: 'share' },
      { title: 'Télécharger la Voicy', value: 'download', icon: 'save_alt' }
    ]
  }),

  methods: {
    handleClickMenu (item) {
      switch (item) {
        case 'settings':
          this.$router.push('/settings')
          break
        case 'privacy':
          this.$router.push('/privacy')
          break
        case 'logout':
          this.$store.dispatch('logOut')
          break
        case 'monitoring':
          this.$router.push('/monitoring')
          break
        case 'analysis':
          this.$router.push('/analytics')
          break

        // Then close
        this.menu = false
      }
    }
  }
}
</script>

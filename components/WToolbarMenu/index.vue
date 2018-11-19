<template>
  <v-menu 
    min-width="300"
    attach
    left
    offset-y>

    <!-- Launch button -->
    <v-btn 
      slot="activator"
      color="transparent"
      outline
      large
      icon>
      <v-avatar
        size="35"
        color="grey darken-3">
        <img 
          src="/apple-touch-icon-180x180.png" 
          alt="avatar">
      </v-avatar>
    </v-btn>
    
    <v-toolbar 
      prominent 
      class="grey darken-3 grey--text text--lighten-3">
      <v-avatar
        size="42"
        color="grey darken-3">
        <img 
          src="/apple-touch-icon-180x180.png" 
          alt="avatar">
      </v-avatar>
      <div class="ml-3">
        <span class="title d-block">{{ user.username }}</span>
        <span class="caption">{{ user.email }}</span>
      </div>
    </v-toolbar>

    <v-list 
      dense 
      class="grey darken-4">

      <div v-if="user ? user.role.type === 'root' : false">
        <v-list-tile
          v-for="option in panel" 
          :key="option.value"
          class="grey darken-4 grey--text text--lighten-2"
          @click="handleClickMenu(option.value)">
          <v-list-tile-content class="text-truncate">
            {{ option.title }}
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon color="grey">{{ option.icon }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider/>
      </div>

      <v-list-tile 
        v-for="option in options"
        :key="option.value"
        class="grey darken-4 grey--text text--lighten-2"
        @click="handleClickMenu(option.value)">
        <v-list-tile-content class="text-truncate">
          {{ option.title }}
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon color="grey">{{ option.icon }}</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

  </v-menu>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: undefined
    }
  },

  data: () => ({
    panel: [
      { title: `Panneau d'administration`, value: 'monitoring', icon: 'build' },
      { title: 'Statistiques', value: 'analysis', icon: 'trending_up' },
    ],
    options: [
      { title: 'Paramètres du compte', value: 'settings', icon: 'settings' },
      { title: 'Mentions légales', value: 'privacy', icon: 'security' },
      { title: 'Se déconnecter', value: 'logout', icon: 'exit_to_app' }
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
        
      }
    }
  }
}
</script>

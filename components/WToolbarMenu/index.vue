<template>
  <div>
    <v-toolbar>
      <v-avatar
        size="42"
        color="grey darken-3">
        <img 
          src="/apple-touch-icon-180x180.png" 
          alt="avatar">
      </v-avatar>
      <span class="ml-3">Connecté en tant que {{ username }}</span>
    </v-toolbar>

    <v-list dense>
      <v-list-tile
        v-for="option in panel"
        :key="option.value"
        @click="handleClickMenu(option.value)">
        <v-list-tile-content class="text-truncate">
          {{ option.title }}
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>{{ option.icon }}</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider/>

      <v-list-tile
        v-for="option in options"
        :key="option.value"
        @click="handleClickMenu(option.value)">
        <v-list-tile-content class="text-truncate">
          {{ option.title }}
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>{{ option.icon }}</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: 'Anonymous'
    }
  },

  data: () => ({
    panel: [
      { title: 'Monitoring', value: 'monitoring', icon: 'build' },
      { title: 'Analytics', value: 'analysis', icon: 'trending_up' },
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
          this.$router.push('/policies')
          break
        case 'logout':
          this.$store.dispatch('logOut')
          break
      }
    }
  }
}
</script>

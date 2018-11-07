<template>
  <w-layout-card>
    <v-card slot="content">
      <v-card-title>
        <h3>Paramètres du compte</h3>
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-switch
          color="success"
          label="Notifications push"
          messages="Activer pour recevoir des notifications"
        />
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-spacer/>
        <v-btn color="primary">Enregistrer</v-btn>
      </v-card-actions>
    </v-card>
  </w-layout-card>
</template>

<script>
import WLayoutCard from '@/components/WLayoutCard'

export default {
  transition: 'page',
  middleware: 'protected',
  
  components: {
    WLayoutCard
  },
}
</script>

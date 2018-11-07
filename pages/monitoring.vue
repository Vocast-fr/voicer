<template>
  <v-container grid-list-lg>
    <v-layout v-if="!isAdmin">
      <v-card>
        Vous n'avez pas les droits d'accès
      </v-card>
    </v-layout>
    <v-layout 
      v-else
      row 
      wrap>
      <v-flex xs12>
        <div class="title mb-3">Panneau d'administration</div>
        <v-divider class="my-3"/>
        <div class="subheading">
          <p>Dans le panneau d'administration, vous pouvez ajouter, éditer ou supprimer des Voices.</p>
        </div>
      </v-flex>
      <v-flex 
        class="px-0" 
        xs12>
        <v-btn 
          to="/publication"
          color="primary">
          <v-icon left>library_add</v-icon>
          Ajouter une Voicy</v-btn>
      </v-flex>
      <v-flex >
        <w-monitor-list/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import userData from '@/mixins/userData'
import WMonitorList from '@/components/WMonitorList'

export default {
  transition: 'page',
  middleware: 'protected',
  components: {
    WMonitorList
  },
  mixins: [
    userData
  ],
}
</script>

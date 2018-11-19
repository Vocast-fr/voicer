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
      <v-flex 
        xs12 
        class="my-5">
        <h3 class="title mb-3">Panneau d'administration</h3>
        <v-divider class="my-3"/>
        <div class="subheading">
          <p>En tant que responsable de la page, vous pouvez ajouter, éditer ou supprimer des contenus.</p>
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
        <v-btn 
          to="/publication"
          outline
          color="primary">
          <v-icon left>fiber_manual_record</v-icon>
          Radio diffusion</v-btn>
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

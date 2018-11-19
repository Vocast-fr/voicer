<template>
  <v-container grid-list-lg>
    <v-layout 
      row 
      wrap>
      <v-flex 
        xs12 
        class="my-5">
        <div class="title mb-3">Voices disponibles à l'écoute</div>
        <v-divider class="my-3"/>
        <div class="subheading">
          <p>Les Voices sont des contenus audio que vous pouvez écouter et réécouter à l'infini. Plusieurs interactions sont possibles comme partager, aimer ou encore télécharger le fichier audio.</p>
        </div>
      </v-flex>
      <v-flex xs12>
        <w-voicy/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import WVoicy from '@/components/WVoicy'
import userData from '@/mixins/userData'

export default {
  transition: 'page',
  middleware: 'protected',
  
  components: {
    WVoicy,
  },

  mixins: [
    userData
  ],
}
</script>

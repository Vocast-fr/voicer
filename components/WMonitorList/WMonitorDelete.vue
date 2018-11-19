<template>
  <v-btn
    color="grey lighten-2"
    outline
    small
    icon
    @click.native="dialog = true">
    <v-icon small>delete</v-icon>
    <v-dialog
      v-model="dialog"
      max-width="360"
    >
      <v-card>
        <v-card-text>
          <p>Êtes-vous sûr de vouloir supprimer ce contenu ? Cette action est irréversible.</p>
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            outline
            round
            color="primary"
            @click="dialog = false"
          >
            Annuler
          </v-btn>
          <v-btn
            color="primary"
            round
            @click.native="handleDelete(id)"
          >
            <v-icon left>delete</v-icon>
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>  
  </v-btn>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    dialog: false,
  }),

  methods: {
    handleDelete (id) {
      this.$store.dispatch('deleteItem', id)
      this.dialog = false
    }
  }
}
</script>

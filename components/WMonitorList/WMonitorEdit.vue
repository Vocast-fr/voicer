<template>
  <v-btn
    color="grey lighten-2"
    outline
    small
    icon
    @click.native="handleClick">
    <v-icon small>edit</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: undefined
    }
  },

  methods: {
    handleClick () {
      this.$store.commit('setPublicationId', this.id)
      this.$router.push('publication')
    }
  }
}
</script>


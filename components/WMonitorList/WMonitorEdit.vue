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
    item: {
      type: Object,
      default: undefined
    }
  },

  methods: {
    handleClick () {
      this.$store.commit('setEditedItem', this.item)
      this.$router.push('publication')
    }
  }
}
</script>


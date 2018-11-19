<template>
  <div>

    <v-btn 
      slot="activator"
      :ripple="false"
      :hover="false" 
      flat
      round
      large
      @click="blop = true">
      <v-icon>search</v-icon>
    </v-btn>

    <v-list
      v-if="blop"
      class="search-field grey darken-4"
      @click.native="blop = false">
      <v-list-tile>
        <v-text-field
          full-width
          append-icon="search"
          solo-inverted
          dark 
          @click.stop="handleSearch">
          ici
        </v-text-field>
        <v-list-tile-action>
          <v-btn
            class="mx-3"
            round 
            large
            flat>
            Go
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    blop: false
  })
}
</script>

<style lang="scss" scoped>
.search-field {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 25%;
  right: 25%;
}

@media screen and (max-width: 600px) {
  .search-field {
    left: 0;
    right: 0;
  }
}
</style>

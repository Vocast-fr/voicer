<template>
  <v-layout 
    row 
    wrap>
    <v-flex
      v-for="podcast in podcasts" 
      :key="podcast.id" 
      xs12
      sm6
      md4
      lg3>
      <v-card tile>
        ici
      </v-card>
    </v-flex>
  </v-layout>
</template>

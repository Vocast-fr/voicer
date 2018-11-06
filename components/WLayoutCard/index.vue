<template>
  <v-container 
    :class="{'pa-0': $vuetify.breakpoint.xsOnly}" 
    fill-height>
    <v-layout 
      row 
      wrap 
      align-center
      justify-center>
      <v-flex
        lg6
        md8
        sm10
        xs12>
        <v-card>
          <slot name="content"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
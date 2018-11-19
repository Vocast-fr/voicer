<template>
  <v-container grid-list-xs>
    <v-layout 
      row 
      wrap>
      <v-flex 
        xs12 
        class="my-5">
        <div class="title mb-3">Ecouter les Waves</div>
        <v-divider class="my-3"/>
        <div class="subheading">
          <p>L'application Webradio vous donne la possibilité d'écouter des streams audios diffusés 24h / 24.</p>
        </div>
      </v-flex>
      <w-wavy/>
    </v-layout>
  </v-container>
</template>

<script>
import WWavy from '@/components/WWavy'

export default {
  components: {
    WWavy
  },
  transition: 'page',
  middleware: 'protected',
}
</script>
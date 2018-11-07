<template>
  <v-parallax
    :src="require('@/assets/img/background.jpg')"
    dark>
    <v-layout
      align-center
      column
      justify-center>
      <h1 class="primary--text mb-3 lobster">Voicer</h1>
      <h2 class="subheading text-xs-center">Votre plateforme de Voice Business</h2>
    </v-layout>
  </v-parallax>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster+Two:400,700');

.lobster {
  text-shadow: 3px 4px 2px rgba(0, 0, 0, 0.75);
  font-family: 'Lobster Two', cursive;
  font-weight: 700;
  font-size: 100px;
}
</style>

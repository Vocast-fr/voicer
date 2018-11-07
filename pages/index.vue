<template>
  <div>
    <w-banner/>
    <v-container 
      fill-height 
      grid-list-lg>
      <v-layout 
        row 
        wrap>
        <v-flex xs12>
          <div class="my-5">
            <div class="title mb-3">Voicer, qu'est ce que c'est ?</div>
            <v-divider class="my-3"/>
            <div class="subheading">
              <p>Voicer, à prononcer à l'anglaise « Voyceur » est une application de diffusion de contenu audio pour améliorer la communication interne au sein d'un groupe privé.</p>
              <p>Personnalisable, flexible et intuitive, Voicer est la webradio qui rythmera votre quotidien.</p>
            </div>
            <v-btn
              to="/voices"
              class="mx-0"
              color="primary"
              round
              large>
              Essayer
            </v-btn>
          </div>
        </v-flex>
        <!-- <v-flex xs12>
          <h3>Sur les ondes</h3>
        </v-flex>
        <v-flex px-0>
          <v-btn 
            outline 
            color="primary">
            <v-icon left>fiber_manual_record</v-icon>
            Caster un live</v-btn>
        </v-flex>
        <v-flex xs12>
          <w-podcast
            :podcasts="podcasts"
          />
        </v-flex> -->
        <v-flex>
          <v-layout
            row 
            wrap 
            class="my-5">
            <v-flex xs12>
              <v-divider class="my-3"/>
            </v-flex>
            <v-flex 
              xs12 
              text-xs-center>
              <a 
                target="_blank" 
                href="https://www.mediameeting.fr/">
                <img
                  src="@/assets/img/logo-mediameeting.png"
                  width="100px">
              </a>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import WPodcast from '@/components/WPodcast'
import WBanner from '@/components/WBanner'

export default {
  components: {
    WPodcast,
    WBanner
  },

  transition: 'page',
}
</script>

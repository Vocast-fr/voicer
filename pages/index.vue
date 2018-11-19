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
            <div class="title mb-3">VocastPWA, qu'est ce que c'est ?</div>
            <v-divider class="my-3"/>
            <div class="subheading">
              <p>Vocast est une plateforme de diffusion de podcast destinée aux producteurs amateurs de contenus audios.</p>
              <p>Conçue par les podcasteurs et pour les podcasteurs, elle réunie technologie moderne et simplicité.</p>
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
          <w-voicy
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
                href="https://twitter.com/TakCastel">
                <img
                  class="image-round"
                  src="@/assets/img/takcastel.jpg"
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
import WVoicy from '@/components/WVoicy'
import WBanner from '@/components/WBanner'

export default {
  components: {
    WVoicy,
    WBanner
  },

  transition: 'page',
}
</script>

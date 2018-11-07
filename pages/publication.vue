<template>
  <w-layout-card>
    <v-card slot="content">
      <v-form
        ref="form"
        v-model="form.valid" 
        lazy-validation>
        <v-card-title>
          <h3>Publier une Voicy</h3>
          <v-spacer/>
          <v-btn 
            icon 
            small
            color="transparent"
            @click="handleUndo">
            <v-icon small>clear</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider/>
        <v-card-text>
          <v-text-field
            v-model="form.title"
            :rules="form.titleRules"
            label="Titre de la Voicy"
            solo-inverted
            required
          />
          <v-textarea
            v-model="form.description"
            :rules="form.descriptionRules"
            label="Description de la Voicy"
            solo-inverted
            required
          />
          <label 
            for="audio">
            <h4 class="ml-5 pb-2">URL du fichier audio :</h4>
          </label>
          <v-text-field
            id="audio"
            v-model="form.audio"
            :rules="form.audioRules"
            placeholder="https://mediameeting.streamaudio.mp3"
            prepend-icon="link"
            solo-inverted
            required
          />

          <label 
            for="image">
            <h4 class="ml-5 pb-2">URL de l'image de couverture :</h4>
          </label>
          <v-text-field
            v-model="form.thumbnail"
            :rules="form.thumbnailRules"
            placeholder="https://mediameeting.thumbnail.png"
            prepend-icon="link"
            solo-inverted
            required
          />
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-btn 
            round
            large
            color="primary" 
            @click="handlePublish">
            <v-icon left>library_add</v-icon>
            Publier
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </w-layout-card>
</template>

<script>
import WLayoutCard from '@/components/WLayoutCard'

export default {
  components: {
    WLayoutCard
  },

  data: () => ({
    form: {
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'Vous devez renseigner un titre',
        v => (v && v.length <= 36) || 'Votre titre ne doit pas contenir plus de 36 caractères'
      ],
      description: '',
      descriptionRules: [
        v => !!v || 'Vous devez écrire quelque chose',
      ],
      audio: '',
      audioRules: [
        v => !!v || 'Vous devez ajouter un fichier audio',
      ],
      thumbnail: '',
      thumbnailRules: [
        v => !!v || 'Une image de couverture est demandée',
      ]
    }
  }),

  methods: {
    handlePublish () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('submitPodcast', {
          id: this.$store.publish.id ? this.$store.publish.id : undefined,
          title: this.form.title,
          description: this.form.description,
          audio: this.form.audio,
          thumbnail: this.form.thumbnail
        })
        this.$refs.form.reset()
      }
    },

    handleUndo () {
      this.$router.go(-1)
    }
  }
}
</script>

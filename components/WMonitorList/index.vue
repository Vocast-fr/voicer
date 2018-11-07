<template>
  <v-list 
    v-if="items" 
    :three-line="$vuetify.breakpoint.lgAndUp"
    two-line>
    <v-hover 
      v-for="item in items"
      :key="item.id">
      <v-list-tile 
        slot-scope="{ hover }"
        :class="{ 'grey darken-2': hover }">
        <v-list-tile-content>
          <v-list-tile-title>
            {{ item.title }}
          </v-list-tile-title>
          <v-list-tile-sub-title 
            v-if="$vuetify.breakpoint.lgAndUp" 
            class="text--primary text-truncate text-no-wrap">
            {{ item.description }}
          </v-list-tile-sub-title>
          <!-- <v-list-tile-sub-title>
            <v-chip 
              v-if="item.published"
              disabled
              label 
              small
              outline
              class="ma-0 success"
              color="success">
              <v-icon 
                color="success" 
                left>label</v-icon>Publié
            </v-chip>
            <v-chip 
              v-else
              disabled
              label 
              small
              outline
              class="ma-0 secondary"
              color="secondary">
              <v-icon 
                color="secondary" 
                left>label</v-icon>Non publié
            </v-chip>
          </v-list-tile-sub-title> -->
        </v-list-tile-content>
        <v-list-tile-action>
          <v-list-tile-action-text v-if="$vuetify.breakpoint.smAndUp">
            Dernière modification le {{ formatDate(item.updatedAt) }}
          </v-list-tile-action-text>
          <div class="buttons-flex px-1 mb-2">
            <w-monitor-edit :id="item.id"/>
            <!-- <w-monitor-status :id="item.id"/> -->
            <w-monitor-delete :id="item.id"/>
          </div>
        </v-list-tile-action>
      </v-list-tile>
    </v-hover>
  </v-list>
  <v-card v-else>
    Pas de Voices
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

import formatDate from '@/mixins/formatDate'
import WMonitorDelete from './WMonitorDelete'
import WMonitorEdit from './WMonitorEdit'
import WMonitorStatus from './WMonitorStatus'

export default {
  components: {
    WMonitorDelete,
    WMonitorEdit,
    WMonitorStatus
  },
  mixins: [formatDate],
  computed: {
    ...mapState({
      items: state => state.application.items
    })
  },
}
</script>

<style lang="scss" scoped>
.buttons-flex {
  display: flex;
  width: 62px;
  justify-content: space-between;
  align-items: center;
}
.v-list > :nth-child(2n) {
    background: #181818;
}
</style>

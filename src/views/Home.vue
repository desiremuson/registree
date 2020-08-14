<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="degrees"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>
  </v-data-table>
</template>

<script>
import DegreeService from '../DegreeService'
const degreeService = new DegreeService()
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      degrees: [],
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Course Name',
          align: 'left',
          sortable: false,
          value: 'name'

        },
        { text: 'Level', value: 'level' },
        { text: 'Duration', value: 'duration' },
        { text: 'Code', value: 'code' }
      ]

    }
  },
  created () {
    degreeService
      .getAllDegree()
      .then(response => {
        this.degrees = response[0].data.concat(response[1].data)
      })
      .catch(err => console.log(err))
  }
}
</script>

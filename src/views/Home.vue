<template>
  <v-data-table
    v-model="selected"
    show-select
    :headers="headers"
    :items="degrees"
    item-key="code"
    class="elevation-1 pa-6"
  >
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
      selected: []

    }
  },
  created () {
    degreeService
      .getAllDegree()
      .then(response => {
        this.degrees = response[0].data.concat(response[1].data)
      })
      .catch(err => console.log(err))
  },
  computed: {
    headers () {
      return [
        {
          text: 'Course Name',
          align: 'left',
          sortable: false,
          value: 'name',

          filter: this.courseFilter
        },
        {
          text: 'Level',
          value: 'level',
          filter: this.qualificationFilter
        },
        { text: 'Duration', value: 'duration' },
        { text: 'Code', value: 'code' }
      ]
    }

  }

}
</script>

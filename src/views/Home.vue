<template>
  <v-data-table
    v-model="selected"
    show-select
    :headers="headers"
    :items="degrees"
    item-key="code"
    class="elevation-1 pa-6"
  >
    <template v-slot:top>
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <v-row class="pa-6">
              <v-select
                :items="qualificationList"
                v-model="qualificationFilterValue"
                label="Qualification"
              ></v-select>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row class="pa-6">
              <v-select
                :items="courseList"
                v-model="courseFilterValue"
                label="Course"
              ></v-select>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-btn
              @click="submit"
              :disabled="isDisabled"
              small
              color="#6DC024"
              dark
              >Submit</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
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
      courseFilterValue: null,
      qualificationFilterValue: null,
      // List of Courses
      courseList: [
        { text: 'All', value: null },
        { text: 'Agriculture', value: 'Agriculture' },
        { text: 'Architecture', value: 'Architecture' },

        { text: 'Computer Sciences', value: 'Computer Sciences' },
        {
          text: 'Biological and Biomedical Sciences',
          value: 'Biological and Biomedical Sciences'
        },
        { text: 'Business', value: 'Business' },
        {
          text: 'Communications and Journalism',
          value: 'Communications and Journalism'
        },
        {
          text: 'Culinary Arts and Personal Services',
          value: 'Culinary Arts and Personal Services'
        },
        { text: 'Education', value: 'Education' },
        { text: 'Engineering', value: 'Engineering' },
        { text: 'Legal', value: 'Legal' },
        {
          text: 'Liberal Arts and Humanities',
          value: 'Liberal Arts and Humanities'
        },
        {
          text: 'Medical and Health Professions',
          value: 'Medical and Health Professions'
        },
        { text: 'Physical Sciences', value: 'Physical Sciences' },
        { text: 'Psychology', value: 'Psychology' },
        {
          text: 'Visual and Performing Arts',
          value: 'Visual and Performing Arts'
        }
      ],
      //   List of Qualifications
      qualificationList: [
        { text: 'All', value: null },
        { text: 'Coursework', value: 'Coursework' },
        { text: 'Bachelor', value: 'Bachelor' },
        { text: 'Master', value: 'Master' },
        { text: 'Doctorate', value: 'Doctorate' }
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
  },
  computed: {
    headers () {
      return [
        {
          text: 'COURSE NAME',
          align: 'left',
          sortable: true,
          value: 'name',

          filter: this.courseFilter
        },
        {
          text: 'LEVEL',
          value: 'level',
          filter: this.qualificationFilter
        },
        { text: 'DURATION', value: 'duration' },
        { text: 'CODE', value: 'code' }
      ]
    },
    isDisabled () {
      return this.selected.length === 0
    }
  },
  methods: {
    submit () {
      const isChecked = this.selected
      console.log('You have made ' + isChecked.length + ' selection')
      for (let i = 0; i < isChecked.length; i++) {
        console.log('code: ' + isChecked[i].code + ' is selected')
      }
    },

    courseFilter (value) {
      if (!this.courseFilterValue) {
        return true
      }

      return value === this.courseFilterValue
    },
    qualificationFilter (value) {
      if (!this.qualificationFilterValue) {
        return true
      }
      return value === this.qualificationFilterValue
    }
  }
}
</script>

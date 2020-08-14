<template>
  <v-app>
    <v-app-bar
      app
      color="#6dc024"
      dark
    >
      <div class="d-flex align-center">
       <h2>Registree  </h2>

      </div>

      <v-spacer></v-spacer>

      <h5>Desire Musondivwa</h5>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({

  })
}
</script>

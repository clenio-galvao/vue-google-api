<template functional>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-toolbar-title class="pl-3">Vue Auth Example</v-toolbar-title>

    <v-spacer />

    <!-- <v-menu offset-y v-if="props.loggedIn">
      <template v-slot:activator="{ on, attrs }">
        <v-avatar
          v-bind="attrs"
          v-on="on">
          <img :src="props.userProfile.picture" />
        </v-avatar>
      </template>
    <v-list>
      <v-list-item @click="props.logout">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
    </v-menu>

    <v-btn
      v-else
      text
      @click="props.login"
    >
      Login
    </v-btn> -->

  </v-app-bar>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

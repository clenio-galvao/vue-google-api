<template>
    <div>
      <v-banner single-line v-if="!loggedIn">
        <v-icon
            slot="icon"
            color="warning"
            size="36"
        >
            mdi-wifi-strength-alert-outline
        </v-icon>
            Unable to verify you as a real person! Please login!
      </v-banner>

      <v-banner v-else two-line>
        <v-avatar
            slot="icon"
            color="deep-purple accent-4"
            size="40"
        >
        <v-icon
            icon="mdi-lock"
            color="white"
        >
        mdi-lock
        </v-icon>
        </v-avatar>

        {{userProfile.name}} has been logged in via Google Authentication
    </v-banner>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters('user', {
      loggedIn: 'loggedIn',
      userProfile: 'userProfile'
    })
  }
}
</script>

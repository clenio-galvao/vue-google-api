<template>
  <div id="app">
    <navbar />
    <h1>Desafio Connecta Nuvem</h1>
    <google-user v-model="user"></google-user>

  </div>
</template>

<script>
import GoogleUser from '@/components/GoogleUser'
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: { GoogleUser, Navbar },
  data () {
    return {
      user: undefined
    }
  },
  methods: {
  },
  mounted () {
    this.$gapi.currentUser()
      .then(user => {
        this.user = user
      })
    this.$gapi._libraryInit('client',
      { discoveryDocs: [ 'https://people.googleapis.com/$discovery/rest' ] })
      .then(client => {
        return client.people.people.connections.list({
          'resourceName': 'people/me',
          'pageSize': 20,
          'requestMask.includeField': 'person.names'
        }).then(response => {
          console.log(response.result.connections)
        })
      })
  }
}
</script>
<style>
body {
  font-family: sans-serif;
  color: #666;
  background-color: #f8f8f8;
}
#app {
  text-align: center;
  margin-top: 60px;
}
#app button {
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.25);
  background-color: #eee;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #808080;
}
#app button:hover {
  background-color: #2f2f2f;
  box-shadow: 3px 3px 12px rgba(0,0,0,0.33);
  color: #fff;
}
#app button:focus {
  outline: none;
}
</style>

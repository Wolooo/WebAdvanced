<template>
  <div>
      <H3>Klanten Lijst</H3>
  </div>
  <div class="container">
    <div class="row">
      <AddUser @on-adduser="addUser($event)"/>
    </div>
    <div class="row">
      <User v-for="(user, index) in klanten"
            v-bind:key="index" v-bind:user="user"
            @on-delete="deleteUser(user)"
            @on-edit="editUser(user, $event)"
      />
    </div>
  </div>
</template>

<script>
import User from './User';
import AddUser from './AddUser';
export default {
    name: "UserList",
    data() {
      return {
        klanten: [
          {voornaam: 'Jasper', status: true},
          {voornaam: 'Kimberly', status: false},
          {voornaam: 'Nicolas', status: true},
          {voornaam: 'Daniel', status: false},
          {voornaam: 'Doriene', status: false},
          {voornaam: 'Ilias', status: false}
        ]
      }
    },
  methods: {
    addUser(newUser) {
      this.klanten.push({
        voornaam: newUser,
        status: false
      })
    },
    deleteUser(deleteUser) {
      this.klanten = this.klanten.filter(klant => klant.voornaam !== deleteUser.voornaam)
    },
    editUser(user, newUser) {
      user.voornaam = newUser;

    }
  },
  components: {
    User,
    AddUser
  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    width: 50%;
    background: #1577b0;
    margin: 10px auto;
    padding: 5px;
    border: 2px solid darkblue;
  }

  p {
    font-size: 18px;
  }
</style>
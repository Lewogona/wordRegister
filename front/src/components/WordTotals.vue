<template>
  <div id="totals">
    <label for="totalDay" size="lg">Total mots du jour :</label>
    <b-form-input id="totalDay" :value="`${totalDay} /1 666`" readonly></b-form-input>
    <label for="totalNano" size="lg">Total mots du NaNoWriMo :</label>
    <b-form-input id="totalNano" :value="`${totalMonth} /50 000`" readonly></b-form-input>
  </div>
</template>

<script>
import axios from "../services/axios-service"

export default {
  name: 'WordsTotal',
  props: {

  },
  data() {
    return {
      sessionsDay: [],
      sessionsMonth: [],
    }
  },
  created() {
    // Get the project with its id
    axios.get("sessions/day")
      .then(response => {
        this.sessionsDay.push(...response.data);
      }).catch(e => {
        console.error(e);
      })
    axios.get("sessions/month")
      .then(response => {
        this.sessionsMonth.push(...response.data);
      }).catch(e => {
        console.error(e);
      })
  },
  computed: {
    // Retrieve the user with their info
    currentUser() {
      return this.$store.state.auth.user;
    },
    totalDay() {
      return this.sessionsDay.reduce((totalWord, session) => {
        totalWord += session.totalSessionWord;
        return totalWord
      }, 0)
    },
    totalMonth() {
      return this.sessionsMonth.reduce((totalWord, session) => {
        totalWord += session.totalSessionWord;
        return totalWord
      }, 0)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#totalDay, #totalNano {
  width: 300px;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
}

#totals {
  margin-top: 20px;
}
</style>
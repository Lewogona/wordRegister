<template>
  <div>
    <b-card id="profile-info"
      header-bg-variant="primary"
      header="Profil d'utilisateur"
      text-variant="white">
      <b-row>
        <!-- <b-col md="5" lg="4" xl="3" class="my-3" @click="openFileInput"> -->
        <b-col md="5" lg="4" xl="3" class="my-3">
          <avatar 
            :username="`Lewogona Tran`" 
            background-color="purple" 
            :size="200" 
            :rounded="false" 
            color="white"
            class="mx-auto pointer"
            >
            <!-- :src="imageUrl"> -->
          </avatar>
          <!-- <label for="profile-picture">
            <input 
                id="profile-picture"
                type="file"
                ref="fileRef"
                @change="onChangeFile"
                class="hidden"/>
                <p>Photo de profil</p>
          </label> -->
        </b-col>
        <b-col md="7" lg="8" xl="9">
          <b-card-text class="my-3 black">Prénom : Lewogona</b-card-text>
          <b-card-text class="my-3 black">Nom : </b-card-text>
          <b-card-text class="my-3 black">Email : </b-card-text>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
    
<script>
  import Avatar from "vue-avatar"

  export default {
    name: 'UserProfile',
    components: {
      Avatar,
    },
    data() {
      return {
      }
    }
  }
</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#profile-info {
  width: 80%;
  margin: auto;
  text-align: left;
}
</style>
<template>
  <div id="Login">
    <div class="text-center">
        <div class="col-12">
        <img :src="require('../assets/log1.png')" class="my-1" height="300" />
        </div>
        <v-col></v-col>
        <div class="col-12 mb-4">
            <h1 class="display-1 font-weight-medium mb-3">WELCOME TO PROJECT TEST</h1> 
            <div class="row">
                <div class="col-4"></div>               
                <div class="col-4 mb-6">
                    <v-text-field value="" label="Username" v-model="username" outlined></v-text-field>
                    <v-text-field type="password" value="" label="Password" v-model="password" outlined></v-text-field>
                    <v-btn color="success" elevation="7" large x-large @click="login()" >LOGIN</v-btn>
                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
  
  export default {
    name: "Login",
    
    data: function(){
        return{
            username: '',
            password: '',
            user:'test',
            pass:'1234'
        }
    },
    methods: {
        login(){
            if(this.username == this.user && this.password == this.pass){
                localStorage.setItem("username",this.username)
                console.log("success");
                //router:to="$router.push('/Welcome')"
                //this.$route.push({name:'/welcome'})
                window.location = "Welcome"
                
            }
            else{
                alert("Invalid Username or Password")
            }
            console.log(this.username,this.password);
        }
    }
  };
</script>

<style>

</style>
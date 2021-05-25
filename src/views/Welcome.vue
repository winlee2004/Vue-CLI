<template>
    <div class="text-center">
        <h1>Welcome To My World</h1>
        <h1>Hello ------ {{name}} ------ Welcome Back </h1>
    </div>
</template>

<script>
export default {
    name: 'Welcome',

    data() {
        return {
            name:''
        };
    },
    mounted() {
        
    },
    created(){
        this.checkLogin()
    },
    methods: {
        checkLogin(){
            var username = localStorage.getItem("username")
            if(!username){
                window.location = "Login"
            }
            else{
                this.name = username
            }
        }
    },
};
</script>

<style>

</style>
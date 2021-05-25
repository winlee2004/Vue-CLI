<template>
    <div class="text-center">
        <h1>Logout</h1>
        <v-btn color="warning" elevation="7" large x-large @click="logout()" >LOGOUT</v-btn>
        
    </div>
</template>

<script>
export default {
    name: 'Logout',
    
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        logout(){
            localStorage.clear()
            window.location = "/"
        }
    },
};
</script>

<style lang="scss" scoped>

</style>
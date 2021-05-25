<template>
  <v-app>
    <v-app-bar app dense flat color="primary" dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <span @click="wel()">Test Vue-CLI Project</span>      
    </v-app-bar>
    <v-navigation-drawer dense app class="primary" dark v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Vue-CLI Project
          </v-list-item-title>
          <v-list-item-subtitle>
            Test is Project
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider> 

      <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title" 
            router :to="item.route"
            
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Bar',
  

  data() {
        return {
          drawer: false,
          items: [
          { title: 'STOCK', icon: 'mdi-view-dashboard',route:"/stock" },
          { title: 'LIST', icon: 'mdi-folder',route:"/list" },
          { title: 'LOGOUT', icon: 'mdi-lock',route:"/logout"},
          ],
      right: null,
        };
    },
    methods:{
      wel(){
        window.location = "Welcome"
      }
    },
};
</script>
<template>
    <div id="app">
        <v-app id="inspire">
            <v-row justify="center">                
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <h1>Vue-CLI Project</h1>
                    <template v-slot:activator="{ on, attrs }">
                    <v-row class="col-12" justify="center">
                        <v-col class="col-4"></v-col>
                        <v-col class="col-4">
                            <h1>STOCK</h1>
                        </v-col>
                        <v-col class="col-2"><v-btn color="success" dark v-bind="attrs" v-on="on">ADD DATA</v-btn></v-col>
                    </v-row>
                    <v-row class="col-12">
                        <v-col class="col-12">
                            <v-simple-table dark>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-center">No.</th>
                                            <th class="text-center">ID</th>
                                            <th class="text-center">Name</th>
                                            <th class="text-center">ImageUrl</th>
                                            <th class="text-center">Edit</th>
                                            <th class="text-center">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(data,index) in $store.getters.ID" :key="index">
                                            <td class="text-center">{{index+1}}</td> 
                                            <td class="text-center">{{data.id}}</td> 
                                            <td class="text-center">{{data.name}}</td> 
                                            <td class="text-center">{{data.url}}</td>
                                            <td class="text-center"><v-btn class="green" @click="openEdit(index,data)">EDIT</v-btn></td> 
                                            <td class="text-center"><v-btn class="red" @click="deleteID(index)">DELETE</v-btn></td>                                               
                                        </tr> 
                                    </tbody>
                                </template>    
                            </v-simple-table> 
                        </v-col>       
                    </v-row>                                                           
                   </template>
                    <v-dialog v-model="dialog2" max-width="290">
                        <v-card>
                            <v-card-title>
                                <span class="headline">EDIT DATA</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Push ID" v-model="id" v-on:change="id = $event.target.value" ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Push Name" v-model="name" v-on:change="name = $event.target.value"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field label="Push ImageUrl" v-model="url" v-on:change="url = $event.target.value"></v-text-field>
                                        </v-col>               
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeEdit(index)">CLOSE</v-btn>
                                <v-btn color="blue darken-1" text @click="editID()">EDIT NOW</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-card>
                        <v-card-title>
                            <span class="headline">ADD DATA</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Push ID" v-model="id" ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Push Name" v-model="name" ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field label="Push ImageUrl" v-model="url" ></v-text-field>
                                    </v-col>               
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">CLOSE</v-btn>
                            <v-btn color="blue darken-1" text @click="addID()">ADD NOW</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                
            </v-row>
            
        </v-app>
    </div>
</template>

<script>
//import index from "./store/index"
export default {
    name: 'Stock',
    //index,
    data() {
        return {
            dialog: false,
            dialog2: false,
            id:"",
            name:"",
            url:""
        };
    },

    methods: {
        addID() {
            if (this.id) {
            let payload = {id:this.id, name: this.name, url: this.url };
            this.$store.dispatch("addID", payload);
            console.log("success");
            alert("success")
            this.dialog = false
            }
            else{
                console.log("kkkkkkkk");
                alert("false")
            }
        },
        deleteID(index){
            this.$store.dispatch("deleteID",index);
        },
        editID(){
            let payload = {
                index: this.editIndex,
                id: this.id,
                name: this.name,
                url: this.url
            };
            this.$store.dispatch("editID", payload).then(this.dialog2 = false);
        },
        openEdit(index, data){
            this.editIndex = index;
            this.id = data.id;
            this.name = data.name;
            this.url = data.url;
            this.dialog2 = true
        },
        closeEdit() {
            this.editIndex = -1;
            this.id = "";
            this.name = "";
            this.url = "";
            this.dialog2 = false
        },
    },
};
</script>

<style>

</style>
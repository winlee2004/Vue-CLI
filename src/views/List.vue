<template>
  <div id="List">
    <div class="text-center">
      <div class="row">
        <v-progress-linear
        indeterminate
        color="cyan"
      ></v-progress-linear>
        <div class="col-12">
          <img :src="require('../assets/kittipich.jpg')" class="my-1" height="300" />
        </div>
      </div>
      <v-progress-linear
        indeterminate
        color="cyan"
      ></v-progress-linear>
      <div class="row">
        <div class="col-12"><h1>MY PROFILE IS ME</h1></div>       
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-4"><h1>NAME : KITTIPICH SIRIPONG</h1></div>
        <div class="col-4"><h1>NICKNAME : WINLY</h1></div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-4"><h1>BIRTH DAY : 2 DEC 1994</h1></div>
        <div class="col-4"><h1>AGE : 26 </h1></div>
      </div>
      <div class="row">
        <div class="col-12"><h1>GRADUATION : RAJAMANGALA UNIVERSITY OF TECHNOLOGY THANYABURI</h1></div>
      </div>
      <div class="row">
        <div class="col-12"><h1>I VERY LIKE ROSE</h1></div>        
      </div>
      <div class="row">
        <div class="col-12">
          <img :src="require('../assets/rose.jpg')" class="my-1" height="300" />
        </div>        
      </div>
    </div>
  </div>
</template>

<template>
  <div>
    <header>
      <div>
        <rmHeader @changeState='changeState'/>
      </div>
    </header>
    <div class='row'>
      <div class="col-md-auto sideMenu">
         <transition name="slide-fade">
        <div v-if='isMenuOpen'>
          
          <rmSideMenu />
          
          </div>
          </transition>
        </div>  
        
        <div class='col-8'>
          <transition name="slide-fade">
          <router-view/>
          </transition>
        </div>
    </div>
  </div>
</template>

<script>
  import rmHeader from './components/rm-header.vue';
  import rmSideMenu from './components/rm-sideMenu.vue';
  import rmAllCards from './components/rm-allCards.vue';
  import json from '../cards.json'
  

export default {
  name: 'App',
  components:{
    rmHeader,
    rmSideMenu,
    rmAllCards  
  },
  data(){
    return{
      isMenuOpen: true      
    }
  },
  methods: {
    changeState(){
      if(this.isMenuOpen)
      {
        this.isMenuOpen = false;
      }
      else{
        this.isMenuOpen = true;
      }
    }
  },

  mounted(){
   this.$store.commit('saveCards',json);
   
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

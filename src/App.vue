<template>
  <div class='noScrollBar'>
    <header>
      <div>
        <rmHeader @changeState='changeState'/>
      </div>
    </header>
    <div class='row'>
      <div class="col-3-auto ">
        <transition name="slide-fade">
        <div v-if='isMenuOpen'>          
          <rmSideMenu />          
          </div>
          </transition>
        </div> 
        <div class='col-8 sizeRow'>
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
      this.isMenuOpen = !this.isMenuOpen;
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

.sizeRow{
    height: calc(100vh - 60px);
    overflow-y: scroll;
}
.noScrollBar{
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>

<template>
  <div>
    <header>
      <div>
        <rmHeader @changeState='changeState'/>
      </div>
    </header>
    <div class='row'>
      <div class="col-md-auto sideMenu">
        <div v-if='isMenuOpen'>
          <rmSideMenu />
          </div>
        </div>  
        <!--faltaria el div de column -->
        <router-view/>
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

</style>

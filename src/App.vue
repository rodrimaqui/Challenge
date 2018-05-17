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
          <rmSideMenu @cardFilter='cardFilter' @cardTechnology='cardTechnology' />
          </div>
        </div>  
      <div >
         <rmCard  v-for="(card,key) in allCards" :card='card' :key='card.id'/>
      </div>
    </div>
  </div>
</template>

<script>
  import rmHeader from './components/rm-header.vue';
  import rmSideMenu from './components/rm-sideMenu.vue';
  import rmCard from './components/rm-card.vue';

export default {
  name: 'App',
  components:{
    rmHeader,
    rmSideMenu,
    rmCard

  },
  data(){
    return{
      isMenuOpen: true,
      allCards : [],
      
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
    },
    cardFilter(aux){
      
      this.allCards = aux;
    },
    cardTechnology(aux){
      this.allCards = aux;
    }



  },

  mounted(){
    this.allCards = this.$cardService.allCards();
  }
}
</script>

<style>

</style>

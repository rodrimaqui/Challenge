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
          <div  transition="bounce">
          <rmSideMenu/>
          </div>
        </div>  
      </div>
      <div class="col-8">
        <rmAllCards :allCards='allCards'/>
      </div>
    </div>
  </div>
</template>

<script>
  import rmHeader from './components/rm-header.vue';
  import rmSideMenu from './components/rm-sideMenu.vue';
  import rmAllCards from './components/rm-allCards.vue';

export default {
  name: 'App',
  components:{
    rmHeader,
    rmSideMenu,
    rmAllCards
  },
  data(){
    return{
      isMenuOpen: true,
      allCards : []
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
    this.allCards = this.$cardService.allCards();
  }
}
</script>

<style>
.bounce-transition {
  display: inline-block; /* otherwise scale animation won't work */
}
.bounce-enter {
  animation: bounce-in .5s;
}
.bounce-leave {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>

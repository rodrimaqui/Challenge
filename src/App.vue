<template>
  <div class='noScrollBar backgroundAllCards'>
    <header>
      <div>
        <rmHeader @changeState='changeState'/>
      </div>
    </header>
    <div class="conteiner-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-2 col-md-3 col-sm-3 p-0 m-0">
            <transition name="slide-fade">
            <div v-if='isMenuOpen'>
              <rmSideMenu />          
            </div>
          </transition>
        </div>
        <div v-if='isMenuOpen' class="col-xl-9 col-lg-10 col-md-9 col-sm-9 sizeRow">
             <transition name="slide-fade">
             <router-view/>
          </transition>
        </div>
        <div v-else class="col-12  sizeRow">
          <transition name='slide-fade'>
            <router-view/>
          </transition>
        </div>
        
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

.backgroundAllCards{
    background: rgba(241, 229, 229, 0.884);
}

</style>

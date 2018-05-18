<template>
    <div>
        <div class='row'>
            <label class="LANGUAGES-TECHNOLOGIES">LANGUAGES & TECHNOLOGIES</label> 
        </div>
        <div class="row">
      
            <rmCard  v-for="(card,key) in getCards" :card='card' :key='card.id'/>
      </div>
    </div>
</template>
<script>
    import rmCard from './rm-card.vue';
    import json from '../../cards.json';

    export default{
        name: 'rmAllCards',

        components:{
            rmCard
        },
        data(){
            return{
                json
               
            }
        },
        computed:{
             getCards(){
                 return this.$store.state.cards;
             }
        },
        mounted(){            
             this.$store.commit('statusSearch',true);
        }
    }
</script>
<style>
.LANGUAGES-TECHNOLOGIES {
  width: 500px;
  height: 17px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: 0.2px;
  text-align: left;
  color: #020202;
  color: var(--black-two);
}

</style>
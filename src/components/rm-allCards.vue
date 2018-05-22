<template>
    <div class="backgroundAllCards">
        <div class='row'>
            <label class="LANGUAGES-TECHNOLOGIES">LANGUAGES & TECHNOLOGIES</label> 
        </div>
        <div class="row">
            <div v-for="(card,key) in getCards"  :key='card.id'>      
            <rmCard class='aaa'  :card='card'/>
        </div>
      </div>
    </div>
</template>
<script>
    import rmCard from './rm-card.vue';

    export default{
        name: 'rmAllCards',

        components:{
            rmCard
        },
        data(){
            return{

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
 .aaa{
     margin-right: 15px;
    
     margin-top: 15px;
 }
.backgroundAllCards{
    background: rgba(241, 229, 229, 0.884);
}

</style>
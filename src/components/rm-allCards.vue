<template>
    <div>
        <div >
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
        }
    }
</script>
<style>

</style>
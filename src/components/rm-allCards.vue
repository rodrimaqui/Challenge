<template>
    <div>
        <rmCard  v-for="(card,key) in allCards" :card='card' :key='card.id'/>
    </div>
</template>
<script>
    import rmCard from './rm-card.vue';
    export default{

        name: 'rmAllCards',
        components:{
            rmCard
        },
       /* props:[
            'allCards'
        ],*/
        
        data(){
            return{
                allCards : []
            }
        },
        mounted(){
            this.allCards = this.$cardService.allCards();
        }
    }
</script>
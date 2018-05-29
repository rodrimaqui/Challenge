<template>
    <div>
        <label class="LANGUAGES-TECHNOLOGIES">LANGUAGES & TECHNOLOGIES</label>
        <div class="card-columns">
            <div v-for="(card) in getCards" :key='card.id'>
                <rmCard  :card='card'/>                
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

@media (min-width: 34em) {
    .card-columns {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
    }
}

@media (min-width: 48em) {
    .card-columns {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
    }
}

@media (min-width: 62em) {
    .card-columns {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }
}

@media (min-width: 75em) {
    .card-columns {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }
}

</style>
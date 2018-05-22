<template>
    <div class='pad-Card'>
       <router-link v-bind:to="'/'+card.cardId">
        <div class="card" style="width: 325px;">
            <img class="card-img-top" :src=card.cardImageUrl alt="Card image">
            <div class="card-body">
                <h5 class="card-title">{{card.cardTitle}}</h5>
                <p class="card-text">{{card.cardDescription}}</p>
            </div>
        </div>
       </router-link>
    </div>
</template>
<script>
export default {
    name:'rmCard',
    props:[
        'card',
        'index'
    ],

    data(){
        return{

        }
    }
}
</script>
<style>
.pad-Card{
    padding-left: 6%;
}
</style>


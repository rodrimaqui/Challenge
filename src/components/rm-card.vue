<template>
    <div>
       <router-link class='text' v-bind:to="'/'+card.cardId">
        <div class="card">
            <img class="card-img-top" :src=card.cardImageUrl alt="Card image">
            <div class="card-body">
                <p class="card-text text">{{card.cardDescription}}</p>
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
.text{    
    font-family: 'roboto';
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.2px;
    text-align: left;
    color: #313131;
    color: var(--black);
}
</style>

<style>
</style>

<template>
    <div class='col-2'>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src=card.cardImageUrl alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{card.cardTitle}}</h5>
                <p class="card-text">{{card.cardDescription}}</p>
            </div>
        </div>
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


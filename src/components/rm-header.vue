<template>
    <div class='navbar navbar-dark bg-primary'>
        <button>
            <img src="../../avalith.png" alt="logotype of Avalith" height="42" width="42" @click="changeState">
        </button>
    </div>
</template>
<script>
    export default {
        name: 'rmHeader',
        data(){
            return{

            }
        },
        methods:{
            changeState(){
                this.$emit('changeState');
            }
        }
    }
</script>
<style>

</style>
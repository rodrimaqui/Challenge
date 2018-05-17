<template>
    <div class='background2 '>
        <button>
            <img src="../../avalith.png" alt="logotype of Avalith" height="39" width="35" @click="changeState">
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
.background2 {
  width: 1518px;
  height: 60px;
  background-color: #020202;
}
button{
    margin-top: 5px;
    margin-left: 10px
}
</style>
<template>
    <div class='background2'>
        <img src="../../avalith.png" alt="logotype of Avalith" height="39" width="35" @click="changeState">
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
  width: 100%;
  height: 60px;
  background-color: #020202;
  padding-left: 30px;
  padding-top: 10px;
}
button{
    margin-top: 5px;
    margin-left: 10px
}
</style>
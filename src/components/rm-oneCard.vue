<template>
    <div>
        <div class='Layer-3'>
            <router-link v-bind:to="'/'">
                <label class='Go-back'>Go Back</label>
            </router-link>
        </div>
        
    </div>
</template>
<script>
    export default{
        name: 'rmOneCArd',

        data(){
            return{
                aux: '',
                id : 0
            }
        },
        computed:{
            getId(){
                return this.id = this.$route.params.id;
            }
        },
        methods:{
            findCard(id){
                const aux = this.$store.state.cards;
                console.log(aux)
                this.aux = aux.find(c => c.cardId == id);
            }
        },
        watch:{
            id(){
                this.findCard(this.id);
            }
        },
        mounted(){
            this.findCard(this.getId);
            
        }
    }
</script>
<style>
.Layer-3 {
  width: 109px;
  height: 36px;
  background-color: #020202;
  margin-top: 10px;
}
.Go-back {
  width: 65px;
  height: 14px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.2px;  
  color: #ffffff;
}
</style>
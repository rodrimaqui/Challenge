<template>
    <div>        
        <div class='row'>
            <div class='Layer-3'>
                <router-link v-bind:to="'/'">
                    <label class='Go-back'>Go Back</label>
                </router-link>
            </div>
            <div v-if='aux'>
                <img :src=aux.cardPost.postImageUrl :alt="aux.cardPost.postTitle" width="1200"  height="200">
                <br/>
                <br/>
            </div>
        </div>
        <div v-if='aux' class='row'>
                <div class='col-8'>
                    <label>
                        {{aux.cardPost.postDescription}}
                    </label>
                </div>
                <div class='col-4'>
                    <label> {{aux.cardPost.postTitle}}</label>
                    <br/>
                    <br/>                    
                   <chartjs-doughnut :width="250" :height="250" :datasets='datasets' :option='option' ></chartjs-doughnut>                   
                </div>       
        </div>
    </div>
</template>
<script>

    export default{
        name: 'rmOneCArd',

        data(){
            return{
                aux: '',
                id : 0,
                datasets:[
                    {
                        data:[],
                        backgroundColor:['red','yellow','purple']
                    }
                ],
                option:{
                    title:{
                        display:false,                        
                    }
                }
                
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
                this.aux = aux.find(c => c.cardId == id);
                if(this.aux != undefined){
                    this.datasets[0].data = this.aux.cardGraph.data;
                }
            } 
        },
        watch:{
            id(){
                this.findCard(this.id);
            }
        },
        mounted(){
            this.findCard(this.getId);           
            this.$store.commit('statusSearch',false);           
        }
    }
</script>
<style>
.Layer-3 {
  width: 1200px;
  height: 200px;
  /* background-color: #020202; */
  margin-top: 10px;
}
.Go-back {
    margin-left: 0%;
    width: 109px;
    height: 36px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.2px;  
    color: #ffffff;
    background-color:#020202;
    /* padding-left: 2%;
    padding-top:1%; */
}

img{
     max-width: 100%;
   }



</style>
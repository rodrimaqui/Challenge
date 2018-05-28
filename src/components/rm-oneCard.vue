<template>
    <div>        
        <div class='row'>
            <div class="col-12">
                <div v-if='aux'>
                    <img class='img' :src=aux.cardPost.postImageUrl :alt="aux.cardPost.postTitle">
                    <router-link v-bind:to="'/'">
                            <label class='Go-back' >Go Back</label>
                        </router-link> 
                </div>
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
    position: absolute;
    top:3%;
    left:1.8%;
}
.img{
    position: relative;
    width: 100%;
    height: 200px;
}
</style>
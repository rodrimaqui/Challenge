<template>
    <div class='background'>
        <div class='rmInformation'>
        <label>Rodrigo Maquirriain</label>
        <br/>
        <label>35333496</label>
        <br/>
        <label>27 Years old</label>
        </div>
        <br/>
        <br/>
        <div v-if='status'>
            <input type='text' class="form-control" placeholder="Search in cards" v-model="filterCards"/>
            <br/>
            <br/>
            <label>Filter by</label>
            <br/>
            <div >
                <label><input type="radio" value='Frontend'  name="optradio" v-model='technology' >FrontEnd</label>
                </div>
                <div >
                <label><input type="radio" value='Backend' name="optradio" v-model='technology' >BackEnd</label>
            </div>
        </div> 
    </div>
</template>
<script>

    import json from '../../cards.json';
    export default {
          name: 'rmSideMenu',
          data(){
              return{
                  filterCards : '',
                  auxCards:[],
                  technology :'',
                  json,
              }
          },
          computed:{
              status(){
                  return this.$store.state.active;
              }
          },
          watch:{
            filterCards(){
                this.newArrayCards();
            },
            technology(){
                this.newArrayCardsTechnology();
            }
          },
          methods:{
              newArrayCards(){
                  
                  this.allCards = this.json; 
                  this.auxCards = this.allCards.filter(c => c.cardTitle.toLowerCase().indexOf(this.filterCards.toLowerCase()) >= 0 || c.cardDescription.toLowerCase().indexOf(this.filterCards.toLowerCase())>= 0);
                  this.$store.commit('saveCards',this.auxCards);
              },
              newArrayCardsTechnology(){
                 
                  const allCards =this.json; 
                  this.auxCards = [];                   
                  allCards.forEach(element => {
                      if(element.cardTechnology.find((c)=> c == this.technology)){
                          this.auxCards.push(element)
                      }
                  });
                  this.$store.commit('saveCards',this.auxCards);
              }
          }  
    }
</script>
<style>
.background {
  width: 390.75px;
  height: calc(100vh - 60px);
  background-color: #020202;
  color: white;
}
.rmInformation{
    background-color: rgb(61, 57, 57);
}

label{
    margin-left: 30px;
    margin-top: 10px;
    font-family: Roboto;
}
</style>

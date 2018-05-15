<template>
    <div class='side'>
        <label>Rodrigo Maquirriain</label>
        <br/>
        <label>35333496</label>
        <br/>
        <label>27 Years old</label>
        <br/>
        <br/>
        <input type='text' class="form-control" placeholder="Search in cards" v-model="filterCards"/>
        <br/>
        <br/>
        <label>Filter by</label>
        <br/>
        <div class="radio">
            <label><input type="radio" value='Frontend'  name="optradio" v-model='technology' >FrontEnd</label>
            </div>
            <div class="radio">
            <label><input type="radio" value='Backend' name="optradio" v-model='technology' >BackEnd</label>
        </div>
            
    </div>
</template>
<script>
    export default {
          name: 'rmSideMenu',
          data(){
              return{
                  filterCards : '',
                  auxCards:[],
                  technology :''
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
                  this.allCards = this.$cardService.allCards();
                  this.auxCards = this.allCards.filter(c => c.cardTitle.toLowerCase().indexOf(this.filterCards.toLowerCase()) >= 0 || c.cardDescription.toLowerCase().indexOf(this.filterCards.toLowerCase())>= 0);
                  
                  this.$emit('cardFilter',this.auxCards);
              },
              newArrayCardsTechnology(){
                 
                  const allCards = this.$cardService.allCards();
                  this.auxCards = [];                   
                  allCards.forEach(element => {
                      if(element.cardTechnology.find((c)=> c == this.technology)){
                          this.auxCards.push(element)
                      }
                  });
                  this.$emit('cardTechnology',this.auxCards);
              }
          }  
    }
</script>
<style>
    .side {
        background: rgb(99, 191, 219);
    }
</style>

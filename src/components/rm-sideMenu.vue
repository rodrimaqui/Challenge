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
            <label><input type="radio"  name="optradio">FrontEnd</label>
            </div>
            <div class="radio">
            <label><input type="radio" name="optradio">BackEnd</label>
        </div>
            
    </div>
</template>
<script>
    export default {
          name: 'rmSideMenu',
          props:[
              'allCards'
          ],
          data(){
              return{
                  filterCards : '',
                  auxCards:[]
              }
          },
          computed:{
            
                
          },
          watch:{
            filterCards(){
                this.newArrayCards();
            }
          },
          methods:{
              newArrayCards(){
                  this.allCards = this.$cardService.allCards();
                  this.auxCards = this.allCards.filter(c => c.cardTitle.toLowerCase().indexOf(this.filterCards.toLowerCase()) >= 0);
                  
                  this.$emit('all',this.auxCards);
              }
          }  
    }
</script>
<style>
    .side {
        background: rgb(99, 191, 219);
    }
</style>



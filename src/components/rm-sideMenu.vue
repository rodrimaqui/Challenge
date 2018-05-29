<template>
    <div class='background'>
        <div class='rmInformation'>
        <label class='name'>Rodrigo Maquirriain</label>
        <br/>
        <label class='dni' >35333496</label>
        <br/>
        <label class='year' >27 Years old</label>
        </div>
        <br/>
        <br/>
        <div v-if='status'>
            <input type='text' class="textBox" placeholder="Search in cards" v-model="filterCards"/>
            <br/>
            <br/>
            <label class='filter-by'>Filter by</label>
            <br/>
            <div class='rmRadio'>
                <input type="radio" value='Frontend' id='Frontend'  name="optradio" v-model='technology' >
                <label for='Frontend'>FrontEnd</label>

                <input type="radio" value='Backend' id='Backend' name="optradio" v-model='technology' >
                <label for='Backend'>BackEnd</label>
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
.rmRadio input[type='radio']{
    display:none;
}

.rmRadio label{
    color:#ffffff;
    background-color: #020202;
    font-family: 'roboto';
    font-size: 18px;
    padding: 5px 15px 5px 51px;
    display: inline-block;
    position:relative;
    border-radius: 3px;
    cursor: pointer;
    width: 50%;
}

.rmRadio label:before{
    content:'';
    width: 30px;
    height: 30px;
    display: inline-block;
    background: black;
    border: 2px solid #ffffff;
    border-radius: 50%;
    position: absolute;
    left: 17px;
}

.rmRadio input[type='radio']:checked + label:after{
    content:'';
    width: 25px;
    height: 25px;
    display: inline-block;
    background: black;
    background-color: #ffffff;
    border: 4px solid black;
    border-radius: 70%;
    position: absolute;
    left:10.8%;
    top: 23%;  
}

.rmRadio input[type='radio']:checked + label:before{
    background-color: #ffffff;
}
.background {
  height: calc(100vh - 60px);
  width: 100%;
  background-color: #020202;
  color: white;
}
.rmInformation{
    background-color: rgb(61, 57, 57);
}

.name{
    margin-left: 31%;
    margin-top: 5.16%;
    font-family: 'roboto';
    width: 116px;
    height: 17px;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: 0.2px;
    text-align: left;
    color: #ffffff;
}

.dni{
    margin-left: 28.33%;
    margin-top: 10px;
    width: 132px;
    height: 13px;
    font-family: 'roboto';
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.2px;
    text-align: left;
    color: #ffffff;
}
.year{
    margin-left: 29.6%;
    margin-top: 10px;
    width: 121px;
    height: 13px;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.2px;
    text-align: left;
    color: #ffffff;
    font-family: 'roboto';
}
.filter-by{
    margin-left: 30px;
    margin-top: 10px;
    width: 100px;
    height: 18px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.2px;
    text-align: left;
    color: #f8f8f8;
    font-family: 'roboto';
    
}
.textBox{ 
    border-top:none;
    border-left: none;
    border-right: none;
    border-bottom-color: #ffffff;
    background-color: #020202;
    margin-left:31px; 
    color: #ffffff;
    font-family: 'roboto'; 
    width: 70%;

}

.textBox:focus{
    border-top:none;
    border-left: none;
    border-right: none;
    border-bottom-color: #ffffff;
    background-color: #020202;
    margin-left:31px; 
    color: #ffffff;
    font-family: 'roboto';
    width: 70%;
    outline:0px;    
}

.technology{
    margin-left: 31px;
    width: 30%;
    height: 14px;
    font-family: 'roboto';
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.2px;
    text-align: left;
    color: #f8f8f8;
}
::placeholder{
    width: 123px;
    height: 19px;
    font-family: 'roboto';
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.2px;
    text-align: left;
    color: #f8f8f8;
}

label{
    left: 5%;
}
</style>

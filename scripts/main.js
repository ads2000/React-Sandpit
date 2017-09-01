import React from 'react';
import ReactDOM from 'react-DOM';



class Calc {
  constructor(rate,duration,principle) {
    this.rate = rate;
    this.duration = duration;
    this.principle = principle;
  }

  monthlyRate() {
     return (this.rate / 100 ) / 12 ;
  }

  term() {
     return this.duration * 12;
  }

  formula1(){
  	return this.monthlyRate() * (Math.pow((1 + this.monthlyRate() ), this.term() ) );
  }

  formula2(){
  	return (Math.pow( (1 + this.monthlyRate() ), this.term()) ) - 1 ;
  }

  repayments(){
  	var repaymentAmount = this.principle * (  this.formula1() / this.formula2() );

  	return "$" + repaymentAmount.toFixed(2)
  }

}


var submit = document.getElementById('submit');

submit.addEventListener("click", function(){

var principle = document.getElementsByClassName('principle')[0].value
var rate = document.getElementsByClassName('rate')[0].value
var term = document.getElementsByClassName('term')[0].value

 

var a = new Calc(rate,term,principle)

if(principle != "" && rate != "" && term != ""){

  document.getElementsByClassName('repaymentsResult')[0].innerHTML = a.repayments()
}

else{
  document.getElementsByClassName('repaymentsResult')[0].innerHTML = "Please fill in all fields"
}

 return false


})



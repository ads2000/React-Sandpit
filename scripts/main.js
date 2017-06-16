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

var a = new Calc(7,30,300000)

document.write(a.repayments())

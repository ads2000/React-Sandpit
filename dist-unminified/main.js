"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calc = function () {
  function Calc(rate, duration, principle) {
    _classCallCheck(this, Calc);

    this.rate = rate;
    this.duration = duration;
    this.principle = principle;
  }

  _createClass(Calc, [{
    key: "monthlyRate",
    value: function monthlyRate() {
      return this.rate / 100 / 12;
    }
  }, {
    key: "term",
    value: function term() {
      return this.duration * 12;
    }
  }, {
    key: "formula1",
    value: function formula1() {
      return this.monthlyRate() * Math.pow(1 + this.monthlyRate(), this.term());
    }
  }, {
    key: "formula2",
    value: function formula2() {
      return Math.pow(1 + this.monthlyRate(), this.term()) - 1;
    }
  }, {
    key: "repayments",
    value: function repayments() {
      var repaymentAmount = this.principle * (this.formula1() / this.formula2());

      return "$" + repaymentAmount.toFixed(2);
    }
  }]);

  return Calc;
}();

var submit = document.getElementById('submit');

submit.addEventListener("click", function () {

  var principle = document.getElementsByClassName('principle')[0].value;
  var rate = document.getElementsByClassName('rate')[0].value;
  var term = document.getElementsByClassName('term')[0].value;

  var a = new Calc(rate, term, principle);

  if (principle != "" && rate != "" && term != "") {

    document.getElementsByClassName('repaymentsResult')[0].innerHTML = a.repayments();
  } else {
    document.getElementsByClassName('repaymentsResult')[0].innerHTML = "Please fill in all fields";
  }

  return false;
});
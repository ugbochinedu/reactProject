
import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
     calculation: "",
    };
  }

  numberHandler = (number) => {
    const { displayValue } = this.state;
    let newDisplayValue = displayValue === "0" ? "" : displayValue;
    newDisplayValue += number;
    this.setState({ displayValue: newDisplayValue });
  };

  decimalHandler = () => {
    const { displayValue } = this.state;
    if (!displayValue.includes(".")) {
      this.setState({ displayValue: displayValue + "." });
    }
  };

  operatorHandler = (operator) => {
    const { displayValue,calculation } = this.state;
    this.setState({
     calculation:calculation + displayValue + operator,
      displayValue: "0",
    });
  };

  equalsHandler = () => {
    const {calculation, displayValue } = this.state;
    const newCalculation =calculation + displayValue;
    const result = eval(newCalculation);
    this.setState({ displayValue: result.toString(),calculation: "" });
  };

  clearHandler = () => {
    this.setState({ displayValue: "0",calculation: "" });
  };

  deletedHandler = () => {
    const { displayValue } = this.state;
    if (displayValue.length > 1) {
      this.setState({ displayValue: displayValue.slice(0, -1) });
    } else {
      this.setState({ displayValue: "0" });
    }
  };

  scientificFuctionsHandler = (func) => {
    const { displayValue } = this.state;
    let result;
    switch (func) {
      case "sqrt":
        result = Math.sqrt(parseFloat(displayValue));
        break;
      case "sin":
        result = Math.sin(parseFloat(displayValue));
        break;
      case "cos":
        result = Math.cos(parseFloat(displayValue));
        break;
      case "tan":
        result = Math.tan(parseFloat(displayValue));
        break;
      default:
        result = "";
        break;
    }
    this.setState({ displayValue: result.toString() });
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <div className="btns">
            <button onClick={() => this.scientificFuctionsHandler("sqrt")}>C</button>
            <button onClick={() => this.scientificFuctionsHandler("sin")}>sin</button>
            <button onClick={() => this.scientificFuctionsHandler("cos")}>cos</button>
            <button onClick={() => this.scientificFuctionsHandler("tan")}>tan</button>
          </div>
          <div className="btns">
            <button onClick={() => this.numberHandler("7")}>7</button>
            <button onClick={() => this.numberHandler("8")}>8</button>
            <button onClick={() => this.numberHandler("9")}>9</button>
            <button onClick={() => this.operatorHandler("/")}>÷</button>
          </div>
          <div className="btns">
            <button onClick={() => this.numberHandler("4")}>4</button>
            <button onClick={() => this.numberHandler("5")}>5</button>
            <button onClick={() => this.numberHandler("6")}>6</button>
            <button onClick={() => this.operatorHandler("*")}>×</button>
          </div>
          <div className="btns">
            <button onClick={() => this.numberHandler("1")}>1</button>
            <button onClick={() => this.numberHandler("2")}>2</button>
            <button onClick={() => this.numberHandler("3")}>3</button>
            <button onClick={() => this.operatorHandler("-")}>-</button>
          </div>
          <div className="btns">
            <button onClick={() => this.numberHandler("0")}>0</button>
            <button onClick={this.decimalHandler}>.</button>
            <button onClick={this.equalsHandler}>=</button>
            <button onClick={() => this.operatorHandler("+")}>+</button>
          </div>
          <div className="btns">
            <button onClick={this.clearHandler}>√</button>
            <button onClick={this.deletedHandler}>DEL</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
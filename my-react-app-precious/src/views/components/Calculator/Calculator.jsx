import React from 'react';
import './Calculator.css';


class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            display: "",
            isOn: false,
        }
        this.power = this.power.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
        this.handleClick6 = this.handleClick6.bind(this)
        this.handleClick7 = this.handleClick7.bind(this)
        this.handleClick8 = this.handleClick8.bind(this)
        this.handleClick9 = this.handleClick9.bind(this)
        this.handleClick10 = this.handleClick10.bind(this)
        this.handleClick11 = this.handleClick11.bind(this)
        this.handleClick12 = this.handleClick12.bind(this)
        this.handleClick13 = this.handleClick13.bind(this)
        this.handleClick14 = this.handleClick14.bind(this)
        this.handleClick15 = this.handleClick15.bind(this)
        this.handleClick16 = this.handleClick16.bind(this)
        this.handleClick17 = this.handleClick17.bind(this)
        this.handleClick18 = this.handleClick18.bind(this)
    }

    power(){
        if(this.state.isOn === false){
            this.setState({isOn: true})
            this.setState({display: "0"})
        }else{
            this.setState({isOn: false})
            this.setState({display: ""})
        }
    }

    handleClick(){
        if (this.state.isOn === true) {
            this.setState({display: "%"})
        }
    }

    handleClick1(){
        if (this.state.isOn === true) {
            this.setState({display: "+/-"})
        }
    }

    handleClick2(){
        if (this.state.isOn === true) {
            this.setState({display: "+"})
        }
    }

    handleClick3(){
        if (this.state.isOn === true) {
            this.setState({display: "7"})
        }
    }

    handleClick4(){
        if (this.state.isOn === true) {
            this.setState({display: "8"})
        }
    }

    handleClick5(){
        if (this.state.isOn === true) {
            this.setState({display: "9"})
        }
    }

    handleClick6(){
        if (this.state.isOn === true) {
            this.setState({display: "-"})
        }
    }

    handleClick7(){
        if (this.state.isOn === true) {
            this.setState({display: "4"})
        }
    }

    handleClick8(){
        if (this.state.isOn === true) {
            this.setState({display: "5"})
        }
    }

    handleClick9(){
        if (this.state.isOn === true) {
            this.setState({display: "6"})
        }
    }

    handleClick10(){
        if (this.state.isOn === true) {
            this.setState({display: "/"})
        }
    }

    handleClick18(){
        if (this.state.isOn === true) {
            this.setState({display: "="})
        }
    }

    handleClick11(){
        if (this.state.isOn === true) {
            this.setState({display: "1"})
        }
    }

    handleClick12(){
        if (this.state.isOn === true) {
            this.setState({display: "2"})
        }
    }

    handleClick13(){
        if (this.state.isOn === true) {
            this.setState({display: "3"})
        }
    }

    handleClick14(){
        if (this.state.isOn === true) {
            this.setState({display: "*"})
        }
    }

    handleClick15(){
        if (this.state.isOn === true) {
            this.setState({display: "0"})
        }
    }

    handleClick16(){
        if (this.state.isOn === true) {
            this.setState({display: "."})
        }
    }

    handleClick17(){
        if (this.state.isOn === true) {
            this.setState({display: "EXP"})
        }
    }


    render(){
        return(
            <div className='main-box'>
                <h1 className = 'mycalwrite'>MY CALCULATOR</h1>
                <div className ='display'>
                    <p className='ptag'>{this.state.display}</p>
                </div>
                <div className ='btn-box'>
                    <div>
                        <button onClick={this.power} id='style-dif' value="AC" className='btn'>AC</button>
                        <button onClick={this.handleClick} id='style-dif' value="%" className='btn'>%</button>
                        <button onClick={this.handleClick1} id='style-dif' value="+/-" className='btn'>+/-</button>
                        <button onClick={this.handleClick2} id='style-dif' value="+" className='btn'>+</button>
                    </div>
                    <div >
                        <button onClick={this.handleClick3} value="7" className='btn'>7</button>
                        <button onClick={this.handleClick4} value="8" className='btn'>8</button>
                        <button onClick={this.handleClick5} value="9" className='btn'>9</button>
                        <button onClick={this.handleClick6} id='style-dif' value="-" className='btn'>-</button>
                    </div>
                    <div>
                        <button onClick={this.handleClick7} value="4" className='btn'>4</button>
                        <button onClick={this.handleClick8} value="5" className='btn'>5</button>
                        <button onClick={this.handleClick9} value="6" className='btn'>6</button>
                        <button onClick={this.handleClick10} id='style-dif' value="/" className='btn'>/</button>
                    </div>
                    <div>
                        <button onClick={this.handleClick11} value="1" className='btn'>1</button>
                        <button onClick={this.handleClick12} value="2" className='btn'>2</button>
                        <button onClick={this.handleClick13} value="3" className='btn'>3</button>
                        <button onClick={this.handleClick14} id='style-dif' value="X" className='btn'>X</button>
                    </div>
                    <div >
                        <button onClick={this.handleClick15} value="0" className='btn'>0</button>
                        <button onClick={this.handleClick16} value="." className='btn'>.</button>
                        <button onClick={this.handleClick17} value="EXP" className='btn'>EXP</button>
                        <button onClick={this.handleClick18} id='style-dif' value="=" className='btn'>=</button>
                    </div>
                    {/* <button className='btn-equals'>=</button> */}
                </div>
            </div>
        )
    }
}

export default Calculator;
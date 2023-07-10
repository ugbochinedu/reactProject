import React from 'react'

class EliteClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display : "OFF",
            isOn : false,
            temperature : 16,
        }
        // this.power = power;
       this.power = this.power.bind(this)
       this.increaseTemperature = this.increaseTemperature.bind(this)
       this.decreaseTemperature = this.decreaseTemperature.bind(this)
    }

    power(){
        // if(this.isOn = false){ return this.isOn = true} else return this.isOn = false;
        // if(this.state.isOn = false)
        // this.setState({isOn:true, display: "NO"})
    //    return this.state.isOn = false? this.state.isOn = true : this.state.isOn = false;
    //    return this.isOn = true
    //    console.log(this.isOn)
        if (this.state.isOn === false) {
            this.setState({display: "ON"});
            this.setState({isOn: true})
        } else{
            this.setState({display: "OFF"})
            this.setState({isOn:false})
        }
    }

    // setTemperature(temperature){
    //     this.temperature = temperature;
    // }

    decreaseTemperature(){
        if (this.state.isOn === true && this.state.temperature > 16 && this.state.temperature <= 30){
            this.setState({temperature :this.state.temperature -1})
        }
    } 

    // increaseTemp(){
    //     if(this.state.temp >= 16 && this.state.temp < 30 && this.state.isON === true){
    //       this.setState({temp: this.state.temp + 1});
    //     }
    //   }

    increaseTemperature(){
        // if (this.state.isOn === true) {
            if (this.state.isOn === true && this.state.temperature >= 16 && this.state.temperature < 30){
                // this.temperature ++;
                this.setState({temperature : this.state.temperature +1 })
            }
        // }
    } 

    render(){
        return(
            <div>
                <p>{this.state.display}</p>
                <p>{this.state.temperature}</p>
                <button onClick={this.power} type="button">power</button>
                <button onClick={this.increaseTemperature} type="button">increase</button>
                <button onClick={this.decreaseTemperature} type="button">decrease</button>
            </div>
        )
    }

}

export default EliteClass;
// let eliteClass = new EliteClass();
// // eliteClass.isOn()
// eliteClass.power()
// eliteClass.setTemperature(16)
// // eliteClass.power()
// eliteClass.increaseTemperature()
// // eliteClass.decreaseTemperature()
// console.log(eliteClass)
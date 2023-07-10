import React from "react";
import './AirCondition.css'

class Aircondition extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          isON : false,
          display:"OFF",
          temp: 16,
          displayBtn: "",
        }
        this.acIsON = this.acIsON.bind(this);
        this.increaseTemp = this.increaseTemp.bind(this);
        this.decreaseTemp = this.decreaseTemp.bind(this);
    }

    acIsON(){
      if (this.state.isON === false) {
        this.setState({display: "ON"});
        this.setState({isON: true})
      } else{
        this.setState({display: "OFF"})
        this.setState({isON:false})
      }
    }

    decreaseTemp(){
      if(this.state.temp > 16 && this.state.temp <= 30 && this.state.isON === true){
        this.setState({temp: this.state.temp - 1});
      }
    }
    
    increaseTemp(){
      if(this.state.temp >= 16 && this.state.temp < 30 && this.state.isON === true){
        this.setState({temp: this.state.temp + 1});
      }
    }

  render(){
    return(
      <div className="main-box"> 
        <div className="inner-box">
          <div className="write-up">
            <p>{this.state.display}</p>
            <p>{this.state.temp}</p>
          </div>
        </div>
        <div className="remote-main">
          <div className="remote-box">
            <input type="button" value="decrease temp" onClick={this.decreaseTemp}/>
            <input type="button" value="increase temp" onClick={this.increaseTemp}/>
            <input type="button" value="Power" onClick={this.acIsON}/>
            <input type="button" value="decrease temp" onClick={this.decreaseTemp}/>
            <input type="button" value="increase temp" onClick={this.increaseTemp}/>
            <input type="button" value="Power" onClick={this.acIsON}/>
            <input type="button" value="decrease temp" onClick={this.decreaseTemp}/>
            <input type="button" value="increase temp" onClick={this.increaseTemp}/>
            <input type="button" value="Power" onClick={this.acIsON}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Aircondition;
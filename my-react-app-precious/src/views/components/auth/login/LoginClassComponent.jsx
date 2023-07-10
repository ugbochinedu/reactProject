import React from "react";

class LoginClassComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleEliteGuy(){
        return(
            <div>
                <p>Hi Malik</p>
            </div>
        )
    }

    handleEliteGuy1(){
        return(
            <div>
                <p>Hi Chinedu</p>
            </div>
        )
    }
    handleEliteGuy2(){
        return(
            <div>
                <p>Hi love</p>
            </div>
        )
    }
    handleEliteGuy3(){
        return(
            <div>
                <p>Hi femi</p>
            </div>
        )
    }
    handleEliteGuy4(){
        return(
            <div>
                <p>Hi chiboy</p>
            </div>
        )
    }

    // changeState(){
    //    let nameArr = ["Chinedu", "love", "femi", "chiboy", "Malik"]; 
    //     const {name} = this.state;

    //     for (const i of nameArr) {
    //         if (name === i) {
    //             return <p>Hi {name}</p>
    //         }else{
    //             return <p>Name is not available</p>
    //         }
    //     }
    //     for (let i = 0; i < nameArr.length; i++) {
    //         if (name == nameArr[i]) {
    //                 return <p>Hi {name}</p>
    //             }else{
    //                 return <p>Name is not available</p>
    //             }   
    //     }
    // }

    handleChange(e){
        this.setState({name: e.target.value})
    }

    render(){
        return(
            <div>
                {/* {this.changeState()} */}
                {/* <p>Hi {this.state.name}</p> */}
                <label>Name</label> 
                <input type="text"  value={this.state.name} onChange={this.handleChange}/>               
            </div>
        )
    }
}

export default LoginClassComponent;

// renderGreeting() {
//     const { name } = this.state;

//     if (
//       name === "Dacruz" ||
//       name === "Luiz" ||
//       name === "Diogo" ||
//       name === "Salah" ||
//       name === "Arnold" ||
//       name === "Firmino"
//     ) {
//       return <p className="greeting">What's up {name}</p>;
//     } else {
//       return <p className="not-found">Name not found</p>;
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.renderGreeting()}
//         <label>Name</label>
//         <input type="text" value={this.state.name} onChange={this.handleChange} />
//       </div>
//       );
//     }
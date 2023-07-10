import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email:"",
            address: "",
            // streetNos:"",
            streetName:"",
            state:"",
            country:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({firstName: e.target.value})
        this.setState({lastName: e.target.value})
        this.setState({email: e.target.value})
        this.setState({address: e.target.value})
        // this.setState({streetNos: e.target.value})
        this.setState({streetName: e.target.value})
        this.setState({state: e.target.value})
        this.setState({country: e.target.value})
    }

    render(){
        return(
            <div>
                <label>firstname</label> 
                <input type="text"  value={this.state.firstName} onChange={this.handleChange}/>
                <label>lastname</label> 
                <input type="text"  value={this.state.lastName} onChange={this.handleChange}/>
                <label>email</label> 
                <input type="text"  value={this.state.email} onChange={this.handleChange}/>
                <label>address</label> 
                <input type="text"  value={this.state.address} onChange={this.handleChange}/>
                <label>street number</label> 
                <input type="number"  value={this.state.streetNos} onChange={this.handleChange}/>
                <label>street Name</label> 
                <input type="text"  value={this.state.streetName} onChange={this.handleChange}/>
                <label>state</label> 
                <input type="text"  value={this.state.state} onChange={this.handleChange}/>
                <label>country</label> 
                <input type="text"  value={this.state.country} onChange={this.handleChange}/>

                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <p>Address</p>
                <p>{this.state.streetNos}</p>
                <p>{this.state.streetName}</p>
                <p>{this.state.state}</p>
                <p>{this.state.country}</p>
            </div>
        )
    }
}

export default Profile;
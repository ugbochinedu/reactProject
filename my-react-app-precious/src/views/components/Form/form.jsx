import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     profile: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      phoneNumber: "",
      submitted: false 
     }       
       
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    e.preventDefault()
    this.setState({firstName: e.target.value});
    this.setState({lastName: e.target.value});
    this.setState({email: e.target.value});
    this.setState({userName: e.target.value});
    this.setState({password: e.target.value});
    this.setState({phoneNumber: e.target.value});
    // console.log(this.state)
  }

  submitForm =(e) =>{
    e.preventDefault();
    this.setState({submitted: true})
    console.log(this.state)
  };
  renderSubmitted = () => {
    const {firstName, lastName, email, userName, password, phoneNumber} = this.state;

    return(
      <div>
        <p>FirstName:{firstName}</p>
        <p>lastName:{lastName}</p>
        <p>E-mail:{email}</p>
        <p>UserName:{userName}</p>
        <p>password:{password}</p>
        <p>phoneNumber:{phoneNumber}</p>
      </div>
    )
  }

  render() {
    const {profile, submitted} = this.state;
    return(
      <div>
        {submitted ? (
          this.renderSubmitted()
        ) : (
          <form action="" onSubmit={this.submitForm}>
          <div>
            <label htmlFor="">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">E-mail:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">UserName:</label>
            <input
              type="text"
              name="userName"
              // value={userName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Password:</label>
            <input
              type="password"
              name="password"
              // value={password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="">PhoneNumber:</label>
            <input
              type="number"
              name="phoneNumber"
              // value={phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          <input type="button" value="submit" />
        </form>
        )}
      </div>
    );
  }
}

export default Form;

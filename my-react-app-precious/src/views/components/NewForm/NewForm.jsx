import React from "react";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        firstName: "",
        lastName: "",
        email: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      name: {
        ...this.state.name,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  renderSubmittedData = () => {
    const { name } = this.state;

    return (
      <div>
        <h2>Submitted Form Data</h2>
        <p>
          Name: {name.firstName} {name.lastName}
        </p>
        <p>Email: {name.email}</p>
      </div>
    );
  };

  render() {
    const { name, submitted } = this.state;

    return (
      <div>
        {submitted ? (
          this.renderSubmittedData()
        ) : (
          <form onSubmit={this.handleSubmit}>
            <h2>Name</h2>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={name.firstName}
              onChange={this.handleChange}
            />
            <br />
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={name.lastName}
              onChange={this.handleChange}
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={name.email}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default FormComponent;

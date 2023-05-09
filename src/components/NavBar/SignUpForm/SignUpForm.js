import { Component } from "react";
import {signUp} from '../../../utilities/users-service';

/*
1) Create phase - when the component first mounts to the DOM
2) Update phase - when sate changes an the component needs to be re-rendered
3) Destruction phase - when the UI needs to be replaced with a newer version
*/

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  };

  handleChange =  (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await SignUp(formData);
      console.log(user)
    } catch {
      this.setState({error: 'Sign Up Failed - Try Again'});
    }
  }

  render () {
    const disabled = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disabled}>Sign Up</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    )
  }
}
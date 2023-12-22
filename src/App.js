import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
}


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    if (firstName != '' && validateEmail(email) && password.value.length >= 8 && role != 'role') {
      return true;
    }
  };

  const clearForm = () => {
    // Implement this function
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword({ value: '', isTouched: false })
    setRole('role')
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();

  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="first-name">
              First name <sup>*</sup>
            </label>
            <input
              id='first-name'
              type="text"
              placeholder="First name"
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label htmlFor="last-name">Last name</label>
            <input
              id='last-name'
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email address <sup>*</sup>
            </label>
            <input
              id='email'
              type="email"
              placeholder="Email address"
              required
              value={email}
              onChange={e => setEmail(e.target.value)} />

          </div>
          <div className="Field">
            <label htmlFor='password'>
              Password <sup>*</sup>
            </label>
            <input
              id='password'
              type="password"
              placeholder="Password"
              required
              value={password.value}
              //Will this work? This is the Password/ setPassword
              // const [password, setPassword] = useState({
              //   value: "",
              //   isTouched: false,
              // });
              onChange={e => setPassword({ value: e.target.value, isTouched: true })} />
            {password.value.length < 8 && password.isTouched == true ? PasswordErrorMessage() : null}
          </div>
          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select
              id='role'
              required
              value={role}
              onChange={e => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              disabled={!getIsFormValid()}>
              Create account
            </button>
            <button className="clear"
              type="reset"
              onClick={clearForm}>
              Clear Form
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

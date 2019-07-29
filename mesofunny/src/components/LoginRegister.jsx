import React, { useState } from "react";
import '../login.css'

const LoginRegister = (props) => {
  const [input, setInput] = useState({
    form: {
      firstName: "",
      lastName: "",
      email: "",
      password: ''
    }
  });
  const [login, setLogin] = useState(false);

  const toggle = () => {
    setLogin(!login);
  };

  const handleChanges = e => {
    setInput({
      form: {
        ...input.form,
        [e.target.name]: e.target.value
      }
    });
  };

  const loginRegister = () => {
      props.history.push('/jokes')
  }

  if (!login) {
    return (
      <div className="Container">
        <div className="Login">
          <a href="#" style={{ textDecoration: "underline" }}>
            Login
          </a>
          <a href="#" onClick={toggle}>
            Register
          </a>
        </div>
        <h1>Dad Jokes</h1>
        <img src="https://www.sccpre.cat/mypng/detail/39-391459_joy-android-crying-laughing-emoji.png" />
        <form>
          <input
            type="email"
            name="email"
            value={input.form.email}
            placeholder="email"
            onChange={handleChanges}
          />
          <input
            type="text"
            name="password"
            value={input.form.password}
            placeholder="password"
            onChange={handleChanges}
          />
          <button onClick={loginRegister}>Login</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="Container">
        <div className="Login">
          <a href="#" onClick={toggle}>
            Login
          </a>
          <a href="#" style={{ textDecoration: "underline" }}>
            Register
          </a>
        </div>
        <h1>Dad Jokes</h1>
        <img src="https://www.sccpre.cat/mypng/detail/39-391459_joy-android-crying-laughing-emoji.png" />
        <form>
          <input
            type="text"
            name="firstName"
            value={input.form.firstName}
            placeholder="First Name"
            onChange={handleChanges}
          />
          <input
            type="text"
            name="lastName"
            value={input.form.lastName}
            placeholder="Last Name"
            onChange={handleChanges}
          />
          <input
            type="email"
            name="email"
            value={input.form.email}
            placeholder="email"
            onChange={handleChanges}
          />
          <input
            type="password"
            name="password"
            value={input.form.password}
            placeholder="password"
            onChange={handleChanges}
          />
          <button onClick={loginRegister}>Register</button>
        </form>
      </div>
    );
  }
}

export default LoginRegister

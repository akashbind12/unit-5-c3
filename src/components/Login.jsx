
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";

export const Login = () => {
    //  use reqres to log user in.
    const { handleAuth } = useContext(AuthContext);

    const [formData, setFormdata] = useState({
        "username": "",
        "password": "",
    });

    const handlechange = (e) => {
        // console.log(e.target.value)

        setFormdata({
            ...formData,
            [e.target.name]  : e.target.value,
        })
    };

    const handlelogin = (e) => {
        e.preventDefault();
        console.log(formData)

        axios.post('https://reqres.in/api/login', formData)
          .then(function (response) {
              console.log(response);
              handleAuth(true)
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
      <form className="loginform" onSubmit={handlelogin} >
        <input
          onChange={handlechange}
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          onChange={handlechange}
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };
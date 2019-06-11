import React, { useState } from "react";
import joi from "@hapi/joi";

export default function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const API_URL = "http://localhost:7000/api/signup";

  const onFourm = async e => {
    e.preventDefault();
    const val = validate();
    const body = {
      username: name,
      password
    };
    if (val) {
      const req = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "content-type": "application/json"
        }
      });
      const res = await req;

      if (res) {
        console.log(res);
      } else {
        console.log(res);
      }
    }
  };

  const onName = e => {
    const name = e.target.value.trim();
    setName(name);
  };

  const onPassword = e => {
    const password = e.target.value.trim();
    setPassword(password);
  };
  const onCPassword = e => {
    const c = e.target.value.trim();
    setCPassword(c);
  };

  // TODO: use joi
  //proper validation

  //validation

  // const schema = Joi.object().keys({
  //     username: Joi.string()
  //         .trim()
  //         .alphanum()
  //         .empty()
  //         .min(3)
  //         .max(30)
  //         .required(),
  //     password: Joi.string()
  //         .trim()
  //         .empty()
  //         .regex(/^[a-zA-Z0-9]{10,30}$/)
  //         .required()
  // });

  // custom validation

  const validate = () => {
    if (!(name.length >= 3)) {
      setError(" User name must contain at least 3 letters ! 🚫");
      return false;
    }
    if (!(password.length >= 6)) {
      setError(" password length must  at least 6  ! 🚫");
      return false;
    }

    if (password !== cpassword) {
      setError("Password must match ! 🚫");
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <div className="mt-5">
      {error && (
        <div class="alert alert-danger" role="alert">
          <p>{error ? error : null}</p>
        </div>
      )}
      <form onSubmit={onFourm}>
        <div Name="form-group pt-4">
          <label for="exampleInputEmail1">User name</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter User Name"
            onChange={e => {
              onName(e);
            }}
            required
          />
        </div>
        <div className="form-row mt-4">
          <div class="form-group col-md-6">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={e => {
                onPassword(e);
              }}
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              Password length should be at least 10
            </small>
          </div>

          <div class="form-group col-md-6">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="exampleInputPassword1"
              placeholder=" Confirm Password"
              onChange={e => {
                onCPassword(e);
              }}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
      {name}
    </div>
  );
}

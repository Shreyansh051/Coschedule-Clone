import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    password: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, company, website, password } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        website,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Success");
      console.log("Registration Success");

      navigate.push("/Signin");
    }
  };
  return (
    <div>
      <form method="POST">
        <label htmlFor="name">Full Name</label>
        <br />
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={handleInput}
          required
        />
        <br />
        <label htmlFor="email">Enter Email</label>
        <br />
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleInput}
          required
        />
        <br />
        <label htmlFor="password">Enter Password</label>
        <br />
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleInput}
          required
        />
        <br />
        <label htmlFor="company">Company</label>
        <br />
        <input
          type="text"
          value={user.company}
          name="company"
          onChange={handleInput}
          required
        />
        <br />
        <label htmlFor="website">Enter Wwebsite Url</label>
        <br />
        <input
          type="website"
          value={user.website}
          name="website"
          onChange={handleInput}
          required
        />
        <br />

        <input type="submit" value="Get Started " onClick={PostData} />
      </form>
      <NavLink to="/Signin">Already have account</NavLink>
    </div>
  );
};

export default Signup;

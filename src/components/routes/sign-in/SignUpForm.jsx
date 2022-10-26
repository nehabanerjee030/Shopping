import React from "react";
// import {
//   createAuthUserWithEmailAndPassword,
//   createUserUsingAuth,
// } from "../../../utils/firebase/firebase-utils";
const initialValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {


  const [formValues, setFormValues] = React.useState(initialValues);

  const handleChange = (event) => {
    console.log(event.target.value, event.target.name);
    const { name, value } = event.target;
    setFormValues({
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log("submitClicked");
    const { email, password, confirmPassword, displayName } = formValues;
    console.log(formValues);
    if (password.toString() !== confirmPassword.toString()) {
      alert("Password and confirm password does not match , Please re enter");
      return;
    }

    // try {
    //   const response = await createAuthUserWithEmailAndPassword(email, password);
    //   console.log(response);
    //   const { user } = response;
    //   await createUserUsingAuth(user, { displayName });
    //   // setFormValues(initialValues);
    //   alert("Successfully created user" + user.email);
    // } catch (error) {
    //   alert("Unable to create user" + error);
    // }
  };
  return (
    <>
      <h1>Sign Up </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>{"DisplayName : "}</label>
          <input
            name="displayName"
            type="text"
            onChange={handleChange}
            value={formValues.displayName}
            required
          ></input>
        </div>
        <div>
          <label>{"Email : "}</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formValues.email}
            required
          ></input>
        </div>
        <div>
          <label>{"Password : "}</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={formValues.password}
            required
          ></input>
        </div>
        <div>
          <label>{"Confirm Password : "}</label>
          <input
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            value={formValues.confirmPassword}
            required
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;

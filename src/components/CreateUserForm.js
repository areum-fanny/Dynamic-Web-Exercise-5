import React from "react";

function CreateUserForm({ CreateAccountFunction }) {
  return (
    <div>
      <form className="SignUpForm" onSubmit={(e) => CreateAccountFunction(e)}>
        <label htmlFor="createEmail">Email</label>
        <input type="email" name="createEmail" />
        <label htmlFor="createPassword">Password</label>
        <input type="password" name="createPassword" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateUserForm;

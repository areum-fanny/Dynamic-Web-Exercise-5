import React from "react";
import CreateUserForm from "../components/CreateUserForm";

function CreateAccount({ CreateAccountFunction }) {
  return (
    <div className="body">
      <h1>Create Account</h1>
      <CreateUserForm CreateAccountFunction={CreateAccountFunction} />
    </div>
  );
}

export default CreateAccount;

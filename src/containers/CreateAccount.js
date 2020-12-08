import React from "react";
import CreateUserForm from "../components/CreateUserForm";

function CreateAccount({CreateAccountFunction}){
    return (
        <CreateUserForm CreateAccountFunction={CreateAccountFunction} />
    );
}

export default CreateAccount;
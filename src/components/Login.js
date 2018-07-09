import React from "react";
import { Input, Button } from "semantic-ui-react";

const Login = () => {
  return (
    <div>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button> Login </Button>
    </div>
  );
};

export default Login;

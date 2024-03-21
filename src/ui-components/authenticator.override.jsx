import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./authenticator.override.css";

export const CustomAuthenticator = (props) => {
  return (
    <Authenticator {...props}>
      {props.children}
    </Authenticator>
  );
};
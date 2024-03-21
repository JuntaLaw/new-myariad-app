import React from 'react';
import { Authenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './authenticator.override.css';

const CustomSignOutButton = ({ signOut }) => (
  <Button onClick={signOut} className="btn btn-secondary">
    Sign Out
  </Button>
);

export const CustomAuthenticator = (props) => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="authenticated-content">
          <h1>Hello {user.username}</h1>
          <CustomSignOutButton signOut={signOut} />
          {props.children}
        </div>
      )}
    </Authenticator>
  );
};
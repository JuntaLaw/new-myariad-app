import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function AuthenticatedUser({ signOut, user }) {
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(AuthenticatedUser);
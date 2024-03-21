import React from 'react';
import { CustomAuthenticator } from './ui-components/authenticator.override.jsx';

import './App.css';
import '../src/styles/global.css';

export default function App() {
  return (
    <CustomAuthenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </CustomAuthenticator>
  );
}
// import React from 'react';
import { CustomAuthenticator } from './ui-components/authenticator.override.jsx';
import '../src/styles/global.css';
import './App.css'; 


export default function App() {
  return (
    <div className="authenticator-wrapper">
      <CustomAuthenticator>
        <main>
          {/* ログイン後に表示するコンテンツをここに追加  */}
          <h1>Hello World</h1>
        </main>
      </CustomAuthenticator>
    </div>
  );
}
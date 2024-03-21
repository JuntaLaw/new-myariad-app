import React from 'react';
import { CustomAuthenticator } from './ui-components/authenticator.override.jsx';
import '../src/styles/global.css';
import './App.css';


export default function App() {
  return (
    <CustomAuthenticator>
      <main>
        
        {/* ログイン後に表示するコンテンツをここに追加 */} 
        <h1>Hello World</h1>
        <button className="btn">Button</button>
      
      </main>
    </CustomAuthenticator>
  );
}
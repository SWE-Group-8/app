import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import awsExports from './aws-exports';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';

//import Amplify from "aws-amplify";
import awsExports from "./aws-exports"
Amplify.configure(awsExports);


Amplify.configure(awsExports);
Auth.configure(awsExports);




ReactDOM.render(
  <React.StrictMode>
    <Authenticator.Provider>
      <App />
    </Authenticator.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

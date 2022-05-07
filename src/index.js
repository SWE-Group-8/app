import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import awsExports from './aws-exports';
import { Amplify, Auth } from 'aws-amplify';
import { AmplifyProvider, Authenticator, Theme } from '@aws-amplify/ui-react';
import { defaultTheme } from '@aws-amplify/ui-react';
Amplify.configure(awsExports);
Auth.configure(awsExports);

const theme = {
  name: 'my-theme',
  colorMode: 'dark',
  tokens: {
    
    colors: {
      background: {
        primary: {
          value: "#FFFFFF",
        },
        secondary: {
          value: "#FFFFFF",
        },
      },
      font: {
        interactive: {
          value: "#6B705C",
        },
      },
    },
  },
};


ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider theme={theme}>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </AmplifyProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

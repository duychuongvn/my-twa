import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MetaMaskUIProvider sdkOptions={{
      dappMetadata: {
        name: "Example React UI Dapp",
        url: window.location.host,
      }
      // Other options
    }}>
      <App />
    </MetaMaskUIProvider>
  </React.StrictMode>
);
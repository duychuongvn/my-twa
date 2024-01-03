import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MetaMaskButton } from "@metamask/sdk-react-ui";
import detectEthereumProvider from '@metamask/detect-provider';
const provider = await detectEthereumProvider();

async function getAccount() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
  const account = accounts[0];
  document.querySelector('.showAccount').innerHTML = account;
}
function startApp(provider: any) {
  // If the provider returned by detectEthereumProvider isn't the same as
  // window.ethereum, something is overwriting it – perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  } else {
 
  }
  // Access the decentralized web!
}
function App() {
  const [count, setCount] = useState(0)
  if (provider) {
    // From now on, this should always be true:
    // provider === window.ethereum
    startApp(provider); // initialize your app
  } else {
    console.log('Please install MetaMask!');
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
      <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
      </p>
      <p>
      <button onClick={()=> getAccount()} class="enableEthereumButton">Enable Ethereum</button>
<h2>Account: <span class="showAccount"></span></h2>
      </p>
    </>
  )
}

export default App

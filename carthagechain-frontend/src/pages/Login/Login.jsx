import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { assets } from '../../assets/assets';

const Login = () => {
  const [account, setAccount] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  // Check for existing connection in localStorage on component mount
  useEffect(() => {
    const storedAccount = localStorage.getItem('connectedAccount');
    if (storedAccount) {
      setAccount(storedAccount);
    }
  }, []);

  // Function to connect with MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        setIsConnecting(true);
        
        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
        // Get the first account
        const userAccount = accounts[0];
        setAccount(userAccount);
        
        // Store in localStorage for persistence
        localStorage.setItem('connectedAccount', userAccount);
        
        // Add listener for account changes
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        
        setIsConnecting(false);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        setIsConnecting(false);
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to continue.");
    }
  };

  // Handle account changes
  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      // User disconnected their wallet from the site
      disconnectWallet();
    } else {
      // User switched accounts
      setAccount(accounts[0]);
      localStorage.setItem('connectedAccount', accounts[0]);
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setAccount('');
    localStorage.removeItem('connectedAccount');
    
    // Remove the listener
    if (window.ethereum) {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
    }
  };

  // Function to format the address for display
  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={assets.logo} alt="CarthageChain Logo" className="login-logo" />
          <h1>CarthageChain Login</h1>
        </div>
        
        <div className="login-content">
          {!account ? (
            <>
              <p>Connect with MetaMask to continue as a voter or candidate</p>
              <button 
                className="metamask-button" 
                onClick={connectWallet}
                disabled={isConnecting}
              >
                {isConnecting ? 'Connecting...' : 'Connect with MetaMask'}
                <img src="https://raw.githubusercontent.com/MetaMask/metamask-extension/master/app/images/logo/metamask-fox.svg" 
                     alt="MetaMask" 
                     className="metamask-icon" />
              </button>
            </>
          ) : (
            <>
              <div className="connected-status">
                <div className="status-indicator"></div>
                <p>Connected with MetaMask</p>
              </div>
              
              <div className="account-info">
                <p>Wallet Address:</p>
                <div className="address-box">
                  {formatAddress(account)}
                </div>
                <p className="full-address">{account}</p>
              </div>
              
              <div className="login-actions">
                <button className="proceed-button" onClick={() => navigate('/')}>
                  Proceed to Dashboard
                </button>
                <button className="disconnect-button" onClick={disconnectWallet}>
                  Disconnect Wallet
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
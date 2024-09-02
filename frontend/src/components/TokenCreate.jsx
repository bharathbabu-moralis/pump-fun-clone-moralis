import React, { useState } from 'react';
import '../App.css'; // Import the same CSS file for consistent styling
import { useNavigate } from 'react-router-dom';
import { abi } from './abi'; // Import ABI for contract interaction
import { ethers } from 'ethers';

const TokenCreate = () => {
  const [name, setName] = useState('');
  const [ticker, setTicker] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    // Add logic to handle token creation here
    const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log(signer)
      const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS, abi, signer);

      const transaction = await contract.createMemeToken(name, ticker, imageUrl, description,{
        value: ethers.parseUnits("0.0001", 'ether'),
      }); // Replace with actual function
      const receipt = await transaction.wait();

      alert(`Transaction successful! Hash: ${receipt.hash}`);
    // Redirect or notify the user after creation
    console.log('Creating token:', { name, ticker, description, imageUrl });
    navigate('/'); // Redirect to home or any other page
  };

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#" className="nav-link">[moralis]</a>
        <a href="#" className="nav-link">[docs]</a>
        <button className="nav-button">[connect wallet]</button>
      </nav>
      <div className="token-create-container">
      <h3 className="start-new-coin" onClick={() => navigate('/')}>[go back]</h3>
        <p className="info-text">MemeCoin creation fee: 0.0001 ETH</p>
        <p className="info-text">Max supply: 1 million tokens. Initial mint: 200k tokens.</p>
        <p className="info-text">If funding target of 24 ETH is met, a liquidity pool will be created on Uniswap.</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Token Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Ticker Symbol"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className="input-field"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="input-field"
          />
          <button className="create-button" onClick={handleCreate}>Create MemeToken</button>
        </div>
      </div>
    </div>
  );
};

export default TokenCreate;

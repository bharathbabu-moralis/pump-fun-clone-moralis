import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './Home'
import TokenDetail from './TokenDetail.jsx'
import TokenCreate from './TokenCreate.jsx'

const Main = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/token-detail/:tokenAddress" element={<TokenDetail />} />
            <Route path="/token-create" element={<TokenCreate />} />
        </Routes>
    </BrowserRouter>
</>
  )
}

export default Main
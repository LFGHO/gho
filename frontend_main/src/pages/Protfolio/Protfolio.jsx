import React from 'react'
import Heading from '../../components/Heading'
import ProtfolioCard from './ProtfolioCard'
import Navbar from '../../components/Navbar/Navbar'

function Protfolio() {
  return (
    <>
    <Navbar />
    <Heading text="Your Portfolio"/>
    <ProtfolioCard  />
    </>
  )
}

export default Protfolio
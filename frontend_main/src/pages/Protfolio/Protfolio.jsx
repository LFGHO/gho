import React from 'react'
import Heading from '../../components/Heading'
import ProtfolioCard from './ProtfolioCardIntra'
import ProtfolioCardIntra from './ProtfolioCardIntra'
import ProtfolioCardLong from './ProtfolioCardLong'

function Protfolio() {
  return (
    <>
    <p className='text-center text-4xl font-bold mt-8'>Your Protfolio</p>
    <Heading text="Intraday Vault"/>
    <ProtfolioCardIntra  />
    <Heading text="Long Term Vault"/>
    <ProtfolioCardLong  />
    </>
  )
}

export default Protfolio
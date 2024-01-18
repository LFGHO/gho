import React from 'react'
import TextWithHint from '../../components/TextWithHint'

function ProtfolioCard() {
  return (
    <div className='bg-[#231f36] mx-5 md:mx-8 rounded-3xl h-96'>
      <TextWithHint text="Net Value" hint = "Net Value in the assets"/>
    </div>
  )
}

export default ProtfolioCard
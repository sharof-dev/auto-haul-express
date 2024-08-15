import React from 'react'
import WhatOur from '../../components/car-shipping-cost/WhatOur'
const openTransport = true
const OpenAuotTransport = () => {
  return (
    <div>
      <WhatOur openTransport={openTransport} />
    </div>
  )
}

export default OpenAuotTransport

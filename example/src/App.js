import React from 'react'
import { Button } from 'lobus-button-ui'

const App = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column'}}>
      <Button text={'Primary'} type={'primary'} />
      <br />
      <br />
      <Button text={'Default'} type={'default'} />
      <br />
      <br />
      <Button text={'Dashed'} type={'dashed'} />
      <br />
      <br />
      <Button text={'Text'} type={'text'} />
      <br />
      <br />
      <Button text={'Link'} type={'link'} />
    </div>
  )
}

export default App

# lobus-button-ui

> lobus button ui

[![NPM](https://img.shields.io/npm/v/lobus-button-ui.svg)](https://www.npmjs.com/package/lobus-button-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lobus-button-ui
```

## Usage

```jsx
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
```

## License

MIT © [dogukan-karasansar](https://github.com/dogukan-karasansar)

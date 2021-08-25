import React, { useEffect, useState } from 'react'

export const Button = ({ text, type, props }) => {
  const [css, setCss] = useState({
    width: '175px',
    height: '35px',
    borderRadius: '5px',
    fontSize: '15px',
    cursor: 'pointer'
  })

  useEffect(() => {
    if (type === 'primary') {
      setCss({
        ...css,
        borderColor: '#1ecbe1',
        backgroundColor: '#1ecbe1',
        color: 'white'
      })
    } else if (type === 'default') {
      setCss({
        ...css,
        backgroundColor: 'transparent',
        borderWidth: '0.5px',
        borderColor: 'lightgray'
      })
    } else if (type === 'dashed') {
      setCss({
        ...css,
        borderStyle: 'dashed',
        backgroundColor: 'transparent',
        borderWidth: '0.5px',
        borderColor: '#1ecbe1',
        color: '#1ecbe1'
      })
    } else if (type === 'text') {
      setCss({
        ...css,
        borderWidth: '0px',
        backgroundColor: 'transparent',

      })
    } else if ('link') {
      setCss({
        ...css,
        borderWidth: '0px',
        backgroundColor: 'transparent',
        color: '#1ecbe1'
      })
    } else {
      return console.log('Hatalı button tipi girişi')
    }
  }, [type])

  return (
    <button style={css} {...props}>
      {text}
    </button>
  )
}

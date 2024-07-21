import React from 'react'

interface ITextProps {
    text: string
}

const Text: React.FC<ITextProps>  = ({text}) => {
  return (
    <p>
        {text}
    </p>
  )
}

export default Text
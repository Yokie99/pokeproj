import React from 'react'
interface EvoImageComponentProps{
    url:string,
    name:string | string []
}



const EvoImageComponent = (props:EvoImageComponentProps) => {
  return (
    <div >
        <button>
        <img className='evoImg mx-auto' src={props.url} alt="" />
        <p className='text-center'> {props.name}</p>
        </button>
    </div>
  )
}

export default EvoImageComponent
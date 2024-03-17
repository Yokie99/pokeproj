import React from 'react'

interface RightColumnComponentProps{
  moves: string[]
  abilities: string[]
  types: string[]
  location: string
  desc: string
}

const RightColumnComponent = (props:RightColumnComponentProps) => {
  return (
    <div>
        <div className="flex w-full textShadow">
          <p className="w-[25%] text-2xl lg:text-3xl ">Type:</p>
          <p id="monType" className="w-[75%] text-2xl lg:text-3xl "> {props.types.join(", ")}</p>
        </div>
        <div className="flex w-full textShadow my-10 ">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Description: </p>
          <p id="monDesc" className="w-[75%] text-2xl lg:text-3xl">{props.desc}</p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Location:</p>
          <p id="monLocation" className="w-[75%] text-2xl lg:text-3xl ">
            {props.location}
          </p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Abilities:</p>
          <p id="monAbilities" className="w-[75%] text-2xl lg:text-3xl ">
            {props.abilities.join(", ")}
          </p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Moves:</p>
          <p id="monMoves" className="w-[75%] text-2xl lg:text-3xl overflow-y-scroll max-h-80">
            {props.moves.join(", ")}
          </p>
        </div>
      </div>
 
  
  )
}

export default RightColumnComponent
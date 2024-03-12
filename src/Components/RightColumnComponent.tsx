import React from 'react'

const RightColumnComponent = () => {
  return (
    <div>
        <div className="flex w-full textShadow">
          <p className="w-[25%] text-2xl lg:text-3xl ">Type:</p>
          <p id="monType" className="w-[75%] text-2xl lg:text-3xl "> Place Holder</p>
        </div>
        <div className="flex w-full textShadow my-10 ">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Description: </p>
          <p id="monDesc" className="w-[75%] text-2xl lg:text-3xl"></p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Location:</p>
          <p id="monLocation" className="w-[75%] text-2xl lg:text-3xl "></p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Abilities:</p>
          <p id="monAbilities" className="w-[75%] text-2xl lg:text-3xl "></p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Moves:</p>
          <p id="monMoves" className="w-[75%] text-2xl lg:text-3xl overflow-y-scroll max-h-80"></p>
        </div>
      </div>
 
  
  )
}

export default RightColumnComponent
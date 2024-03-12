import React from 'react'

const LeftColumnComponent = () => {
  return (
    <div>
         <div>
        <div className="flex justify-center items-center">
          <p id="monName" className="text-white text-4xl lg:text-5xl textShadow"></p>
          <button id="shinyBtn" type="button" className="text-white bg-gradient-to-r from-yellow-200 via-orange-400 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 rounded-lg  px-4 lg:px-16 py-2.5 mx-3 text-sm lg:text-lg">Shiny</button>
          <img id="favStar" className="" src="/assets/Star_Vector.png" alt="outline of a star" />
        </div>

        <div className="flex justify-center items-center">
          <img className="" id="monImg" src="" alt="" />
        </div>

        <p className="text-white text-4xl lg:text-5xl textShadow text-center">Evolutions</p>

        <div id="evoDiv" className="overflow-y-scroll max-h-96">
          {/* Evolution items go here */}
        </div>
      </div>


    </div>
  )
}

export default LeftColumnComponent
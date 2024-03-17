import React from 'react'
import star from '../assets/Star_Vector.png'
import EvoImageComponent from './EvoImageComponent'


interface LeftColumnComponentProps {
  name: string
  id: number
  image: string
  evos: string[][]
  evoNames: (string | string[])[]
  shiny: () => void
}



const LeftColumnComponent = (props: LeftColumnComponentProps) => {
let counter1 = -1;
let counter2 = 0;
  return (
    <div>
      <div>
        <div className="flex justify-center items-center">
          <p id="monName" className="text-white text-4xl lg:text-5xl textShadow">#{props.id} {props.name}</p>
          <button id="shinyBtn" type="button" className="text-white bg-gradient-to-r from-yellow-200 via-orange-400 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 rounded-lg  px-4 lg:px-16 py-2.5 mx-3 text-sm lg:text-lg" onClick={props.shiny}>Shiny</button>
          <img id="favStar" className="" src={star} alt="outline of a star" />
        </div>

        <div className="flex justify-center items-center">
          <img className="" id="monImg" src={props.image} alt="" />
        </div>

        <p className="text-white text-4xl lg:text-5xl textShadow text-center">Evolutions</p>

        <div id="evoDiv" className="overflow-y-scroll max-h-96">



          {/* {props.evos.map(e => {
            const divs = []; 
            for (let i = 0; i < e.length; i++) {
              // for (let j = 0; j < e[i][j].length; j++){
                
              // }
              divs.push(
              <div className='flex justify-center items-center gap-[3vw] mt-6'>
              <EvoImageComponent url={e[i]} name={props.evoNames[0][i]}/>
              </div>
              )
            }
            return(divs)
          })} */}

{
    props.evos.map(e => { // e is a string[]
     
      
        return (
            <div className="flex flex-row justify-center items-center gap-[3vw] mt-6">
                {
                    e.map(url => {
                      
                        return (
                            <div className='flex justify-center items-center gap-[3vw] mt-6'>
                                <EvoImageComponent url={url} name={""} />
                            </div>
                        )
                    })
                }
                
            </div>
        )

    })
}


                </div>
              </div>


    </div>
        )
}

        export default LeftColumnComponent
import React,{useState} from "react";


function CarouselSlide(props){
    const slide1translate=((window.innerWidth))
    console.log("Current Index",props.currentslideindex)
    console.log("Index",props.index)
    const jsxelement=(
        
        <>
        <div ley={props.index} className={'w-screen h-full bg-center bg-cover relative group transition-all duration-200 delay-150 '+((props.currentslideindex>=0)? `-translate-x-[${slide1translate*props.currentslideindex}px]`:"")} style={{backgroundImage:`url(${props.url})`}}>
            <div className='absolute bg-gradient-to-t from-black w-full h-full'></div>
                <div className='h-full w-full flex flex-col-reverse'>
                    <div className='z-40 p-12'>
                      <div className='flex flex-row grow h-full max-[500px]:flex-col'>
                        <div className='flex flex-col text-white w-[75%] max-[500px]:w-full lg:p-10 md:p-10  '>

                          <h2 className='text-white font-bold text-xl py-2 w-full'>{props.heading}</h2>
                          {((props.Content.length>0))&&<p className='max-[500px]:h-[150px] overflow-auto max-[500px]:bg-gradient-to-t max-[500px]: from-black w-full text-ellipsis'>{props.Content}</p>}

                        </div>
                        <div className='h-full  w-[25%] justify-center flex max-[500px]:w-full'>{
                          (props.ButtonName.length>0)? <button className='  w-[200px] h-[50px] text-white place-self-center hover:bg-white hover:text-black max-[500px]:w-full bg-[#b21919]'> {props.ButtonName}</button>: 0
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    return jsxelement
}

export default CarouselSlide;
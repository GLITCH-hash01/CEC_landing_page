import React,{useState} from 'react';

function Accordian(){
    
    const [isActive,setCurrentState]=useState(false);
    return(
        <>
        <div className='flex flex-col h-fit items-center w-[900px] max-[1020px]:w-full'>
            <div className='flex flex-row px-2 bg-[#5472d2]  h-[50px] text-white cursor-pointer  w-full' onClick={()=> setCurrentState(!isActive)}>
                <p className='self-center grow max-[600px]:w-[80%] max-[600px]:grow-0'>What are the organisations available in the college?</p>
                <div className='hidden max-[600px]:grow max-[600px]:flex '></div>
                <p className={'self-center text-3xl duration-300  '+(isActive? 'rotate-45':'')}  >+</p>
            </div>
            
            {isActive && 
            <div className='h-fit p-2 bg-[#647fd6] duration-1000 transition-transform ease-in-out w-full text-white'>
                <p>The college has many organizations like IEEE,NSS,NCC Naval Unit etc</p>
            </div> 
            }
            
        </div>
        </>
    );
}

export default Accordian
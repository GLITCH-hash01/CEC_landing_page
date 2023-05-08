import React,{useState} from 'react';

function Accordian(){
    
    const [isActive,setCurrentState]=useState(false);
    return(
        <>
        <div className='flex flex-col h-fit items-center'>
            <div className='flex flex-row px-2 bg-[#5472d2] w-[900px] h-[50px] text-white cursor-pointer max-[600px]:w-full' onClick={()=> setCurrentState(!isActive)}>
                <p className='self-center grow max-[600px]:w-[80%] max-[600px]:grow-0'>What are the organisations available in the college?</p>
                <div className='hidden max-[600px]:grow max-[600px]:flex '></div>
                <p className={'self-center text-3xl duration-300  '+(isActive? 'rotate-45':'')}  >+</p>
            </div>
            
            {isActive && 
            <div className='h-fit w-[900px] p-2 bg-[#647fd6] duration-1000 transition-transform ease-in-out max-[600px]:w-full'>
                <p>The college has many organizations like IEEE,NSS,NCC Naval Unit etc</p>
            </div> 
            }
            
        </div>
        </>
    );
}

export default Accordian
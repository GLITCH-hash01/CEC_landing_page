import React,{useState} from 'react';

function Accordian(){
    
    const [isActive,setCurrentState]=useState(false);
    return(
        <>
        <div className='flex flex-col h-fit'>
            <div className='flex flex-row px-2 bg-slate-500 w-full h-[50px] text-white cursor-pointer' onClick={()=> setCurrentState(!isActive)}>
                <p className='self-center grow'>What are the organisations available in the college?</p>
                <p className={'self-center text-3xl duration-300  '+(isActive? 'rotate-45':'')}  >+</p>
            </div>
            {isActive && 
            <div className='h-fit w-full p-2 bg-slate-400 duration-300 transition-transform ease-in-ou'>
                <p>The college has many organizations like IEEE,NSS,NCC Naval Unit etc</p>
            </div> 
            }
            
        </div>
        </>
    );
}

export default Accordian
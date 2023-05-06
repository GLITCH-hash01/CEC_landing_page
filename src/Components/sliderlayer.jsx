import React,{useState} from "react";

function SliderContent(){
    const ContentLst=[
        {
            Heading:"COLLEGE OF ENGINEERING CHENGANNUR",

        },
    ];
    const jsxslidecontent=(
        <>
        <div className='h-full w-full flex flex-col-reverse'>
            <div className='z-50 p-12'>
              <div className='flex flex-row grow h-full max-[500px]:flex-col'>
                <div className='flex flex-col text-white w-[75%] max-[500px]:w-full'>

                  <h2 className='text-white font-bold text-xl py-2 w-full'>COLLEGE OF ENGINEERING CHENGANNUR</h2>
                  <p className='max-[500px]:h-[150px] overflow-auto max-[500px]:bg-gradient-to-t max-[500px]: from-black w-full'>The College of Engineering Chengannur (CEC), was established by the Government of Kerala under the aegis of the IHRD, in the year 1993. It has been approved by All India Council for Technical Education (AICTE) and affiliated to APJ Abdul Kalam Technological University (KTU). Ever since its inception, the college has maintained its eminence as a leading engineering college in Kerala. Being located in Chengannur town, Alleppey district the college has got access to all means of transport, communication and lodging facilities.</p>

                </div>
                <div className='h-full  w-[25%] justify-center flex max-[500px]:w-full'>
                  <button className='border-2 border-white w-[200px] h-[50px] text-white place-self-center hover:bg-white hover:text-black max-[500px]:w-full'> Contact Us</button>

                </div>
              </div>
            </div>
            
            
        </div>
        </>
    );
}

export default SliderContent;
import React,{useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,BsSquare,BsSquareFill,BsInstagram, BsLinkedin } from 'react-icons/bs';
import {BiMap} from 'react-icons/bi'
import {SliderContent} from './Components/sliderlayer.jsx'







function App(){
  const slideimg=[
    {
      url:"/src/assets/slide-img-1.jpeg"
    },
    {
      url:"/src/assets/slide-img-2.png"
    },
    {
      url:"/src/assets/slide-img-3.jpg"
    }  
    
  ]
  
  const [currentIndex,setCurrentIndex]=useState(0);
  
 
  const prevSlide=() =>{
    const isFirstSlide=(currentIndex==0);
    const newIndex=isFirstSlide? slideimg.length-1:currentIndex-1;
    setCurrentIndex(newIndex)
  }
  
  const nextSlide=() =>{
    const isLastSlide=(currentIndex==slideimg.length-1);
    const newIndex=isLastSlide? 0:currentIndex+1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  
  
  const jsxelement=(
    <>
      <div className='w-screen h-screen '>
        <div className='w-screen h-[15%] flex flex-row shadow-lg max-[500px]:h-[10%]'>
            <div className='flex flex-col p-2 '>
              <h1 className=' text-xl'>College of Engineering</h1>
              <h1 className=' text-xl'>Chengannur</h1>
              <p className='font-light text-sm'>Managed by IHRD</p>
            </div>
            <div className='grow '></div>
            <img src="/src/assets/cec_logo_300.png" alt="logo" className='mr-[10px]' />
        </div>
        <div className='w-screen h-[75%] bg-bottom bg-cover relative group transition-all duration-200 max-[500px]:h-[83%]' style={{backgroundImage:`url(${slideimg[currentIndex].url})`}}>
          <div className='absolute bg-gradient-to-t from-black w-full h-full'></div>
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
          <div className='absolute w-fit h-fit text-white bottom-[50%] left-0 hidden group-hover:block cursor-pointer max-[500px]:block '>
            <BsChevronCompactLeft onClick={prevSlide} size={80} />
          </div>
          <div className='absolute w-fit h-fit text-white bottom-[50%] right-0 hidden group-hover:block cursor-pointer max-[500px]:block '>
            <BsChevronCompactRight onClick={nextSlide} size={80}/>
          </div>
          <div className='transition-all ease-in absolute -300 w-screen h-fit bottom-0 justify-center py-3 gap-4 cursor-pointer hidden group-hover:flex z-50 max-[500px]:flex'>
            {
              slideimg.map((slideimg,slideindex)=>(
                <div key={slideindex}>
                  {!(slideindex==currentIndex)? <BsSquare color='white' onClick={()=>goToSlide(slideindex)} />:<BsSquareFill  color='white'/>}
                  
                </div>
              ))
            }
          </div>
        </div>
        <nav className='bg-slate-700 w-screen h-[10%] flex items-center max-[500px]:h-[7%]'>
        <div className='w-screen items-center px-5 flex flex-row gap-5
         text-white'>

          <div className='flex flex-row gap-3 cursor-pointer hover:bg-gray-600 p-3 rounded-xl'>
            <BsInstagram color='white' size={30}/>
            <a className='max-[500px]:hidden'>Instagram</a>
          </div>
          <div className='flex flex-row gap-3 cursor-pointer hover:bg-gray-600 p-3 rounded-xl'>
            <BsLinkedin size={30}/>
            <a className='max-[500px]:hidden'>LinkedIn</a>
          </div>
          <div className='grow'></div>
          <div className='flex flex-row gap-3 cursor-pointer hover:bg-gray-600 p-3 rounded-xl'>
            <BiMap size={35}/>
            <a className='max-[500px]:hidden'>Google Maps</a>
          </div>
        </div>
        </nav>
        </div>
        <div className='w-screen h-screen bg-white flex flex-row gap-2'></div>
    </>
  
  )
  return (jsxelement);
}


export default App;
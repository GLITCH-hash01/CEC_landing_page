import React,{useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,BsSquare,BsSquareFill,BsInstagram, BsLinkedin } from 'react-icons/bs';
import {BiMap} from 'react-icons/bi'
import Card from './Components/Card.jsx'
import Accordian from './Components/Accordian.jsx';








function App(){
  const slideimg=[
    {
      url:"/src/assets/slide-img-1.jpeg",
      heading:"COLLEGE OF ENGINEERING CHENGANNUR",
      Content:"The College of Engineering Chengannur (CEC), was established by the Government of Kerala under the aegis of the IHRD, in the year 1993. It has been approved by All India Council for Technical Education (AICTE) and affiliated to APJ Abdul Kalam Technological University (KTU). Ever since its inception, the college has maintained its eminence as a leading engineering college in Kerala. Being located in Chengannur town, Alleppey district the college has got access to all means of transport, communication and lodging facilities.",
      ButtonName:"Contact Us"
    },
    {
      url:"/src/assets/slide-img-2.png",
      heading:"PLACEMENTS",
      Content:"",
      ButtonName:"",
    },
    {
      url:"/src/assets/slide-img-3.jpg",
      heading:"CODE CHN",
      Content:"",
      ButtonName:"",
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
          <img src="/src/assets/cec_logo_300.png" alt="logo" className='mr-[10px]' />
          <div className='flex flex-col p-2 font-bold text-2xl'>
            <h1 className=' text-2xl'>College of Engineering</h1>
            <h1 className=' text-2xl'>Chengannur</h1>
            <p className='font-light text-sm'>Managed by IHRD</p>
          </div>
          <div className='grow '></div>
        </div>
        <div className='w-screen h-[75%] bg-bottom bg-cover relative group transition-all duration-200 max-[500px]:h-[83%]' style={{backgroundImage:`url(${slideimg[currentIndex].url})`}}>
          <div className='absolute bg-gradient-to-t from-black w-full h-full'></div>
          <div className='h-full w-full flex flex-col-reverse'>
            <div className='z-50 p-12'>
              <div className='flex flex-row grow h-full max-[500px]:flex-col'>
                <div className='flex flex-col text-white w-[75%] max-[500px]:w-full'>

                  <h2 className='text-white font-bold text-xl py-2 w-full'>{slideimg[currentIndex].heading}</h2>
                  <p className='max-[500px]:h-[150px] overflow-auto max-[500px]:bg-gradient-to-t max-[500px]: from-black w-full'>{slideimg[currentIndex].Content}</p>

                </div>
                <div className='h-full  w-[25%] justify-center flex max-[500px]:w-full'>{
                  (slideimg[currentIndex].ButtonName.length>0)? <button className='border-2 border-white w-[200px] h-[50px] text-white place-self-center hover:bg-white hover:text-black max-[500px]:w-full'> {slideimg[currentIndex].ButtonName}</button>: 0
                }
                  

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
        <nav className='bg-[#b21919] w-screen h-[10%] flex items-center max-[500px]:h-[7%]'>
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
      <div className='w-screen h-fit bg-[#dadfe3] text-black'>
        <div className='w-screen h-fit flex justify-center place-items-center '>
          <div className='w-[95%] h-[95%] bg-white px-4 my-4'>
            <h1 className='text-xl p-3'>Departments</h1>
            <hr className='bg-slate-500 px-5'/>
            <div className='h-fit gap-2 py-2 w-full mx-1 flex flex-wrap'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            <h1 className='text-xl p-3'>Placements</h1>
            <hr className='bg-slate-500 px-5'/>
            <div className='h-fit gap-2 py-2 w-full mx-1 flex flex-wrap'>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            <h1 className='text-xl p-3'>FAQ's</h1>
            <hr className='bg-slate-500 px-5'/>
            <div className=' justify-center py-2 flex flex-col gap-2'>
              <Accordian/>
              <Accordian/>
              <Accordian/>
              <Accordian/>
            </div>
          </div>
        </div>
      </div>
    </>
  
  )
  return (jsxelement);
}


export default App;
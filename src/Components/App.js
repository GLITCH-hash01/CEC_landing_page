import React,{useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,BsSquare,BsSquareFill } from 'react-icons/bs';





function App(){
  const jsxelement=(
    <>
      <div className='w-screen h-screen '>
        <div className='w-screen h-[15%] flex flex-row shadow-lg'>
            <div className='flex flex-col p-2'>
              <p className='text-xl'>College of Engineering</p>
              <p className='text-xl'>Chengannur</p>
              <p className='font-light text-sm'>Managed by IHRD</p>
            </div>
            <div className='grow '></div>
            <img src="/src/assets/cec_logo_300.png" alt="logo" className='mr-[10px]' />
        </div>
        <div className='w-screen h-[75%] bg-bottom bg-cover relative group' style={{backgroundImage:`url(${slideimg[currentIndex].url})`}}>
          <div className='absolute bg-gradient-to-t from-black w-full h-full'></div>
          <div className='absolute w-fit h-fit text-white bottom-[50%] left-0 hidden group-hover:block cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={80}/>
          </div>
          <div className='absolute w-fit h-fit text-white bottom-[50%] right-0 hidden group-hover:block cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={80}/>
          </div>
          <div className='absolute -300 w-screen h-fit bottom-0 flex justify-center py-3 gap-4'>
            {
              slideimg.map((slideimg,slideindex)=>(
                <div key={slideindex}>
                  {!(slideindex==currentIndex)? <BsSquare color='white'/>:<BsSquareFill color='white'/>}
                  
                </div>
              ))
            }
          </div>
        </div>
        <div className='bg-slate-700 w-screen h-[10%]'></div>
        </div>
        <div className='w-screen h-screen bg-slate-700'></div>
    </>
  
  );
  
  const slideimg=[
      {
        url:"/src/assets/slide-img-1.jpeg"
      },
      {
        url:"/src/assets/slide-img-2.jpeg"
      },
      {
        url:"/src/assets/slide-img-3.jpeg"
      }  
      
    ];
  const [currentIndex,setCurrentIndex]=useState(0);
  
  const prevSlide=() =>{
    const isFirstSlide=(currentIndex==0);
    const newIndex=isFirstSlide? slideimg.length-1:currentIndex-1;
    setCurrentIndex(newIndex)
  };
      
  const nextSlide=() =>{
    const isLastSlide=(currentIndex==slideimg.length-1);
    const newIndex=isLastSlide? 0:currentIndex+1;
    setCurrentIndex(newIndex)
  };
  return(jsxelement);
  }            
export default App;
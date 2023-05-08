import React,{useDebugValue, useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,BsSquare,BsSquareFill,BsInstagram, BsLinkedin } from 'react-icons/bs';
import {BiMap} from 'react-icons/bi'
import Card from './Components/Card.jsx'
import Accordian from './Components/Accordian.jsx';
import {AiFillMail, AiFillPhone} from 'react-icons/ai';
import {useMediaQuery} from 'react-responsive';








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

  const companyicons=[
    {
      url:"./src/assets/Icons/TATA.jpg"
    },
    {
      url:"./src/assets/Icons/TCS.png"
    },
    {
      url:"./src/assets/Icons/Cognizant.webp"
    },
    {
      url:"./src/assets/Icons/UST.png"
    },
    {
      url:"./src/assets/Icons/Wipro.jpg"
    }
  ];
  
  const [currentIndex,setCurrentIndex]=useState(0);
  const isMobile=useMediaQuery({query:'(max-width:600px)'})
 
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
  
  console.log(isMobile)
  const jsxelement=(
    <>
      <div className='w-screen h-screen '>
        <div className='w-screen h-[15%] flex flex-row shadow-lg max-[500px]:h-[13%]'>
          <img src={isMobile? "/src/assets/cec_logo_100.png":"/src/assets/cec_logo_300.png"} alt="logo" className='mr-[10px] max-[600px]:w-[100px] max-[600px]:h-[100px]' />
          <div className='flex flex-col p2 font-bold text-2xl max-[600px]:p-0'>
            <h1 className=' text-2xl max-[600px]:text-lg'>College of Engineering</h1>
            <h1 className=' text-2xl max-[600px]:text-lg'>Chengannur</h1>
            <p className='font-light text-sm max-[600px]:text-xs'>Managed by IHRD</p>

          </div>
          <div className='grow '></div>
          <nav className='flex flex-row self-center p-4'>
            <div className='flex flex-row gap-3 cursor-pointer hover:bg-gray-300 p-3 rounded-xl'>
              <BsInstagram  size={30}/>
              <a className='max-[500px]:hidden'>Instagram</a>
            </div>
            <div className='flex flex-row gap-3 cursor-pointer hover:bg-gray-300 p-3 rounded-xl'>
              <BsLinkedin size={30}/>
              <a className='max-[500px]:hidden'>LinkedIn</a>
            </div>
          </nav>
        </div>
        <div className='w-screen h-[85%] bg-bottom bg-cover relative group transition-all duration-200 max-[500px]:h-[87%]' style={{backgroundImage:`url(${slideimg[currentIndex].url})`}}>
          <div className='absolute bg-gradient-to-t from-black w-full h-full'></div>
          <div className='h-full w-full flex flex-col-reverse'>
            <div className='z-50 p-12'>
              <div className='flex flex-row grow h-full max-[500px]:flex-col'>
                <div className='flex flex-col text-white w-[75%] max-[500px]:w-full'>

                  <h2 className='text-white font-bold text-xl py-2 w-full'>{slideimg[currentIndex].heading}</h2>
                  {(slideimg[currentIndex].Content.length>0)&&<p className='max-[500px]:h-[150px] overflow-auto max-[500px]:bg-gradient-to-t max-[500px]: from-black w-full'>{slideimg[currentIndex].Content}</p>}

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
          <div className='transition-all ease-in absolute  w-screen h-fit bottom-0 justify-center py-3 gap-4 cursor-pointer hidden group-hover:flex z-50 max-[500px]:flex'>
            {
              slideimg.map((slideimg,slideindex)=>(
                <div key={slideindex}>
                  {!(slideindex==currentIndex)? <BsSquare color='white' onClick={()=>goToSlide(slideindex)} />:<BsSquareFill  color='white'/>}
                  
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
      <div className='w-screen h-fit bg-[#dadfe3] text-black'>
        <div className='w-screen h-fit flex justify-center place-items-center '>
          <div className='w-[95%] h-[95%] bg-white px-4 my-4'>
            <div className='my-10'>
              <h1 className='text-5xl p-3 font-semibold flex justify-center w-full'>Courses</h1>
              {/* <hr className='bg-slate-500 px-5'/> */}
              <div className='h-fit gap-24 py-2 w-full mx-1 flex flex-wrap m-5 justify-center'>
                <div className='flex flex-col'>
                  <p className='text-4xl flex justify-center'>CSE</p>
                  <p>Computer Science Engineering</p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-4xl flex justify-center'>ECE</p>
                  <p>Computer Science Engineering</p>
                </div>
                <div className='flex flex-col'>
                  <p className='text-4xl flex justify-center'>CSE</p>
                  <p>Computer Science Engineering</p>
                </div>
              </div>
            </div>

            <div className='my-24'>
            <h1 className='text-5xl p-3 font-semibold w-full flex justify-center'>Placements</h1>
            {/* <hr className='bg-slate-500 px-5'/> */}
            <div className='h-fit gap-24 py-2 w-full mx-1 flex flex-wrap justify-center m-5 max-[600px]:gap-14'>
              <div className='flex flex-col h-[150px] w-[fit] '>
                <p className='text-6xl  w-full flex justify-center '>328</p>
                <p>JOBS OFFERED</p>
              </div>
              <div className='flex flex-col h-[150px] w-[fit] '>
                <p className='text-6xl  w-full flex justify-center '>178</p>
                <p>STUDENTS PLACED</p>
              </div>
              <div className='flex flex-col h-[150px] w-[fit] '>
                <p className='text-6xl  w-full flex justify-center '>27</p>
                <p>STUDENTS PLACED</p>
              </div>
            </div>
            <p  className='text-3xl font-semibold w-full flex justify-center max-[600px]:text-4xl max-[600px]:my-11'>Our Top Recruiters</p>
            <div className='flex flex-wrap gap-2 justify-center'>{
              companyicons.map((contntitem,contntindex)=>(

                <div className='  w-[fit] h-[fit]  flex items-center'  key={contntindex}>
                  <img src={`${companyicons[contntindex].url}`} ></img>
                </div>
              ))

              }

            </div>
            </div>
            <div className='mt-32'>
            <h1 className='text-5xl p-3 font-semibold w-full flex justify-center'>FAQ's</h1>
            {/* <hr className='bg-slate-500 px-5'/> */}
            <div className=' justify-center py-2 flex flex-col gap-2 '>
              <Accordian/>
              <Accordian/>
              <Accordian/>
              <Accordian/>
            </div>
            </div>

            <div className='m-10'>
            <h1 className='text-4xl p-3 font-semibold flex justify-center'>Contact Us</h1>
            {/* <hr className='bg-slate-500 px-5'/> */}
            <div className='  py-2 flex flex-row gap-2 justify-center'>
              <form action="" className='flex flex-col p-3 text-lg font-thin w-[50%] gap-3 justify-center max-[600px]:w-full max-[600px]:p-0'>
                {/* <label htmlFor="">Name</label> */}
                <input type="text" className='border border-[#5472d2] px-1 placeholder-black  h-11' placeholder='Enter your Name'/>
                {/* <label htmlFor="">Email</label> */}
                <input type="text" className='border border-[#5472d2] px-1 placeholder-black h-11' placeholder='Enter your Email Address'/>
                {/* <label htmlFor="">Query</label> */}
                <textarea name="" id="" cols="30" rows="5" className='border border-[#5472d2] px-1 placeholder-black' placeholder='Enter youe Query'></textarea>
                <div className='flex justify-center'><button className='w-[130px] h-[55px] border border-[#5472d2] hover:bg-[#b21919] hover:border-white hover:text-white'>Contact us</button></div>

              </form>

            </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className='w-screen h-[200px] flex items-center bg-[#b21919] justify-center text-white text-sm max-[600px]:h-fit '>
          <div className='flex flex-row w-fit gap-10 max-[600px]:flex-col max-[600px]:m-3'>
            <div className='flex flex-row '>
              <div className='p-1'><BiMap/></div> 
              <p className='mb-1'>College of Engineering Chengannur<br/>
                Chengannur P.O. <br />
                Alapuzha District <br />
                Kerala <br /> 
                PIN 689121</p>
            </div>
            <div className='flex flex-row'>
              <div className='p-1'><AiFillPhone/></div>
              <p>
              +91-479- 2455125 (Reception) <br />
              +91-479-2454125 (Office) <br />
              +91-479-2451424 (Administrative officer) <br />
              +91-479-2456046 (Principal) <br />
              </p>
            </div>
            <div className='flex flex-row'>
              <div className='p-1'><AiFillMail/></div>
              <p>principal@ceconline.edu</p>
            </div>
            <div className='h-fit w-fit max-[600px]:justify-center flex max-[600px]:w-full'>
              <img src="./src/assets/CEC-logo-white.png" alt=""  className=' h-[100px] w-[100px]'/>
            </div>
            
          </div>
        </div>

      </footer>

    </>
  
  )
  return (jsxelement);
}


export default App;
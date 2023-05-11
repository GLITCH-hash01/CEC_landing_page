import React,{useDebugValue, useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,BsSquare,BsSquareFill,BsInstagram, BsLinkedin,BsFacebook } from 'react-icons/bs';
import {BiMap} from 'react-icons/bi'
import CourseSection from './Components/Corsesection.jsx'
import Accordian from './Components/Accordian.jsx';
import {AiFillMail, AiFillPhone} from 'react-icons/ai';
import {useMediaQuery} from 'react-responsive';
import PlacementGraph from './Components/Graph.jsx';
import CarouselPanel from './Components/Carouselpanel.jsx';







function App(){
  const slideimg=[
    {
      url:"/src/assets/slide-img-1.jpeg",
      heading:"COLLEGE OF ENGINEERING CHENGANNUR",
      Content:"Join the College of Engineering Chengannur and become a pioneering engineer. Our highly qualified faculty and recognized programs under AICTE and KTU provide the discipline and education needed to excel in professional environments. Choose from a range of undergraduate and postgraduate programs in engineering, as well as an MBA program. Join us today and become a successful engineer and professional.",
      ButtonName:"Contact Us"
    },
    {
      url:"/src/assets/slide-img-2.png",
      heading:"PLACEMENTS",
      Content:"The College of Engineering Chengannur's Training and Placement Cell (TPC) comprises active student members guided by a Staff-in-Charge. The TPC focuses on developing students' personalities and establishing their careers by providing training programs, including group discussions, mock interviews, and behavior and body language basics. TPC assists students with career planning, employment, and information on higher studies. Companies are invited to the campus for recruiting students, and the TPC offers all facilities for conducting presentations, tests, and interviews.",
      ButtonName:"Contact Us",
    },
    {
      url:"/src/assets/slide-img-4.png",
      heading:"IHRD THARANG",
      Content:" A National Level Techno-Cultural-Entrepreneurial event organized by IHRD. The 6-day event had 60,000 participants and included workshops, competitions, and job fairs. It featured 85 stalls and cultural programs by celebrities like Jassie Gift, Navya Nair, and Sithara Krishnakumar.",
      ButtonName:"Contact Us",
    }  
    
  ]

  const companyicons=[
    {
      url:"./src/assets/Icons/TCS.png",
      information:'41'
    },
    {
      url:"./src/assets/Icons/TATA.png",
      information:'30'
    },
    {
      url:"./src/assets/Icons/Cognizant.png",
      information:'29'
    },
    {
      url:"./src/assets/Icons/Wipro.png",
      information:'24'
    },
    {
      url:"./src/assets/Icons/UST.png",
      information:'20'
    }
  ];
  

  
  const [currentIndex,setCurrentIndex]=useState(0);
  const isMobile=useMediaQuery({query:'(max-width:600px)'})
  const isRotatedMobileHeight=useMediaQuery({query:'(max-height:365px)'})
  const isRotatedMobiileWidth=useMediaQuery({query:'(max-width:885px)'});

 
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
      <link rel="preload" as='image' href="/src/assets/slide-img-2.png" />
      <div className='w-screen h-screen flex flex-col grow overflow-clip'>
        <div className='w-screen h-[fit] flex flex-row shadow-lg '>
          <img src={isMobile? "/src/assets/cec_logo_100.png":"/src/assets/cec_logo_300.png"} alt="logo" className='mr-[10px] max-[600px]:w-[100px] max-[600px]:h-[100px] h-[100px] w-[100px]' />
          <div className='flex flex-col p2 font-bold text-2xl max-[600px]:p-0 '>
            <h1 className=' text-2xl max-[600px]:text-lg'>College of Engineering</h1>
            <h1 className=' text-2xl max-[600px]:text-lg'>Chengannur</h1>
            <p className='font-light text-sm max-[600px]:text-xs'>Managed by IHRD</p>

          </div>
          <div className='grow '></div>
          <nav className='flex flex-row self-center p-4'>              
          <a href="https://www.instagram.com/cec_chengannur/" className='flex flex-row gap-3 cursor-pointer hover:bg-gray-300 p-3 rounded-xl'>
              <BsInstagram  size={20}/>
              <a className='max-[500px]:hidden'>Instagram</a>
            </a>

            <a className='flex flex-row gap-3 cursor-pointer hover:bg-gray-300 p-3 rounded-xl' href="https://www.linkedin.com/school/college-of-engineering-chengannur/"> 
              <BsLinkedin size={20}/>
              <a className='max-[500px]:hidden'>LinkedIn</a>
            </a>
            <a className='flex flex-row gap-3 cursor-pointer hover:bg-gray-300 p-3 rounded-xl ' href='https://www.facebook.com/CEConline/'>
              <BsFacebook size={20}/>
              <a className='max-[750px]:hidden'>Facebook</a>
            </a>
          </nav>
          
        

        </div>
        <CarouselPanel/>
        
      </div>
      <div className='w-screen h-fit bg-[#dadfe3] text-black'>
        <div className='w-screen h-fit flex justify-center place-items-center '>
          <div className='w-[95%] h-[95%] bg-white px-4 my-4'>
            <div className='my-8'>
              <h1 className='text-5xl p-3 font-semibold flex justify-center w-full'>Courses</h1>
              {/* <hr className='bg-slate-500 px-5'/> */}

                <CourseSection/>


            </div>

            <div className='my-14'>
            <h1 className='text-5xl p-3 font-semibold w-full flex justify-center'>Placements</h1>
            {/* <hr className='bg-slate-500 px-5'/> */}
            <div className='flex overflow-auto lg:justify-center md:justify-center'>
              <PlacementGraph/>
            </div>
            <div className='h-fit gap-24 py-2 w-full mx-1 flex flex-wrap justify-center m-5 max-[600px]:gap-14'>
              <div className='flex flex-col h-[150px] w-[fit] '>
                <p className='text-6xl  w-full flex justify-center text-[#8c1515]'>328</p>
                <p>JOBS OFFERED</p>
              </div>
              <div className='flex flex-col h-[150px] w-[fit] '>
                <p className='text-6xl  w-full flex justify-center text-[#8c1515]'>178</p>
                <p>STUDENTS PLACED</p>
              </div>
              <div className='flex flex-col h-[150px] w-[fit] '>
                <p className='text-6xl  w-full flex justify-center text-[#8c1515]'>27</p>
                <p>STUDENTS PLACED</p>
              </div>
            </div>
            <p  className='text-3xl font-semibold w-full flex justify-center max-[600px]:text-4xl max-[600px]:my-11 '>Our Top Recruiters</p>
            <div className='flex flex-wrap gap-3 justify-center min-[1400px]:place-content-center min-[1400px]:h-[250px]'>{
              companyicons.map((contntitem,contntindex)=>(
              <div className='group  duration-100 delay-75 flex flex-col place-content-center  cursor-pointer hover:shadow-xl hover:scale-125 hover:bg-white'>
                <div className=' w-[full] h-[full]  flex items-center border-black  grow'  key={contntindex}>
                  <img src={`${companyicons[contntindex].url}`} ></img>
                </div>
                {/* <div className='group-hover:flex hidden justify-center'>
                 <p className='font-semibold'>{`${companyicons[contntindex].information}`} <span className='font-light'>Placed</span> </p>
                </div> */}
                </div>
              ))

              }

            </div>
            </div>
            <div className='mt-32'>
            <h1 className='text-5xl p-3 font-semibold w-full flex justify-center'>FAQ's</h1>
            {/* <hr className='bg-slate-500 px-5'/> */}
            <div className=' justify-center py-2 flex flex-col gap-2 w-full items-center'>
              <Accordian indexnumber={0}/>
              <Accordian indexnumber={1}/>
              <Accordian indexnumber={2}/>
              <Accordian indexnumber={3}/>
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
            <div className='flex flex-wrap gap-5'>
            <div className='flex flex-row'>
              <div className='p-1'><AiFillMail/></div>
              <p>principal@ceconline.edu</p>
            </div>
            <div className='h-fit w-fit max-[600px]:justify-center flex max-[600px]:w-full'>
              <img src="./src/assets/CEC-logo-white.png" alt=""  className=' h-[100px] w-[100px]'/>
            </div>
            </div>
          </div>
        </div>

      </footer>

    </>
  
  )

  return (jsxelement);
}


export default App;
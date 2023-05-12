import React,{ useEffect,useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight,BsSquare,BsSquareFill,BsInstagram,BsLinkedin,BsFacebook } from 'react-icons/bs';
import {BiMap} from 'react-icons/bi'
import CourseSection from './Components/Corsesection.jsx'
import Accordian from './Components/Accordian.jsx';
import {AiFillMail, AiFillPhone} from 'react-icons/ai';
import {useMediaQuery} from 'react-responsive';
import PlacementGraph from './Components/Graph.jsx';
import { useSwipeable } from "react-swipeable";
import { AiFillCloseCircle } from "react-icons/ai";


function App(){
  // Objext
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

  // Media Queries
  const isMobile=useMediaQuery({query:'(max-width:600px)'})
  const isRotatedMobileHeight=useMediaQuery({query:'(max-height:365px)'})
  const isRotatedMobiileWidth=useMediaQuery({query:'(max-width:885px)'});

  // Variables
  const [Donemsg,DonePrompt]=useState(false)
  const [currentslideindex,setslideindex]=useState(0);
  const [slide1translate,setcrntwidth]=useState(window.innerWidth);
  const [ContactStatus,BtnTrigger]=useState(false);
  const [visible,setVisible]=useState(false)

  //Functions
  const prevSlide=() =>{
    const isFirstSlide=(currentslideindex==0);
    const newIndex=isFirstSlide? slideimg.length-1:currentslideindex-1;
    setslideindex(newIndex)
  }

  const nextSlide=() =>{
    const isLastSlide=(currentslideindex==slideimg.length-1);
    const newIndex=isLastSlide? 0:currentslideindex+1;
    setslideindex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setslideindex(slideIndex);
  };

  const handlers=useSwipeable({
    onSwipedLeft:()=>nextSlide(),
    onSwipedRight:()=>prevSlide()
  })
  
  const toggleVisible=()=>{
    const scrolled=document.documentElement.scrollTop;
    if (scrolled>300){
      setVisible(true)
    }
    else if(scrolled<=300){
      setVisible(false )
    }
  }

  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  //HTML Code
  const jsxelement=(
    <>
      {/*Page 1*/}
      <div className='w-screen h-screen flex flex-col grow overflow-x-clip'>
        {/* White Top bar*/}
        <div className='w-screen h-[fit] flex flex-row shadow-lg '>
          <img src={isMobile? "/src/assets/cec_logo_100.png":"/src/assets/cec_logo_300.png"} alt="logo" className='mr-[10px] max-[600px]:w-[100px] max-[600px]:h-[100px] h-[100px] w-[100px]'  />
          <div className='flex flex-col p2 font-bold text-2xl max-[600px]:p-0 '>
            <h1 className=' text-2xl max-[600px]:text-lg'>College of Engineering</h1>
            <h1 className=' text-2xl max-[600px]:text-lg'>Chengannur</h1>
            <p className='font-light text-sm max-[600px]:text-xs'>Managed by IHRD</p>
          </div>
          <div className='grow '></div>

          {/* Social Media Nav Bar */}
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

        <div className=" w-fit h-full relative group "{...handlers}>
            <div className="h-full w-screen overflow-x-clip group">
                <div className="h-full w-fit flex flex-row overflow-auto">
                    {
                        slideimg.map((slidedata,slideindex)=>(
                          <div key={slideindex} className={'w-screen h-full bg-center bg-cover relative group transition-all duration-500 delay-150 '} style={{backgroundImage:`url(${slideimg[slideindex].url})`,transform:`translate(-${currentslideindex*slide1translate}px)`}}>
                          <div className='absolute bg-gradient-to-t from-black w-full h-full'></div>
                              <div className='h-full w-full flex flex-col-reverse'>
                                  <div className='z-40 p-12'>
                                    <div className='flex flex-row grow h-full max-[500px]:flex-col'>
                                      <div className='flex flex-col text-white w-[75%] max-[500px]:w-full lg:p-10 md:p-10  '>
              
                                        <h2 className='text-white font-bold text-xl py-2 w-full'>{slideimg[slideindex].heading}</h2>
                                        {((slideimg[slideindex].Content.length>0))&&<p className='max-[500px]:h-[150px] overflow-auto max-[500px]:bg-gradient-to-t max-[500px]: from-black w-full text-ellipsis'>{slideimg[slideindex].Content}</p>}
              
                                      </div>
                                      <div className='h-full  w-[25%] justify-center flex max-[500px]:w-full'>{
                                        (slideimg[slideindex].ButtonName.length>0)? <button className='  w-[200px] h-[50px] text-white place-self-center hover:bg-white hover:text-black max-[500px]:w-full bg-[#b21919]' onClick={()=>{BtnTrigger(true)}}> {slideimg[slideindex].ButtonName}</button>: 0
                                      }
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                            
                        ))
                    }

                </div>
            </div>
            <div className='absolute w-fit h-fit text-white bottom-[50%] left-0 hidden group-hover:block cursor-pointer z-40'>
                <BsChevronCompactLeft onClick={prevSlide} size={isMobile? 30:80} />
            </div>
            <div className='absolute w-fit h-fit text-white bottom-[50%] right-0 hidden group-hover:block cursor-pointer  z-40'>
                <BsChevronCompactRight onClick={nextSlide} size={isMobile? 30:80}/>
            </div>
            <div className='transition-all ease-in absolute  w-screen h-fit bottom-0 justify-center py-3 gap-4 cursor-pointer hidden group-hover:flex z-40 max-[500px]:flex'>
                {
                  slideimg.map((slideimg,slideindex)=>(
                    <div key={slideindex}>
                      {!(slideindex==currentslideindex)? <BsSquare color='white' onClick={()=>goToSlide(slideindex)} />:<BsSquareFill  color='white'/>}

                    </div>
                  ))
                }
            </div>
        </div>
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
            <div className=' justify-center py-10 flex flex-col gap-2 w-full items-center'>
              <Accordian indexnumber={0}/>
              <Accordian indexnumber={1}/>
              <Accordian indexnumber={2}/>
              <Accordian indexnumber={3}/>
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
{ContactStatus&&
      <div className=" absolute w-screen h-full bg-black bg-opacity-20 z-50">
            <div className=" w-full h-screen absolute flex justify-center place-items-center z-40">
                <div className="w-[500px] h-[650px] bg-[#dadfe3] border rounded-lg  border-black  flex flex-col  max-[600px]:h-screen max-[600px]:w-screen realtive">
                    <form className="w-full h-full  flex flex-col relative overflow-hidden">
                        <div className="flex flex-row bg-[#b21919] items-center pr-4">
                        <h1 className="text-3xl p-4 max-[600px]:text-4xl text-white grow">Contact Us</h1>
                        <AiFillCloseCircle size={25} color="#dadfe3" className="cursor-pointer" onClick={()=>(BtnTrigger(false))} />
                        </div>
                        <div className="px-4 flex flex-col py-2">
                        <label className="max-[600px]:text-2xl">Name</label>
                        <input type="text" placeholder="Enter your Name" className="p-4 focus:border-[#5472d2] border-[#5472d2] border rounded" />
                        <label className="max-[600px]:text-2xl">Phone number</label>
                        <input type="text" placeholder="Enter your Phone number" className="p-4 focus-within:border-[#5472d2] border-[#5472d2] border rounded" />
                        <label className="max-[600px]:text-2xl">Queries</label>
                        <textarea name="" id="" cols="30" rows="10" className="border-[#5472d2] border rounded"></textarea>
                        <div className="flex justify-center  grow ">
                        <button className="w-[90%] h-[50px]  bg-[#b21919] text-white text-xl hover:bg-[#ae3535] my-6 rounded-lg">Contact Us</button>
                        </div>
                        </div>
                        <div className="absolute w-full h-[50px] bg-[#b21919] transition-all duration-300 -bottom-20 flex items-center text-white px-3"><p>Invalid Phone number</p></div>
                    </form>
                </div>
            </div>
            {Donemsg&&
              <div className='w-full h-screen absolute z-50 flex justify-center place-items-center'>
              <div className='bg-[#dadfe3] w-[300px] h-[200px] border border-black rounded-lg flex flex-col'>
                <div className='flex flex-col justify-center'>
                  <p className='text-center text-xl py-5'>We will get to you as soon as possible</p>
                  <div className='flex flex-col gap-2 justify-center place-items-center'>
                  <button className='w-[150px] text-white h-[25px] bg-[#b21919] rounded-lg hover:bg-[#af4646]' onClick={()=>{BtnTrigger(false)}}>OK</button>
                  <button className='w-[150px] text-white h-[25px] bg-[#b21919] rounded-lg hover:bg-[#af4646]'>FAQ's</button>
                  </div>
                </div>

              </div>
            </div>}
        </div>
        }

        

    </> 
  
  )

  useEffect(()=>{setcrntwidth(window.innerWidth);})
  return (jsxelement);
}


export default App;
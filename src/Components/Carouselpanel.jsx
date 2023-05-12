import React,{useEffect, useState} from "react";
import CarouselSlide from "./CarouselSlide";
import { BsChevronCompactLeft, BsChevronCompactRight,BsSquare,BsSquareFill } from 'react-icons/bs';
import {useMediaQuery} from 'react-responsive';
import { useSwipeable } from "react-swipeable";


function CarouselPanel(props){
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
    const [currentslideindex,setslideindex]=useState(0);
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


    const isMobile=useMediaQuery({query:'(max-width:600px)'})
    const jsxelement=(<>
        <div className=" w-fit h-full relative group "{...handlers}>
            <div className="h-full w-screen overflow-x-clip group">
                <div className="h-full w-fit flex flex-row overflow-auto">
                    {
                        slideimg.map((slidedata,slideindex)=>(
                            <CarouselSlide url={slideimg[slideindex].url}
                                heading={slideimg[slideindex].heading}
                                Content={slideimg[0].Content}
                                index={slideindex}
                                currentslideindex={currentslideindex}
                                functionclck={props.clickfunc}
                                ButtonName={slideimg[slideindex].ButtonName}/>
                            
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

    
    </>);

    
    return(jsxelement);
}

export default CarouselPanel;
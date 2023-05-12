import { bool } from "prop-types";
import React,{useState} from "react";

function CourseSection(){
    


    const [isCSEActive,stateCSEchanger]=useState(false);
    const [isECEActive,stateECEchanger]=useState(false);
    const [isEEEActive,stateEEEchanger]=useState(false);

    function Turn_on(varid){
        const CouseVar=[stateCSEchanger,stateECEchanger,stateEEEchanger]
        CouseVar.map((item,itemindex)=>{
            item(false)
            console.log(item)
        })
        CouseVar[varid](true);
    }
    

    const Courses=[
        {
            id:"CSE",
            Name:"Computer Science Engineering",
            getState:()=>{
                return isCSEActive;
            },
            setState:()=>{
                isCSEActive? stateCSEchanger(false):Turn_on(0)
            },
            Information:"The Department of Computer Engineering offers B.Tech in Computer Science and Engineering and a Masters Degree Programme specializing in Image Processing from Kerala Technological University. These courses provide both theoretical and practical knowledge of Computer Science. The curriculum includes Computer Architecture, Data Structures, Database Management, Language Processor, Computer Networks, Software Engineering, and Algorithm Design. The students also undertake industry-like seminars, mini-projects, and main projects to bridge the gap between knowledge and its application. The course produces competent computer engineers ready to meet the challenges of the growing IT industry."

        },
        {
            id:"ECE",
            Name:"Electronics and Communication Engineering",
            getState:()=>{
                return isECEActive;
            },
            setState:()=>{
                isECEActive? stateECEchanger(false):Turn_on(1)
            },
            Information:"The Department of Electronics Engineering at our institute offers 4 years of B.Tech and 2 years of M.Tech courses, providing students with a comprehensive understanding of theoretical aspects and practical working knowledge in the field of Electronics Engineering. Our experienced faculty, who hold Masters and Doctoral degrees from premier institutions, provide personalized attention to the students. The department owns well-equipped laboratories to meet curriculum requirements, and students are required to undertake lab classes, seminars, and projects to bridge the gap between theoretical and practical knowledge. We aim to mold technically accomplished Electronics Engineers and Entrepreneurs through institute-industry interactions, equipping them with technical know-how, professionalism, and social values."

        },
        {
            id:"EEE",
            Name:"Electrical and Electronics Engineering",
            getState:()=>{
                return isEEEActive
            },
            setState:()=>{
                isEEEActive? stateEEEchanger(false):Turn_on(2)
            },
            Information:"The Department of Electrical Engineering was established in 2009, offering a 4-year B.Tech in Electrical and Electronics Engineering from APJ Abdul Kalam Technological University, Kerala with a current intake of 120 students. Our experienced faculty with Masters and Doctoral degrees from premier institutions provide personalized attention and institute-industry interactions to mold technically accomplished Electrical Engineers and Entrepreneurs. Our well-equipped laboratories and quality-oriented academic environment equip students with technical know-how, professionalism, and social values for their diversified career plans."
        }
    ];
    

return (
<>
    <div className='h-fit gap-24 py-2 w-full mx-1 flex flex-wrap m-5 justify-center '>
        { 
        Courses.map((item,itemindex)=>(

        
        <div className={`flex flex-col w-${item.getState()? "full":"fit"} duration-150`} >
            <div className={`flex px-2 w-${item.getState()? "full":"fit"} self-center place-content-center`}  >
            <div className={'flex relative flex-col py-9  cursor-pointer group hover:bg-gray-100 bg-white hover:shadow-lg  z-20 px-2 rounded-lg '+(item.getState()? 'translate-y-7 transition-all duration-150 delay-100 shadow-lg':"translate-y-0 transition-all duration-150 delay-100")} onClick={item.setState}>
                <p className='text-4xl flex justify-center' >{item.id}</p>
                <p className="flex justify-center w-[250px] text-center" >{item.Name}</p>

            </div>
            </div>
            <div className={` bg-blend-saturation z-0  flex-row shadow-inner shadow-black text-white bg-[#b21919] w-${item.getState()? "full":"0"} ${item.getState()? "lg:h-[200px] sm:h-[500px]":"h-0"} transition-all duration-300 self-center flex`}  >
                <div className={`${item.getState()?" flex":"hidden"} transition-all   w-full justify-center my-7 text-center flex-col p-8`}>

                    <p className={`font-semibold text-lg p-2`}>{item.Name}</p>
                    <p>{item.Information}</p>
                </div>

            </div>
        </div>
    ))
}
    </div>
    
</>);

}

export default CourseSection;
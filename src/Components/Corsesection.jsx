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
            }


        },
        {
            id:"ECE",
            Name:"Electronics and Communication Engineering",
            getState:()=>{
                return isECEActive;
            },
            setState:()=>{
                isECEActive? stateECEchanger(false):Turn_on(1)
            }

        },
        {
            id:"EEE",
            Name:"Electrical Engineering",
            getState:()=>{
                return isEEEActive
            },
            setState:()=>{
                isEEEActive? stateEEEchanger(false):Turn_on(2)
            }
        }
    ];
    console.log(Courses[0].getState())

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
            <div className={` bg-blend-saturation z-0  flex-row shadow-inner shadow-black text-white bg-[#b21919] w-${item.getState()? "full":"0"} h-${item.getState()? "[200px]":"0"} transition-all duration-150 self-center flex`}  >
                <div className={`${item.getState()?" flex":"hidden"} transition-all   w-full justify-center my-7`}>

                    <p className={``}>jghasdjklgfkjlasgh</p>
                    <p></p>
                </div>

            </div>
        </div>
    ))
}
    </div>
    
</>);

}

export default CourseSection;
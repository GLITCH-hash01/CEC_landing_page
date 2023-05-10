import React,{useState} from "react";

function CourseSection(){

return (
<>
    <div className='h-fit gap-24 py-2 w-full mx-1 flex flex-wrap m-5 justify-center '>
        <div className="flex flex-col w-full">
            <div className="flex px-2 w-fit self-center">
            <div className='flex relative flex-col py-3 justify-center cursor-pointer group before:h-[5px] before:w-0  before:bg-black before:absolute before:bottom-0 before:self-center hover:before:w-full before:transition-all before:duration-150 before:delay-200 before:rounded-lg'>
                <p className='text-4xl flex justify-center'>CSE</p>
                <p className="flex justify-center">Computer Science Engineering</p>

            </div>
            </div>
            <div className="w-full h-[200px] bg-CSE bg-blend-saturation z-0 flex flex-row shadow-inner shadow-black text-white">
                <p>jkalhsdjkfhjkhsdfjkhjkashdf</p>
                <p></p>

            </div>
        </div>
    </div>
    
</>);

}

export default CourseSection;
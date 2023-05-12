import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";


function ContactForm(props){

    const jsxelement=(
        <>
        {<div className=" absolute w-screen h-full bg-black bg-opacity-20 z-50">
            <div className=" w-full h-full absolute flex justify-center place-items-center z-50">
                <div className="w-[500px] h-[650px] bg-[#dadfe3] border rounded-lg  border-black  flex flex-col  max-[600px]:h-screen max-[600px]:w-screen realtive">
                    <form className="w-full h-full  flex flex-col relative overflow-hidden">
                        <div className="flex flex-row bg-[#b21919] items-center pr-4">
                        <h1 className="text-3xl p-4 max-[600px]:text-4xl text-white grow">Contact Us</h1>
                        <AiFillCloseCircle size={25} color="#dadfe3" className="cursor-pointer" />
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

        </div>}

        </>
    );
    
    return jsxelement;
}

export default ContactForm;
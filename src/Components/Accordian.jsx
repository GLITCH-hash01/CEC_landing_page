import React,{useState} from 'react';

function Accordian(props){
    

    const Queries=[
        {
            Question:"What are the distances to the near transists?",
            Answer:"The distances to the nearest transit options are as follows: Bus Stand:Chennganunur-1.5km, Railway Station:Chengannur-CNGR-1km, Airport: Cochin International Airport-COK -110km, Trivandrum International Airport -TRV-120km"
        },
        {
            Question:"Does the college provide hostel facilities?",
            Answer:"Yes, the college provides hostel facilities for both male and female students. There are five hostels in total, including two men's hostels and three women's hostels. The men's hostel is located next to the campus and can accommodate up to 70 students, while the women's hostels are located nearby, with one close to the railway station. Each hostel has a warden to supervise and address any issues."

        },
        {
            Question:"Does the college provide any transportation facilities?",
            Answer:"Yes, the college provides transportation facilities for both staff and students to nearby places and towns. The college has dedicated bus routes with scheduled pickup and drop-off times. The bus route from Changanacherry starts at 8:10 AM and goes to Thiruvalla, while the bus route from Haripad starts at 7:30 AM and goes to Mavelikkara"
        },
        {
            Question:"What are the organizations provided in college?",
            Answer:"Our college offers various technical and non-technical organizations such as IEEE, NSS, NCC, FOCES, Tinkerhub, and Prodec."
        }
    ]

    

    const [isActive,setCurrentState]=useState();
    return(
        <>
        <div className='flex flex-col h-fit items-center w-[900px] max-[1020px]:w-full'>
            <div className='flex flex-row px-2 bg-[#5472d2]  h-[50px] text-white cursor-pointer  w-full' onClick={()=> setCurrentState(!isActive)}>
                <p className='self-center grow max-[600px]:w-[80%] max-[600px]:grow-0'>{Queries[props.indexnumber].Question}</p>
                <div className='hidden max-[600px]:grow max-[600px]:flex '></div>
                <p className={'self-center text-3xl duration-300  '+(isActive? 'rotate-45':'')}  >+</p>
            </div>
            
            
            <div className={`${isActive? "h-fit p-4":"h-0"} bg-[#647fd6] duration-100 transition-all  w-full text-white`}>
                <p>{Queries[props.indexnumber].Answer}</p>
            </div> 
            
            
        </div>
        </>
    );
}

export default Accordian
import React, { useState } from 'react'
const Dashboard = ({project}) => {
    const [first, setfirst] = useState("All")
    
  return (
    
    <div className='bg-slate-950  min-h-screen text-white gap-8  ' >
      
        <div >
<h1 className='text-white font-bold text-3xl p-10 '>Remote DevStudio</h1>

        </div>
        <div className='flex justify-between '>
            
          <button onClick={()=>{
            setfirst("All")
          }}
           className='rounded cursor-pointer hover:scale-105 transition-all bg-slate-800 px-5 ml-10 mb-10' >All</button>
        <button  onClick={()=>{
            setfirst("Active")
          }}
         className='rounded cursor-pointer hover:scale-105 transition-all bg-slate-800 
         px-5 ml-6  mb-10' >Active</button>
        <button  onClick={()=>{
            setfirst("Completed")
          }}
        className='rounded cursor-pointer hover:scale-105 
        transition-all  bg-slate-800 px-5 ml-6 mr-10 mb-10' >Complete</button>
        
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-6 mr-6 cursor-pointer gap-6 '>
            {project.filter((item)=>{
if(first==="All") return true;
return item.status === first
            }).map((item)=>{
                return(
                <div className="bg-slate-800   rounded-xl border hover:scale-105
                 border-slate-700 hover:border-blue-500 transition-all" key={item.id}>
                    <div className='flex justify-between mt-4 '>
                    
                  
                    <h1 className='flex pl-4 font-bold hover:shadow rounded  hover:shadow-blue-950 '>{item.projectTitle}</h1>
                    <div className=" sticky">
                          <span className={`px-3 py-1 rounded-full text-xs  font-semibold flex justify-end w-fit cursor-pointer
                            mr-2 ${
                    item.status === "Active" ? "bg-green-500/20 w-10 text-green-400":"bg-gray-500/20 text-gray-400  "
                } `}
                >{item.status}</span>
              
                 </div>
                      </div>
                   <div className='p-6 mb-4'>
                    <div className='flex justify-between'>
                     
                    <p className=''>Client:
                        <br />{item.clientName}</p>
                        </div>
                    <hr className='mt-5' />
                    <div className='flex justify-between mt-5'>
                    <p>Perhour
                        <br />
                        {item.hourlyRate}$</p>
                    <span className=''>Total Hour
                        <br  />{item.totalHoursLogged}$</span>
                        </div>
   </div>
                </div>
                )
            })}
        </div>


    </div>
  )
}

export default Dashboard
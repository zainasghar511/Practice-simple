import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaBeer } from 'react-icons/fa';
const Dashboard = ({project}) => {
    const [first, setfirst] = useState("All")
    const[filter , setFilter] = useState("")
    const [show, setShow] = useState(null)

    //Filter The Data 
    const filterproject = project.filter((item)=>{
return(first==="All"||item.status===first) &&
item.projectTitle.toLowerCase().includes(filter.toLowerCase())
    })
    
    
  return (
    
    <div className='bg-slate-950  min-h-screen text-white gap-8  ' >
      
        <div >
<h1 className='text-white font-bold text-3xl p-10 '>Remote DevStudio</h1>

        </div>
        <div className='flex mb-5 text-black justify-center'>
          <span className='flex justify-between bg-white rounded hover:border-2 border-transparent 
           focus:border-blue-500 w-120 py-1 px-3' > 
             <input type="text" placeholder='Search here' 
          className='   bg-white  outline-none border-transparent placeholder:text-gray-900' onChange={((e)=>{
             setFilter(e.target.value)
           })} />
          <IoIosSearch className='text-black flex justify-center items-center text-center mt-0.5 text-xl' />
        </span>
        </div>
       
        <div className='flex  '>
            
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
           {filterproject.length === 0 ? (
  <div className="col-span-full text-center py-10 text-gray-400">
    <p className="text-xl font-semibold">No Projects Found</p>
    <p className="text-sm">Try adjusting your search or filters.</p>
  </div>
):
//Map Function
       filterproject.map((item)=>{
                return(
                <div className="bg-slate-800   rounded-xl border hover:scale-105
                 border-slate-700 hover:border-blue-500 transition-all" key={item.id}
                 onClick={()=>{
                    setShow(show===item.id? null:item.id)
                 }}>
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
                    <div className='flex justify-between mt-5 font-bold'>
                    <p>Perhour
                        <br />
                     <p className='ml-4 mt-2'>   {item.hourlyRate}$</p> </p>
                    <span className='font-bold '>Total Hours
                           <br  />  <p className='ml-8 mt-2'>  {item.totalHoursLogged}
                            </p>
                           </span>
                        </div>
   </div>
 {
    show===item.id &&(
        <div className='flex justify-between  p-2 border-2 rounded-xl border-gray-300'>
        <h1>Total earning</h1>
        <p> {item.hourlyRate*item.totalHoursLogged}$</p>
        </div>
    )
 }
                </div>
                )
            })}
        </div>

 
    </div>
   
  )
}

export default Dashboard
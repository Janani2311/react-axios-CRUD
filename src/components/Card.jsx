import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import toast from 'react-hot-toast';
import {deleteById} from './../redux/ProfileSlice'
import { useSelector,useDispatch } from 'react-redux';
import AxiosService from './../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import dummy from './../assets/images/dummy.jpeg'

function Card({dataItem}) {

let profiles = useSelector((state) => state.profile.profiles)
let dispatch = useDispatch()
let navigate = useNavigate()
let [flip,setFlip] = useState(false);

 let handleDelete = async(id)=>{
    try {
      dispatch(deleteById(id))
      let response = await AxiosService.delete(`${ApiRoutes.BLOG_APP.path}/${id}`)
      if(response.status===200)
      {
        toast.success("Data Deleted Successfully")
      }
    } catch (error) {
        toast(error.response.message || "Internal Server Error")
    }
  }

  return <>
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card flip-card-inner shadow h-100 py-2" style={{ width: '20rem' }}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <ReactCardFlip isFlipped={flip} flipDirection='horizontal'>
                                <div className="flip-card-front text-xs font-weight-bold mb-1">
                               
                                    <img className="profile-image" src={dataItem.imageurl? dataItem.imageurl:dummy} alt="John"/>
                                    <h4 className='text-uppercase mt-4 text-align mb-4' style={{color:"coral"}}>{dataItem.name}</h4>
                                    <p><span className='title'>UserName:</span>&nbsp;{dataItem.username}</p>
                                    <p><span className='title'>Email:</span>&nbsp;{dataItem.email}</p>
                                    <p><span className='title'>Company:</span>&nbsp;{dataItem.company.name}</p>
                                    <p>"{dataItem.company.catchPhrase}"</p>
                                    <p><button className="button-front" onClick={()=>setFlip(!flip)}>Contact</button></p>
                                    
                                </div>

                                <div className="flip-card-back text-xs font-weight-bold mb-1">
                                
                                    <div className="position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>
                                        <EditIcon classname='cursor' onClick={()=>navigate(`/profile/${dataItem.id}`)}/>&nbsp;&nbsp;
                                        <DeleteForeverIcon classname='cursor' onClick={()=>handleDelete(dataItem.id)}/>
                                    </div>
                                    
                                    <p className='title mb-2'>Address:</p>
                                    <div className='mb-4 ml-5'>
                                        <p className='mb-2'>{dataItem.address.street},</p>
                                        <p className='mb-2'>{dataItem.address.suite},</p>
                                        <p className='mb-2'>{dataItem.address.city},</p>
                                        <p className='mb-2'>{dataItem.address.zipcode}.</p>
                                    </div>
                                    <p className='title mb-2'>Location:</p>
                                    <div className='mb-4 ml-5'>
                                        <p className='mb-2'>latitude :{dataItem.address.geo.lat},</p>
                                        <p className='mb-2'>longitude :{dataItem.address.geo.lng},</p>
                                    </div>
                                    <p className='mb-4'><span className='title'>call me @</span>&nbsp;{dataItem.phone}</p>
                                    <p className='mb-4'><span className='title'>Reach me @</span>&nbsp;{dataItem.website}</p>
                                    <p><button className="button-back" onClick={()=>setFlip(!flip)}>Profile</button></p>
                                        
                                </div>
                            </ReactCardFlip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
  
  </>
}

export default Card

import React, { useEffect, useState } from 'react'
import Card from './Card'
import AxiosService from './../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import {save} from './../redux/ProfileSlice'
import { useSelector,useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

function Dashboard() {

    let profiles = useSelector((state) => state.profile.profiles)
    let dispatch = useDispatch()
  
      
    // using useDispatch to save data in state 
    const getData = async()=>{
        try{
           let response = await AxiosService.get(ApiRoutes.BLOG_APP.path)
            if(response.status===200)
            {
              dispatch(save(response.data));
            }
          } 
          catch(error){
            toast.error(error.response.message || "Internal Server Error")
          }
        }
    
    
        useEffect(()=>{
            getData()
          },[])
    
    
  return <>
  
        <div id="content-wrapper" className="d-flex flex-column dashboard-wrapper">
            <div id="content">
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="heading">Profile Community</h1>
                    </div>
                    
                    <div className='row'>
                      <div className='card-wrapper'>
                        {
                            profiles.map((e,i) => {
                               return <Card dataItem={e} key={i}/>
                            })
                        }
                      </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default Dashboard
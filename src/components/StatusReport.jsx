import React,{useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import AxiosService from './../utils/AxiosService'
import ApiRoutes from '../utils/ApiRoutes';
import {save,edit} from './../redux/ProfileSlice'
import { useSelector,useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';


function StatusReport() {

    let profiles = useSelector((state) => state.profile.profiles)
    let dispatch = useDispatch();

    // using axios API to fetch data from mockapi
    const getData = async()=>{
        try{
           let response = await AxiosService.get(ApiRoutes.BLOG_APP.path)
            if(response.status===200)
            {
                console.log(response.data)
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

      // function to handle status update using axios api 
      const handleStatusChange = async(id,status)=>{
        dispatch(edit(id))
        try {
          let response = await AxiosService.put(`${ApiRoutes.BLOG_APP.path}/${id}`,{
            status:!status
          })
          if(response.status===200)
          {
            toast.success("Status changed Successfully")
            getData()
          }
        } catch (error) {
          toast(error.response.message || "Internal Server Error")
        }
      }
    
  return <>
   
   <div className='table-wrapper'>
    <h2>User's Status updation</h2>
    <div className='status-table'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
            profiles.map((e,i) => {
               return <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label={e.status?"Active":"Inactive"}
                            checked={e.status}
                            onChange={()=>handleStatusChange(e.id,e.status)}
                        />
                    </Form>
                    </td>
                </tr>
            })
        }
        
      </tbody>
    </Table>
    </div>
    </div>
  </>
}

export default StatusReport

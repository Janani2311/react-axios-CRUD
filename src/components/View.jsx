import React,{useEffect, useState} from 'react'
import { Field, Formik} from 'formik'
import * as Yup from 'yup'
import AxiosService from '../utils/AxiosService';
import toast from 'react-hot-toast';
import { useNavigate,useParams } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';

function SampleForm() {

    let navigate = useNavigate()
    let {id} = useParams();
    let [formValues,setFormValues] = useState({})

    // Axios API get request to fetch data from mockAPI
    let getData = async(id)=>{
        try {
            let response = await AxiosService.get(`${ApiRoutes.BLOG_APP.path}/${id}`)
            if(response.status===200)
            {
                saveValues(response.data)
            }
        } catch (error) {
            toast.error(error.response.message || "Internal Server Error")
        }
    }

    useEffect(()=>{
        if(id)
          getData(id);
    },[])
  
     // Axios API put request to post edited data
    let editData = async(values)=>{
      try {
          let response = await AxiosService.put(`${ApiRoutes.BLOG_APP.path}/${id}`,
            {
              "imageurl":values.imageurl,
              "name": values.name,
              "username": values.username,
              "email": values.email,
              "address": {
                "street": values.street,
                "suite": values.suite,
                "city": values.city,
                "zipcode": values.zipcode,
                "geo": {
                  "lat": values.lat,
                  "lng": values.lng
                }
              },
              "phone": values.phone,
              "website": values.website,
              "company": {
                "name": values.companyName,
                "catchPhrase": values.catchPhrase,
                "bs": values.bs
              }
          })
          if(response.status === 200)
          {
            toast.success("profiles updated Successfully!!")
            navigate('/')
            }
      } catch (error) {
          toast.error(error || "Internal Server Error")
      }
    }

    // setting initial form values of the ID selected from dashboard
    const saveValues = (data) => {
       setFormValues({
        imageurl:`${data.imageurl}`,
        email:`${data.email}`,
        username:`${data.username}`,
        name:`${data.name}`,
        street:`${data.address.street}`,
        suite:`${data.address.suite}`,
        city:`${data.address.city}`,
        zipcode:`${data.address.zipcode}`,
        lat:`${data.address.geo.lat}`,
        lng:`${data.address.geo.lng}`,
        phone:`${data.phone}`,
        website:`${data.website}`,
        companyName:`${data.company.name}`,
        catchPhrase:`${data.company.catchPhrase}`,
        bs:`${data.company.bs}`,
       })
    }
    
  return <>
    <div className='form-wrapper'>
    <div>
     <h1 className='mb-4 add'>Edit Profile Details</h1>
     {/* built view page form using Formik to handle the form values */}
     <Formik
       initialValues={formValues}
       onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        editData(values);
       }}
       enableReinitialize
     >
       {props => (
      <form className="view-form" onSubmit={props.handleSubmit}>
          
        <div className='mb-2'>
          <label>Email:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.email || ''}
             name="email"
           />
        </div>

        <div className='mb-2'>
           <label>Name:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.name || ''}
             name="name"
           />
        </div>

        <div className='mb-2'>
           <label>UserName:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.username || ''}
             name="username"
           />
        </div>
        
        <div className='mb-2'>
           <label>Image url:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.imageurl || ''}
             name="imageurl"
           />
        </div>

        <div className='mb-2'>
           <label>Street:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.street || ''}
             name="street"
           />
        </div>

        <div className='mb-2'>
           <label>Suite:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.suite || ''}
             name="suite"
           />
        </div>

        <div className='mb-2'>
           <label>City:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.city || ''}
             name="city"
           />
        </div>

        <div className='mb-2'>
           <label>Zipcode:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.zipcode || ''}
             name="zipcode"
           />
        </div>

        <div className='mb-2'>
           <label>lat</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.lat || ''}
             name="lat"
           />
        </div>

        <div className='mb-2'>
           <label>lng</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.lng || ''}
             name="lng"
           />
        </div>

        <div className='mb-2'>
           <label>Phone:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.phone || ''}
             name="phone"
           />
        </div>

        <div className='mb-2'>
           <label>Website:</label>
           <input
            className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.website || ''}
             name="website"
           />
        </div>

        <div className='mb-2'>
           <label>companyName:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.companyName || ''}
             name="companyName"
           />
        </div>

        <div className='mb-2'>
           <label>CatchPhrase:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.catchPhrase || ''}
             name="catchPhrase"
           />
        </div>

        <div className='mb-2'>
           <label>Bs:</label>
           <input
             className='col-12'
             type="text"
             onChange={props.handleChange}
             onBlur={props.handleBlur}
             value={props.values.bs || ''}
             name="bs"
           />
        </div>
           
           <button className='mt-2 submit' type="submit">Submit</button>
         </form>
       )}
     </Formik>
   </div>
        
    </div>
    </>
}

export default SampleForm
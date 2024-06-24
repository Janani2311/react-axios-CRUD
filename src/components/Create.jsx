import React from 'react'
import { Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'



function SampleForm() {
    let navigate = useNavigate();
    const items = [];

    const SignUpSchema = Yup.object().shape({
        email:Yup.string().email("Enter a Valid Email Id").required("Required"),
    })

    const formik = useFormik({
        initialValues:{
            imageurl:"",
            email:"",
            username:"",
            name:"",
            street:"",
            suite:"",
            city:"",
            zipcode:"",
            lat:"",
            lng:"",
            phone:"",
            website:"",
            companyName:"",
            catchPhrase:"",
            bs:""

        },
        validationSchema:SignUpSchema,
        onSubmit:values=>{
            postData(values);
        }
    })

    // using axios API to send a post request 
    let postData = async(data)=>{
    try{
        let response = await axios.post("https://666c3e7149dbc5d7145d49d1.mockapi.io/crud",
            {
                "status":true,
                "imageurl": data.imageurl,
                "name": data.name,
                "username": data.username,
                "email": data.email,
                "address": {
                  "street": data.street,
                  "suite": data.suite,
                  "city": data.city,
                  "zipcode": data.zipcode,
                  "geo": {
                    "lat": data.lat,
                    "lng": data.lng
                  }
                },
                "phone": data.phone,
                "website": data.website,
                "company": {
                  "name": data.companyName,
                  "catchPhrase": data.catchPhrase,
                  "bs": data.bs
                }
            })
        if(response.status===201)
        {
          toast.success("profiles saved Successfully!!")
          navigate('/')
        
        }
      } 
      catch(error){
         toast.error(error.response.message || "Internal Server Error")
      }
    }

    for (let key in formik.initialValues){
        if(key !== "email")
        items.push(key)
    }

  return <>
    <div className='form-wrapper'>
       <h2 className='mb-4 add'>Add Your Profile</h2>
        {/* built create page form using Formik to handle the form values */}
       <Form onSubmit={formik.handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label className='label'>Email address: </Form.Label>
        <Form.Control 
        className='input'
        type="email" 
        placeholder="Enter email" 
        name="email"
        id="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value = {formik.values.email}
        />
        {formik.errors.email && formik.touched.email ? <div style={{color:"red"}}>{formik.errors.email}</div>:<></>}
      </Form.Group>
        {
            items.map((e,i)=>{
                return <>
                        <Form.Group className="mb-3" key={i}>
                            <Form.Label className='label'>Enter {e}:</Form.Label>
                            <Form.Control type="text" placeholder={e}
                            className='input'
                            name={e}
                            id={e}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value = {formik.values.e}/>
                        </Form.Group>
                
                </>
            })
        }   
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
}

export default SampleForm
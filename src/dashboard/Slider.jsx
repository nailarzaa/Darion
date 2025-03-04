import React, { useContext, useRef } from 'react'
import { ApiContext } from '../context/ApiContext'
import axios from 'axios';

const SliderPage = () => {

    const titleAzRef=useRef();
    const titleEnRef=useRef();
    const descAzRef=useRef();
    const descEnRef= useRef();
    

    const [endPoint,header]= useContext(ApiContext);
    const sendData =()=>{
        axios.post(`${endPoint}/api/slider`,{
            title:'salam',
            description:'xixixixi'

        })

    }
    return (
        <form>
           <div className="container p-5">
           <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Title En</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Title Az</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Description En</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Description AZ</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                <input type="file" className="form-control" id="exampleInputPassword1" />
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
           </div>
        </form>

    )
}

export default SliderPage
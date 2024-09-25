import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';
import Service from '../Service';

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("https://cdn-icons-png.flaticon.com/512/8847/8847419.png");
  const [title, setTitle] = useState("");
  const [group, setGroup] = useState("");
 
  const {id} = useParams()

  
  useEffect(()=>{
    const fetchContact = async ()=>{
      const result =  await  Service.searchContactByID(id);
      setName(result.name)
      setEmail(result.email)
      setGroup(result.group)
      setTitle(result.title)
      setPhotoUrl(result.photoUrl)
      setMobile(result.mobile)
      
    }
    fetchContact()
  },[id])

  const updateContact =(e)=>{
    e.preventDefault()
    Service.editContact(id, name, email, mobile, photoUrl, title, group)
    .then(() => {
        alert("Contact updated successfully!");
        // Optionally redirect or reset form here
    })
    .catch((error) => {
        console.error("Error updating contact:", error);
        alert("Something went wrong while updating the contact.");
    });
  }
 
    //console.log(name,email,title,group,mobile,photoUrl)


  


  return (
    <div className="" style={{ height:"100vh",backgroundColor:"#001100" }}>
        <Navbar/>
      <div className="container">
        <h3 className="text-light mt-3">
          Edit Contact
        </h3>
        <p  className="text-light" style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus
          odio eius ducimus animi officia libero laboriosam ipsam vel et, est
          quod numquam. Fugit quidem fugiat animi ex ipsa, tempora excepturi
          neque numquam quos, officiis ullam optio et vitae voluptas. Culpa
          ullam aperiam similique temporibus beatae dicta voluptas inventore id
        </p>
        <div className="d-flex align-content-center justify-content-evenly">
        <form onSubmit={updateContact} className="w-75">
          <input type="text" className="form-control w-50 mt-3 "  onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Name"/>
          <input type="text" className="form-control w-50 mt-3 "  onChange={(e)=>{setPhotoUrl(e.target.value)}} value={photoUrl} placeholder="Photo Url"/>
          <input type="text" className="form-control w-50 mt-3 "  onChange={(e)=>{setMobile(e.target.value)}} value={mobile} placeholder="Mobile"/>
          <input type="text" className="form-control w-50 mt-3 "  onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email"/>
          <input type="text" className="form-control w-50 mt-3 "  onChange={(e)=>{setTitle(e.target.value)}} value={title} placeholder="Title"/>
          <input type="text" className="form-control w-50 mt-3 "  onChange={(e)=>{setGroup(e.target.value)}} value={group} placeholder="Select Group"/>
          
            <button type="submit"  className="btn btn-success my-3 "  value="create"><span className="fa fa-process" ></span>Update</button>
            <button type="reset"  className="btn btn-dark my-3 ms-2 " value="clear">clear</button> 
            <Link to={"/"} className='btn btn-warning ms-2' > <i className='fa fa-arrow-alt-circle-left' ></i> Back</Link>
          </form>

          <img className='w-25 me-5'
            src={photoUrl}
            style={{ width: "300px", height: "300px" }}
            alt=""
          />
        </div>

         
      </div>
    </div>
  )
}

export default EditContact

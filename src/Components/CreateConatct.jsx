import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Service from "../Service";

const CreateContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("https://cdn-icons-png.flaticon.com/512/8847/8847419.png");
  const [title, setTitle] = useState("");
  const [group, setGroup] = useState("");

  const handlesumbit = (e) => {
    e.preventDefault();
    let promise = new Promise(Service.addContact(name, email, mobile, photoUrl, title, group));
    console.log(name, email, mobile, photoUrl, title, group);
    promise.then(()=>{alert("Form Submitted!");})
    promise.catch(()=>{alert("something went wrong")})
    
  };

 



  return (
    <div className="" style={{ minHeight: "100vh", backgroundColor: "#001100" }}>
            <Navbar/>
      <div className="container">
        <h3 className="text-light mt-3">Create Contact</h3>
        <p className="text-light" style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus
          odio eius ducimus animi officia libero laboriosam ipsam vel et, est
          quod numquam. Fugit quidem fugiat animi ex ipsa, tempora excepturi
          neque numquam quos, officiis ullam optio et vitae voluptas. Culpa
          ullam aperiam similique temporibus beatae dicta voluptas inventore id
        </p>
        <div className="d-flex align-content-between">
          <form action="" className="w-100">
            <input
              type="text"
              className="form-control w-50 mt-3 "
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="url"
              className="form-control w-50 mt-3 "
              placeholder="Photo Url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
            <input
              type="text"
              className="form-control w-50 mt-3 "
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              className="form-control w-50 mt-3 "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="form-control w-50 mt-3 "
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="form-control w-50 mt-3 "
              placeholder="Select Group"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            />

            <button
              type="submit"
              className="btn btn-success my-3"
              onClick={handlesumbit}
            >
              <span className="fa fa-process"></span> Create
            </button>
            <button
              type="reset"
              className="btn btn-dark my-3 ms-2"
              value="clear"
            >
              Clear
            </button>
            <Link to={"/"} className="btn btn-warning ms-2">
              <i className="fa fa-arrow-alt-circle-left"></i> Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;

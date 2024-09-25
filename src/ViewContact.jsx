import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Service from "./Service";

const ViewContact = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);


  useEffect(()=>{
      const fetchContact = async ()=>{
        const result =  await Service.searchContactByID(id);
        setData(result)
        
      }
      fetchContact()
  },[id])

  
  return (
    <div className="" style={{ minHeight: "110vh", backgroundColor: "#001100" }}>
         <Navbar/>
      <div className="container">
        <h3 className="text-light mt-3">View Contact</h3>
        <p className="text-light" style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus
          odio eius ducimus animi officia libero laboriosam ipsam vel et, est
          quod numquam. Fugit quidem fugiat animi ex ipsa, tempora excepturi
          neque numquam quos, officiis ullam optio et vitae voluptas. Culpa
          ullam aperiam similique temporibus beatae dicta voluptas inventore id
        </p>
        {
          
          <div className="w-100 d-flex flex-column align-items-center justify-content-center">
            <img
              className=" me-5"
              src={data.photoUrl}
              style={{ width: "150px", height: "150px" }}
              alt=""
            />

            <table className="table mt-5 w-50 text-center">
              <tbody>
                <tr>
                  <td className="fw-bold">Name</td>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Email</td>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Contact</td>
                  <td>{data.mobile}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Group</td>
                  <td>{data.group}</td>
                </tr>
                <tr>
                  <td className="fw-bold">Title</td>
                  <td>{data.title}</td>
                </tr>
                {/* <tr>
                  <td className="fw-bold">Group</td>
                  <td>Family</td>
                </tr> */}
              </tbody>
            </table>
            <Link to={"/"} className="btn btn-warning">
              
              <i className="fa fa-arrow-alt-circle-left"></i> Back
            </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default ViewContact;

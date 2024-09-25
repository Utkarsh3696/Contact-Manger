import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Service from '../Service';

const Homepage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch contacts when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contacts = await Service.fetchContacts();
        setData(contacts);
        setFilteredData(contacts); // Initialize filtered data
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };
    
    fetchContacts();
  }, []);

  // Filter contacts based on search input
  useEffect(() => {
    if (search === "") {
      setFilteredData(data); // Reset to original data if search is empty
    } else {
      const filtered = data.filter((cv) => 
        cv.name.toLowerCase().includes(search.toLowerCase()) || 
        cv.mobile.includes(search)
      );
      setFilteredData(filtered); // Update the filtered data
    }
  }, [data, search]); // Runs whenever `data` or `search` changes

  const deleteClick = (id) => {
    console.log(id);
    const confirmDelete = confirm("Do you want to delete the contact?"); // eslint-disable-line no-restricted-globals

    if (confirmDelete) {
      Service.deleteContact(id)
        .then(() => {
          alert("Delete Successfully");
          // Optionally, you can re-fetch or filter data here to refresh the list
          setData(prevData => prevData.filter(contact => contact.id !== id));
          setFilteredData(prevFilteredData => prevFilteredData.filter(contact => contact.id !== id));
        })
        .catch(() => {
          alert("Something went wrong");
        });
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#001100" }}>
      <Navbar />
      <div className="container">
        <h3 className="text-light mt-3">
          Contact Manager
          <Link to={"/create"} className="btn btn-primary ms-3">
            <i className="fa fa-add"></i> Add
          </Link>
        </h3>
        <p className="text-light" style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint natus
          odio eius ducimus animi officia libero laboriosam ipsam vel et, est
          quod numquam. Fugit quidem fugiat animi ex ipsa, tempora excepturi
          neque numquam quos, officiis ullam optio et vitae voluptas. Culpa
          ullam aperiam similique temporibus beatae dicta voluptas inventore id.
        </p>

        <div className="d-flex align-items-center justify-content-center my-3">
          <input
            type="text"
            placeholder="Search Name or Mobile Number"
            className="form-control w-25 "
            id="searchinput"
            value={search} // Bind the input value to the search state
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setSearch(document.getElementById("searchinput").value)}
            className="fa fa-search btn btn-md btn-primary ms-2"
          ></button>
        </div>

        <div className="container-fluid w-100">
          <div className="row">
            {filteredData.map((cv, index) => (
              <div
                key={index}
                className="col col-md-6 mx-auto p-2 d-flex justify-content-evenly m-2 bg-light rounded-4 align-items-center"
                style={{ height: "250px", width: "500px" }}
              >
                <img
                  className="border rounded-2"
                  src={cv.photoUrl}
                  height={"100px"}
                  width={"100px"}
                  alt="photo"
                />
                <table className="table table-sm w-50 table-bordered m-1">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{cv.name}</td>
                    </tr>
                    <tr>
                      <td>Contact</td>
                      <td>{cv.mobile}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{cv.email}</td>
                    </tr>
                  </tbody>
                </table>

                <div
                  className="d-flex flex-column align-items-center"
                  style={{ gap: "0.8rem" }}
                >
                  <Link to={`/view/${cv.id}`} className="btn btn-sm btn-primary">
                    <span className="fa fa-eye"></span>
                  </Link>
                  <Link to={`/edit/${cv.id}`} className="btn btn-sm btn-warning">
                    <span className="fa fa-pencil"></span>
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteClick(cv.id)}
                  >
                    <span className="fa fa-trash"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

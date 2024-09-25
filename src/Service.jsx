import axios from "axios";

class Service {
    static BASE_URL = "http://localhost:3000/contacts";
    

    static async fetchContacts() {
        try {
          const response = await axios.get(this.BASE_URL);
          return response.data;
        } catch (err) {
          console.error("Error fetching contacts:", err.response ? err.response.data : err.message);
          throw err; // rethrow the error to handle it in the component
        }
      }

    static addContact(name, email, mobile, photoUrl, title, group)
    {
      return axios.post(this.BASE_URL,{name,email,mobile,photoUrl,title,group})
    }
    static editContact(id, name, email, mobile, photoUrl, title, group)
    {
      return axios.put(`${this.BASE_URL}/${id}`,{name,email,mobile,photoUrl,title,group})
    }

    static async searchContactByID(id)
    {
      
        return await axios.get(`${this.BASE_URL}/${id}`).then((res)=>{ return res.data});
      
    }
    static deleteContact(id)
    {
      return axios.delete(`${this.BASE_URL}/${id}`)
    }
  }
  export default Service;
  
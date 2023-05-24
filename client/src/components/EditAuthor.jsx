import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const EditAuthor = () => {
    const [errors, setErrors] = useState([]);
    const [author, setAuthor] = useState({name:''});
    const navigate = useNavigate();
    const { id } = useParams(); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
             .then(res=>{
                navigate("/");
            })
            .catch(err => {
              console.log(err.response);  // Add this line
              if(err.response && err.response.data.message) {
                setErrors([err.response.data.message]);
              }
            });
    }

    const handleInputChange = (e) => {
        setAuthor({...author,[e.target.name]: e.target.value })
    }

    return (
        <div className="container ">
            <h2>Edit Author:</h2>
            {errors && errors.map((err, index) => <p key={index}>{err}</p>)}
            <form className= "border border-3 p-3" onSubmit={updateAuthor}>
                <div className="form-group mb-3  ">
                    <label className=" mb-2">Name:</label>
                    <input type="text" className="form-control" onChange={handleInputChange} name="name" value={author.name}/>
                </div>
                <button type="submit" className="btn btn-primary me-2 ">Submit</button>
                <button onClick={() => navigate("/")} className="btn btn-primary">Cancel</button>
            </form>
        </div>
    )
}

export default EditAuthor;

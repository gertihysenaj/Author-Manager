import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {

  const { authors, update, setUpdate } = props;

  const deleteAuthor = (id) => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        console.log(res.data);
        setUpdate(!update);  // to force re-render
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="container">
      <div className="row ">
      <div className="col-6">
      <h2>We have quotes by:</h2>
        <div className=" border border-dark-subtle border-4  ">
          
          <table className="table table-striped  table-bordered  equal-width-columns" >
            <thead>
              <tr>
                <th >Author</th>
                <th>Actions Available</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => (
                <tr key={author._id}>
                  <td>{author.name}</td>
                  <td>
                    <Link className="btn btn-primary me-2" to={`/edit/${author._id}`}>Edit</Link>
                    <button className="btn btn-danger" onClick={() => deleteAuthor(author._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AuthorList;

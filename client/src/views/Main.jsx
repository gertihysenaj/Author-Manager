import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';
import CreateAuthor from '../components/CreateAuthor';
import EditAuthor from '../components/EditAuthor';

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res => setAuthors(res.data))
      .catch(err => console.error(err));
  }, [update]);

  return (
    <div>
      <AuthorList authors={authors} update={update} setUpdate={setUpdate} />
    </div>
  );
};

export default Main;

import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const title =  'All blog:';
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    //useEffect
    useEffect(() => {
      fetch(' http://localhost:8000/blogs')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setBlogs(data);
      })
    }, []);
    return (
        <div className="home">
          {blogs && <BlogList blogs = { blogs } title = { title } />}
        </div>
    );
  }
 
export default Home;
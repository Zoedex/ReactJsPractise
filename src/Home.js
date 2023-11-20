import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const title =  'All blogs:';
    const [blogs, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);
    

    //useEffect
    useEffect(() => {
      fetch(' http://localhost:8000/blogs')
      .then(response => {
        if(!response.ok){
          throw Error('Could not fetch data from the resource!')
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data);
        setPending(false);
      })
      .catch(err => {
        setError(err.message);
        setPending(false);
      })
    }, []);
    return (
        <div className="home">
          { error && <div>{ error }</div>  }
          { isPending && <div>Loading...</div> }
          {blogs && <BlogList blogs = { blogs } title = { title } />}
        </div>
    );
  }
 
export default Home;
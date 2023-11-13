import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const title =  'All blog:';
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    const [name, setName] = useState('mario');

    const changeName = () => {
      name === 'mario' ? setName('luigi') : setName('mario');
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogs);
    }

    //useEffect
    useEffect(() => {
      console.log('used effect')
    }, [name]);
    return (
        <div className="home">
          <BlogList blogs = { blogs } title = { title } handleDelete = { handleDelete } />
          <p>{ name }</p>
          <button onClick={ () => changeName() }>change name</button>
        </div>
    );
  }
 
export default Home;
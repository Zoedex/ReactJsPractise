import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setPending] = useState(false);
    const history =  useHistory();
    
    const handleCreate = (e) => {
        e.preventDefault();

        setPending(true)
        const newBlog =  { title, body, author};
        
        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newBlog)
            }).then( Response => {
                setPending(false);
                history.push('/');
                if (Response.ok){
                    return (Response.json());
                }
                throw new Error('Fail to create a new blog.');
            }).then( blog => {

                console.log(blog);
            }).catch( err => {
                setPending(false);
                console.log(err)
            });
        }, 500);
    }

    return ( 
        <div className="create">
            <h2>Create a new Blog</h2>
            <form onSubmit={ handleCreate }>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />
                <label>body:</label>
                <textarea
                    required
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                ></textarea>
                <label>Blog author:</label>
                <select 
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value) }
                >
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Create</button> }
                {  isPending && <button style={ {opacity: 0.5} } disabled>Creating</button>}
            </form>

            
        </div>
     );
}
 
export default Create;
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";


const Detail = () => {
    const { id } =  useParams()
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const [delIsPending, setDelPending] = useState(false);
    const histroy = useHistory();
    

    const handleDelte = () => {
        setDelPending(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs/' + id, {
                method: 'DELETE'
            })
            .then(reponse => {
                setDelPending(false);
                histroy.push('/')
                if (Response.ok) {
                    return reponse.json();
                }
                throw new Error('Could not delete the blog.')
            })
            .then(deletedBlog => {
                console.log(deletedBlog);
            })
            .catch( err => {
                console.log(err);
                setDelPending(false);
            });
        }, 500);
    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author } </p>
                    <div>{ blog.body }</div>
                    { !delIsPending && <button onClick={ handleDelte }>Delete</button> }
                    { delIsPending && <button disabled>Deleting...</button> }
                </article>
            ) }
            
        </div>
     );
}
 
export default Detail;
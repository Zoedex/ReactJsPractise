import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Not found 404.</h2>
            <Link to="/">Back to Homepage.</Link>
        </div>
     );
}
 
export default NotFound;
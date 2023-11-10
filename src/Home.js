import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Zela');

    const handlechangeName = () => {
        name === 'Zela' ? setName('Lay') : setName('Zela');
    }
    return ( 
        <div className="home">
            <h2>Home</h2>
            <p>{name}</p>
            <button onClick={() => { handlechangeName() }}>Change name</button>
        </div>
     );
}
 
export default Home;
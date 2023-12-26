import React,{useState,useEffect} from "react";
const Home =() =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://172.29.185.56:8000/')  // URL of your Django server
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setError(error);
            });
    }, []);

    return (
        <div>
            <p>Following is the data:</p>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>} {/* Render your data here */}
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
        </div>
    );
};
export default Home
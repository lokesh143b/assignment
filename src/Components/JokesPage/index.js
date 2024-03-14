import "./index.css"
import 'bootstrap/dist/css/bootstrap.css'; 

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const JokesPage = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
        .then(response => response.json())
        .then(json => setData(json.jokes))
        .catch(error => {
            console.error(error);
            navigate("/not-found", { replace: true });
        });
          },[navigate]);

    return (
        <div className="jokes-container d-flex flex-column justify-content-center align-items-center">
            <h1 className="jokes-heading text-primary">Jokes</h1>
            {data && data.map((each) => (
                <div className="each-joke-container w-75" key={each.id}>
                    <p className="text-primary">{each.joke}</p>
                    {console.log(each.joke)}
                </div>
            ))}

            {!data && "loading...."}
        </div>
    );
}

export default JokesPage
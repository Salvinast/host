import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function FeaturedCountries(props) {

    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((res) => {
                console.log(res);
                setCountriesData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    

    return (
        
        <div>
            <div className='item-container'>
                {countriesData.map((countries) => (

                    <div className='card'>
                        <img className='countries-image' src={countries.flags.png} alt='' />
                        <h1 className='countries-name'>{countries.name.common}</h1>
                        <span className='countries-details'><b>Population:</b> {countries.population}</span> <br></br>
                        <span className='countries-details'><b>Region:</b> {countries.region}</span> <br></br>
                        <span className='countries-details'><b>Capital:</b> {countries.capital}</span> <br></br>
                        <Link className='countries-button' to={`/card/${countries.name.common}`}>Show me more</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedCountries from '../Hooks/useFetch';
import image from '../images/arrow.png'
import { Link } from 'react-router-dom';
// import Tool from './Test';





export default function Card({ }) {
    const { name } = useParams()

    const [countriesData, setCountriesData] = useState([]);

    const [isLoading, setLoading] = useState(true);



    useEffect(() => {

        axios
            .get('https://restcountries.com/v3.1/name/' + name)
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
        
        <Link onClick={() => {window.location.href="/"}}> <img className='image-arrow' src={image}/> </Link>
        
            {countriesData.map((countries) => (
                <div className='card-container'>
                <img className='card-image' src={countries.flags.png} alt='' /> <br></br>
                <div className='card-info'>
                <span>Native Name: {countries.name.common}</span> <br></br>
                <span>Population: {countries.population}</span> <br></br>
                <span>Region: {countries.region}</span> <br></br>
                <span>Sub Region: {countries.subregion}</span> <br></br>
                <span>Capital: {countries.capital}</span> <br></br>
                <span>Top Level Domain: {countries.tld}</span> <br></br>
                </div>
                <span>Currencies: {countries.currencies.php}</span> <br></br>
                <span>Languages: {countries.languages[0]}</span> <br></br>
                </div>
                
            ))}

        </div>
    )
}
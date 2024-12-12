'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ApiConfig } from '../../API/ApiConfig';

const SearchBarCitb = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchResults = async (searchQuery) => {
            if (searchQuery.length > 0) {
                try {
                    const response = await axios.get(`${ApiConfig.searchApi}${searchQuery}`);
                    setResults(response.data.data);
                    console.log(response);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setResults([]);
                }
            } else {
                setResults([]);
            }
        };

        const delayDebounceFn = setTimeout(() => {
            if (query) {
                const newQuery = query.charAt(0).toLocaleUpperCase() + query.slice(1);
                fetchResults(newQuery);
            }
        }, 800);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
        setSelectedItem(null);
    };

    const handleSelect = (item) => {
        console.log(item)
        setSelectedItem(item);
        setQuery('');
        setResults([]);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const newQuery = query.charAt(0).toLocaleUpperCase() + query.slice(1);
        if (query.length > 0) {
            try {
                const response = await axios.get(`${ApiConfig.searchApi}${newQuery}`);
                setSelectedItem(response.data.data);
                setResults([]);
                console.log(response);
            } catch (error) {
                console.error('Error fetching data:', error);
                setResults([]);
            }
        }
    };

    return (
        <div className="max-w-screen-2xl mx-auto mt-24 px-5">
            <form onSubmit={handleFormSubmit} className='max-w-screen-md mx-auto relative'>
                <div className='flex items-center bg-white py-[10px] px-4 rounded-lg shadow-md'>
                    <input
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search..."
                        className="w-full focus:outline-none"
                    />
                    <button
                        type="submit"
                        className='bg-[#68C5CC] font-roboto text-white text-[20px] py-2 px-8 rounded-md font-black'
                    >
                        Search
                    </button>
                </div>
                {results.length > 0 && (
                    <div className="top-0 left-0 bg-white border border-gray-300 rounded-md mt-2 z-10">
                        {results.map((result, index) => (
                            <div
                                key={index}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(result)}
                            >
                                {result.city}
                            </div>
                        ))}
                    </div>
                )}
            </form>

            <div className='max-w-screen-xl mx-auto'>
                {selectedItem && (
                    <>
                        {Array.isArray(selectedItem) ? (
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                                {selectedItem.map((item, i) => (
                                    <div key={i} className='border flex flex-col items-start gap-2 font-rubik text-xl rounded-xl bg-white shadow-md py-8 px-11'>
                                        <p>{item.Name}</p>
                                        <p>{item.addressLine1}</p>
                                        <p>{item.city}</p>
                                        <p>{item.postcode}</p>
                                        <Link href="/registerform" className='bg-btnColor font-poppins font-medium text-lg rounded-[20px] text-white px-4 py-2'>Book Your Test in Aberdeen</Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                                <div className='border flex flex-col font-rubik text-xl items-start gap-5 rounded-xl bg-white shadow-md py-8 px-11'>
                                    <p><strong>Name:</strong> {selectedItem.Name}</p>
                                    <p><strong>Address:</strong> {selectedItem.addressLine1}</p>
                                    <p><strong>City:</strong> {selectedItem.city}</p>
                                    <p><strong>Postcode:</strong> {selectedItem.postcode}</p>
                                    <Link href="/registerform" className='bg-btnColor font-poppins font-medium text-lg inline text-white rounded-[20px] px-5 py-3'>Book Your Test in {selectedItem.Name}</Link>
                                </div>
                            </div>
                        )}

                     
                        <div className="flex justify-center mt-8">
                            <Link href='/testcenter' className="text-lg text-white bg-btnColor font-poppins font-medium hover:underline px-5 py-3 rounded-full">
                            View All Test Centers
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchBarCitb;

'use client';

import Link from 'next/link';
import React, { useState, useEffect, useCallback } from 'react';
import { ApiConfig } from '../API/ApiConfig';

export default function TestCenter({ initialCentres }) {
  const [query, setQuery] = useState('');
  const [filteredCentres, setFilteredCentres] = useState(initialCentres);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false); // State to control displaying results

  // Debounce function to limit API calls
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearchClick = useCallback(
    debounce(async () => {
      if (!query) {
        setFilteredCentres(initialCentres);
        setLoading(false);
        return;
      }

      setIsSearching(true);
      setLoading(true);

      try {
        const res = await fetch(`${ApiConfig.searchApi}${query}`);
        const searchData = await res.json();

        setFilteredCentres(searchData.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setIsSearching(false);
        setLoading(false);
        setShowResults(true); // Show results after fetching
      }
    }, 300), // Debounce delay of 300ms
    [query, initialCentres]
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Optional: Reset results when query changes
  useEffect(() => {
    if (!query) {
      setShowResults(false); // Hide results if query is empty
    }
  }, [query]);

  const renderCentres = (centres) => {
    if (Array.isArray(centres)) {
      return centres.map((centre) => (
        <div key={centre.id} className="bg-white shadow-md overflow-hidden rounded-lg rounded-br-2xl relative rounded-bl-2xl pt-5">
          <h2 className="text-lg font-semibold mb-2">{centre.Name}</h2>
          <p className='font-rubik text-xl'>{centre.addressLine1}</p>
          <p className='font-rubik text-xl'>{centre.city}</p>
          <p>{centre.postcode}</p>
          <p className='font-rubik text-xl'>{centre.country}</p>
          <a href="#" className="text-linkColor font-rubik block rounded-br-2xl font-normal text-lg mt-4 ">
            Know More
          </a>
          <Link href='registerform' className="bg-blue-500 text-link py-8 inline-block text-center text-white text-xl font-poppins font-medium px-4 mt-4 rounded-md w-full rounded-br-2xl">
            Book Your Test in {centre.city}
          </Link>
          <span className='absolute h-24 bg-btnColor -top-5 w-24  -right-10 rounded-full'></span>
        </div>
      ));
    } else if (typeof centres === 'object' && centres !== null) {
      return (
        <div key={centres.id} className="bg-white shadow-md rounded-lg p-6 rounded-br-2xl rounded-bl-2xl relative overflow-hidden">
          <h2 className="text-lg font-semibold mb-2">{centres.Name}</h2>
          <p className='font-rubik text-xl'>{centres.addressLine1}</p>
          <p className='font-rubik text-xl'>{centres.city}</p>
          <p className='font-rubik text-xl'>{centres.postcode}</p>
          <p className='font-rubik text-xl'>{centres.country}</p>
          <a href="#" className="ext-linkColor font-rubik block rounded-br-2xl font-normal text-lg mt-4">
            Know More
          </a>
          <button className="g-blue-500 text-link py-8 inline-block text-center text-white text-xl font-poppins font-medium px-4 mt-4 rounded-md w-full rounded-br-2xl">
            Book Your Test in {centres.city}
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <section>
      <div className='max-w-screen-2xl mx-auto px-5 py-10'>
        <div className='flex flex-col items-center'>
          <h1 className="mb-8 text-center font-rubik font-medium text-5xl">Test Centres</h1>
          <a href="/registercard" className='px-8 py-4 font-rubik font-bold text-sm bg-btnColor rounded-full text-white mb-10'>
            Book Your CSCS Card
          </a>
        </div>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="border p-2 rounded-l-md w-1/3"
            placeholder="Search by name or postcode..."
          />
          <button
            onClick={handleSearchClick}
            className="bg-btnColor text-white p-2 rounded-r-md"
          >
            Find
          </button>
        </div>

        
        {loading && <p>Loading...</p>}

   
        {showResults && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCentres(filteredCentres)}
          </div>
        )}
      </div>
    </section>
  );
}

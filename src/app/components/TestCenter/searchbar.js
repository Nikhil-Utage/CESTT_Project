// // components/SearchBar.js
// "use client";

// import { useState } from 'react';

// export default function SearchBar({ onSearch }) {
//   const [searchInput, setSearchInput] = useState('');

//   const handleSearch = (e) => {
//     e.preventDefault();
//     onSearch(searchInput.trim());
//   };

//   return (
//     <form onSubmit={handleSearch} className="flex justify-center mb-8">
//       <input
//         type="text"
//         placeholder="Enter Centre Name or Postcode"
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//         className="border-2 border-gray-300 p-2 rounded-md w-80"
//       />
//       <button type="submit" className="bg-blue-500 text-white py-2 px-4 ml-2 rounded-md">
//         Find
//       </button>
//     </form>
//   );
// }

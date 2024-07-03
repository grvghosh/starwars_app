
// "use client"; // This is a client component 👈🏽
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PeopleList from './PeopleList';

// export default function Home() {

//   const [profile, setProfile] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//         setIsLoading(true);
//         setError(null);

//         try {
//             const response = await axios.get('https://swapi.dev/api/people/');
//             setProfile(response.data.results);
//         } catch (error) {
//             setError(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     fetchData();
// }, []);

//   return (
//     <div style={{ background: 'white' }}>
//       <div style={{ color: 'black' }}>hello Sakshi</div>
//       <h1 style={{ color: 'black' }}>Star Wars profile</h1>
//             {isLoading && <p>Loading...</p>}
//             {error && <p>Error: {error.message}</p>}
//             {profile.length > 0 && <PeopleList profile={profile} />}
//     </div>

//   );
// }
//-------------------------------------------------------------------------------------------------

// "use client"; // Optional in this case

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PeopleList from './PeopleList';
// import { Box, Heading, Text, Flex, Card, CardBody } from '@chakra-ui/react';




// const PAGE_SIZE = 10; // Adjust as desired

// export default function Home() {
//   const [people, setPeople] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(Math.ceil(82 / PAGE_SIZE)); // Initial total pages based on `count`
//   const [favorites, setFavorites] = useState([]); // State for favorite characters

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
//         const peopleWithFavorites = response.data.results.map((person) => ({
//           ...person,
//           isFavorite: favorites.includes(person.name), // Check if already favorited
//         }));
//         setPeople(peopleWithFavorites);
//         setTotalPages(Math.ceil(response.data.count / PAGE_SIZE));




//         // setPeople(response.data.results.map((person) => ({ name: person.name, height: person.height }))); // Extract only name and height
//         // setTotalPages(Math.ceil(response.data.count / PAGE_SIZE)); // Update total pages based on actual API response
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     const loadFavorites = () => {
//       const storedFavorites = localStorage.getItem('favorites');
//       if (storedFavorites) {
//         setFavorites(JSON.parse(storedFavorites));
//       }
//     };
//     loadFavorites();

//     fetchData();
//   }, [currentPage, favorites]);

//   const toggleFavorite = (personName) => {
//     const newFavorites = favorites.includes(personName)
//       ? favorites.filter((name) => name !== personName)
//       : [...favorites, personName];
//     setFavorites(newFavorites);
//     localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Update local storage
//   };

//   const handleNextPage = async () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = async () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <Box bg="#f5f5f5"> {/* Set background color inline */}
//       <div style={{ color: 'black' }}>hello Sakshi</div>
//       <Heading as="h1" mb={4}>Star Wars People</Heading>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {people.length > 0 && <PeopleList people={people} onToggleFavorite={toggleFavorite} />}

//       {/* Pagination buttons (Adjust styles as needed) */}
//       <Flex justifyContent="space-between">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
//       </Flex>
//     </Box>
//   );

// }



//------------------------------------------------------------------------------------------------------------


// "use client"; // Optional in this case

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import PeopleList from './PeopleList';
// import { Box, Heading, Text, Flex, Card, CardBody } from '@chakra-ui/react';

// const PAGE_SIZE = 10; // Adjust as desired

// export default function Home() {
//   const [people, setPeople] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(Math.ceil(82 / PAGE_SIZE)); // Initial total pages based on `count`
//   const [favorites, setFavorites] = useState([]); // State for favorite characters

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       setError(null);

//       try {
//         const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
//         const peopleWithFavorites = response.data.results.map((person) => ({
//           ...person,
//           isFavorite: favorites.includes(person.name), // Check if already favorited
//         }));
//         setPeople(peopleWithFavorites);
//         setTotalPages(Math.ceil(response.data.count / PAGE_SIZE));
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     const loadFavorites = () => {
//       const storedFavorites = localStorage.getItem('favorites');
//       if (storedFavorites) {
//         setFavorites(JSON.parse(storedFavorites));
//       }
//     };

//     loadFavorites();
//     fetchData();
//   }, [currentPage, favorites]); // Re-fetch with updated favorites

//   const toggleFavorite = (personName) => {
//     const newFavorites = favorites.includes(personName)
//       ? favorites.filter((name) => name !== personName)
//       : [...favorites, personName];
//     setFavorites(newFavorites);
//     localStorage.setItem('favorites', JSON.stringify(newFavorites)); // Update local storage
//   };






//   const handleNextPage = async () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = async () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <Box bg="gray.200" minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center"> {/* Set background color and center content */}
//       <Heading as="h1" mb={4}>Star Wars People</Heading>
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {people.length > 0 && <PeopleList people={people} onToggleFavorite={toggleFavorite} />}

//       <Flex justifyContent="space-between">
//         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous Page</button>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next Page</button>
//       </Flex>
//     </Box>
//   );
// }


//---------------------------------------------------------------------------------------------------------------------------------

"use client"; // Optional in this case

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PeopleList from './PeopleList';
import { Box, Heading, Flex } from '@chakra-ui/react';

const PAGE_SIZE = 10;

export default function Home() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(82 / PAGE_SIZE)); // Initial total pages based on `count`

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
        const peopleData = response.data.results;
        setPeople(peopleData);
        setTotalPages(Math.ceil(response.data.count / PAGE_SIZE));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]); // Re-fetch with updated page

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // bg="white"
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center"
      backgroundImage="url('https://wallpapers.com/images/hd/realistic-red-mountain-gmvgjkxqvquq6jvy.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
    > 
      {/* <Heading as="h1" mb={4}>Star Wars People</Heading> */}
      <Heading as="h1" mb={4}><Box>
      <img style={{ width: '300px', height: '200px' }} src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="logo" />
        </Box></Heading>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {people.length > 0 && <PeopleList people={people} />}
      <Flex justifyContent="space-between">
        <button
          style={{
            backgroundColor: 'green',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.2s ease-in-out',
          }}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>

        <button
          style={{
            backgroundColor: 'green',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '20px',
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'all 0.2s ease-in-out',
          }}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>

      </Flex>
    </Box>
  );
}

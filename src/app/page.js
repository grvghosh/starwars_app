
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

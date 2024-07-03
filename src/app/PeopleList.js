// import React from 'react';

// const PeopleList = ({ profile }) => {
//     return (
//         <div>
//             <div>helooghghhg</div>


//             <ul>
//                 {profile.map((person) => (
//                     <li key={person.name}>
//                         <h2 style={{ background: 'blue' }}>{person.name}</h2>
//                         <h4 style={{ background: 'blue' }}>{person.height}</h4>

//                        <img alt="stack overflow" src={person.url} />
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PeopleList;

// import React from 'react';
// import { Box, Heading, Text, Flex, Card, CardBody, color } from '@chakra-ui/react';
// const PeopleList = ({ people }) => {
//   return (
//     <div>
//     <ul>
//       {people.map((person) => (
//         <li key={person.name}>
//           <h2 style={{ background: 'blue' }}>{person.name}</h2>
//           <p style={{ background: 'blue' }}>Height: {person.height}</p>
//         </li>
//       ))}
//     </ul>
//     </div>
//   );
// };



// import React from 'react';
// import { Box, Heading, Text, Flex, Card, CardBody, color } from '@chakra-ui/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
// import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import heart icon


// const PeopleList = ({ people, onToggleFavorite }) => {
//     return (
//         <Flex flexDirection="column" gap={14}> {/* Adjust gap for spacing */}
//             {people.map((person) => (
//                 <Card key={person.name} maxW="sm" mb={0}>
//                     <CardBody>
//                         <Flex justifyContent="space-between" alignItems="center">
//                             <Heading as="h2" size="md" mb={2} style={{ background: 'black' }}>
//                                 {person.name}
//                             </Heading>
//                             <FontAwesomeIcon
//                                 icon={faHeart} // Use the imported heart icon
//                                 color={person.isFavorite ? 'red' : 'gray'}
//                                 onClick={() => onToggleFavorite(person.name)}
//                             />
//                         </ Flex >
//                         <Text style={{ background: 'black' }}>{`Height: ${person.height}`}</Text>
//                     </CardBody>
//                 </Card>
//             ))}
//         </Flex>
//     );
// };


// export default PeopleList;

//---------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { Box, Heading, Text, Flex, Card, CardBody, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
// import { Modal, ModalContent, Button } from 'react-bootstrap'; // Import components

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
// import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import heart icon

// const PeopleList = ({ people, onToggleFavorite }) => {
//     const [showModal, setShowModal] = useState(false); // State for modal visibility
//     const [selectedPerson, setSelectedPerson] = useState(null); // State for selected person
//     const handleOpenModal = (person) => {
//         setSelectedPerson(person);
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//         setSelectedPerson(null);
//     };

//     const fetchHomeworldName = async (url) => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             return data.name;
//         } catch (error) {
//             console.error('Error fetching homeworld name:', error);
//             return 'Unknown'; // Handle errors gracefully
//         }
//     };

//     const fetchFilmTitles = async (urls) => {
//         const promises = urls.map(async (url) => {
//             try {
//                 const response = await fetch(url);
//                 const data = await response.json();
//                 return data.title;
//             } catch (error) {
//                 console.error('Error fetching film title:', error);
//                 return 'Unknown'; // Handle errors gracefully
//             }
//         });

//         const titles = await Promise.all(promises);
//         return titles.join(', '); // Join titles into a comma-separated string
//     };

//     return (
//         <Flex flexDirection="column" gap={4}>
//             {people.map((person) => (
//                 <Card key={person.name} maxW="md" mb={4} style={{
//                     backgroundColor: 'grey',
//                     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', /* Simple shadow effect */
//                     borderRadius: '8px',
//                     height: '450px', /* Adjust height as desired */
//                     padding: '20px', /* Add some padding for content spacing */
//                 }}>
//                     <CardBody>
//                         {/* <Flex justifyContent="space-between" alignItems="center"> */}
//                         <Box style={{}}> {/* Placeholder image box */}
//                             <img style={{ width: '300px', height: '200px' }} src="https://picsum.photos/seed/picsum/200/300" alt="Person's image" />
//                         </Box>
//                         {/* </Flex> */}
//                         <br />
//                         <Text>
//                             <Heading as="h2" size="md" mb={2}>
//                                 {person.name}
//                             </Heading>
//                         </Text>
//                         <Text>{`Height: ${person.height}`}</Text>
//                         <Text>{`mass: ${person.mass}`}</Text>
//                         <Text>{`hair_color: ${person.hair_color}`}</Text>
//                         <Text>{`skin_color: ${person.skin_color}`}</Text>
//                         <Text>{`eye_color: ${person.eye_color}`}</Text>
//                         <Text>{`gender: ${person.gender}`}</Text>
//                         <Text>{`created: ${person.created}`}</Text>
//                         <Text>{`edited: ${person.edited}`}</Text>
//                         <Button onClick={() => handleOpenModal(person)}>Details</Button>

//                     </CardBody>
//                 </Card>
//             ))}


//             {/* Modal component */}
//             {showModal && selectedPerson && (


//                     <Modal isOpen={showModal} onClose={handleCloseModal} >
//                         <ModalContent>
//                             {console.log("yo")}
//                             <Heading as="h2" size="md" mb={2}>
//                                 {selectedPerson.name}
//                             </Heading>
//                             <Text>{`Height: ${selectedPerson.height}`}</Text>
//                             <Text>{`Mass: ${selectedPerson.mass}`}</Text>
//                             <Text>{`Hair Color: ${selectedPerson.hair_color}`}</Text>
//                             <Text>{`Skin Color: ${selectedPerson.skin_color}`}</Text>
//                             <Text>{`Eye Color: ${selectedPerson.eye_color}`}</Text>
//                             <Text>{`Gender: ${selectedPerson.gender}`}</Text>
//                             <Text>{`Birth Year: ${selectedPerson.birth_year}`}</Text>
//                             <Text>{`Created: ${selectedPerson.created}`}</Text>
//                             <Text>{`Edited: ${selectedPerson.edited}`}</Text>

//                             {/* Homeworld */}
//                             <Text>Homeworld:</Text>
//                             {selectedPerson.homeworld && (
//                                 <Text>
//                                     {fetchHomeworldName(selectedPerson.homeworld)}
//                                 </Text>
//                             )}

//                             {/* Films */}

//                             <Text>Films:</Text>
//                             {selectedPerson.films && (
//                                 <ul>
//                                     {fetchFilmTitles(selectedPerson.films).then((titles) => (
//                                         <li key={titles}>{titles}</li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </ModalContent>
//                     </Modal>
//             )}

//         </Flex>
//     );
// };


import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, Card, CardBody, Button } from '@chakra-ui/react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

const PeopleList = ({ people }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [homeworld, setHomeworld] = useState('');
    const [films, setFilms] = useState([]);

    // added to check
    const [favorites, setFavorites] = useState([]);
    const [dislikes, setDislikes] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
        const savedDislikes = JSON.parse(localStorage.getItem('dislikes')) || [];
        setDislikes(savedDislikes);
    }, []);
    // added to chekc


    useEffect(() => {
        if (selectedPerson) {
            fetchHomeworldName(selectedPerson.homeworld);
            fetchFilmTitles(selectedPerson.films);
        }
    }, [selectedPerson]);

    const handleOpenModal = (person) => {
        setSelectedPerson(person);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPerson(null);
        setHomeworld('');
        setFilms([]);
    };

    const fetchHomeworldName = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setHomeworld(data.name);
        } catch (error) {
            console.error('Error fetching homeworld name:', error);
            setHomeworld('Unknown');
        }
    };

    const fetchFilmTitles = async (urls) => {
        try {
            const titles = await Promise.all(
                urls.map(async (url) => {
                    const response = await fetch(url);
                    const data = await response.json();
                    return data.title;
                })
            );
            setFilms(titles);
        } catch (error) {
            console.error('Error fetching film titles:', error);
            setFilms(['Unknown']);
        }
    };

    // added to check here
    const toggleFavorite = (person) => {
        let updatedFavorites;
        if (favorites.includes(person.name)) {
            updatedFavorites = favorites.filter(fav => fav !== person.name);
        } else {
            updatedFavorites = [...favorites, person.name];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const toggleDislike = (person) => {
        let updatedDislikes;
        if (dislikes.includes(person.name)) {
            updatedDislikes = dislikes.filter(dis => dis !== person.name);
        } else {
            updatedDislikes = [...dislikes, person.name];
        }
        setDislikes(updatedDislikes);
        localStorage.setItem('dislikes', JSON.stringify(updatedDislikes));
    };

    // added to check abpve

    return (
        <Flex flexDirection="column" gap={4}>
            {people.map((person) => (
                <Card
                    key={person.name}
                    maxW="md"
                    mb={4}
                    style={{
                        // backgroundColor: 'grey',
                        // boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        // borderRadius: '8px',
                        // height: '450px',
                        // padding: '20px',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        height: '450px',
                        padding: '20px',
                        backdropFilter: 'blur(5px)',
                    }}
                >
                    <CardBody>
                        <Box>
                            <img style={{ width: '300px', height: '200px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSHFT7ww14Pk2WJmB_GMPpI3QWURQsgtyIw&s" alt="Person's image" />
                        </Box>


                        <Heading as="h3" size="md">{person.name}</Heading>
                        <Text>{`Height: ${person.height}`}</Text>
                        <Text>{`Mass: ${person.mass}`}</Text>
                        <Text>{`Hair Color: ${person.hair_color}`}</Text>
                        <Text>{`Skin Color: ${person.skin_color}`}</Text>
                        <Text>{`Eye Color: ${person.eye_color}`}</Text>
                        <Text>{`Gender: ${person.gender}`}</Text>
                        <Text>{`Birth Year: ${person.birth_year}`}</Text>
                        {/*checking this block*/}
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{
                                position: 'absolute',
                                top: '230px',
                                right: '20px',
                                cursor: 'pointer',
                                color: favorites.includes(person.name) ? 'red' : 'white',
                                transition: 'color 0.3s ease-in-out',
                                height: '20px'
                            }}
                            onClick={() => toggleFavorite(person)}
                        />

                        <FontAwesomeIcon
                            icon={faHeartBroken}
                            style={{
                                position: 'absolute',
                                top: '260px',
                                right: '20px',
                                cursor: 'pointer',
                                color: dislikes.includes(person.name) ? 'black' : 'white',
                                height: '20px',
                                transition: 'color 0.3s ease-in-out',
                            }}
                            onClick={() => toggleDislike(person)}
                        />

                        {/*checking this block*/}

                        <Button style={{
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
                            marginTop: '15px', marginLeft: '100px'
                        }} onClick={() => handleOpenModal(person)}>Details</Button>
                    </CardBody>
                </Card>
            ))}

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <Modal.Dialog
                    style={{
                        margin: 'auto',
                        border: '2px solid black',
                        borderRadius: '8px',
                        backgroundColor: '#E5E4E2', position: 'absolute', top: '50%', left: '50%', padding: '20px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px'

                    }}
                >

                    <Modal.Header closeButton>
                        <Heading as="h1" size="md" mb={0} style={{ color: 'black' }}>
                            {selectedPerson && selectedPerson.name}
                        </Heading>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedPerson && (
                            <>
                                <Text style={{ color: 'black' }}>{`Height: ${selectedPerson.height}`}</Text>
                                <Text style={{ color: 'black' }}>{`Mass: ${selectedPerson.mass}`}</Text>
                                <Text style={{ color: 'black' }}>{`Hair Color: ${selectedPerson.hair_color}`}</Text>
                                <Text style={{ color: 'black' }}>{`Skin Color: ${selectedPerson.skin_color}`}</Text>
                                <Text style={{ color: 'black' }}>{`Eye Color: ${selectedPerson.eye_color}`}</Text>
                                <Text style={{ color: 'black' }}>{`Gender: ${selectedPerson.gender}`}</Text>
                                <Text style={{ color: 'black' }}>{`Birth Year: ${selectedPerson.birth_year}`}</Text>
                                <Text style={{ color: 'black' }}>{`Created: ${selectedPerson.created}`}</Text>
                                <Text style={{ color: 'black' }}>{`Edited: ${selectedPerson.edited}`}</Text>
                                <Text style={{ color: 'black' }}>Homeworld: {homeworld}</Text>

                            

                                <Text as="h1" size="md" style={{ color: 'black' }}>Films:</Text>
                                <ul>
                                    {films.map((title, index) => (
                                        <li style={{ color: 'black' }} key={index}>{title}</li>
                                    ))}
                                </ul>
                                <Button
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
                                        marginTop: '20px',
                                        marginLeft: '100px'
                                    }}
                                    onClick={handleCloseModal}>Close</Button>
                            </>
                        )}
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>
        </Flex>
    );
};

export default PeopleList;

// Adjust maxW for card size (e.g., '200px' for square)  bg="white" borderColor="gray.200" borderRadius="4px"> {/* Set background color and border */}
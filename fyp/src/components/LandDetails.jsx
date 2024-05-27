import React, { useEffect, useState } from 'react';
import axios from "axios";
const pinataApiKey="c7ce592f91ef64cd9c24" // Set your API key
const pinataSecretKey="371b874d23c09fda20625ed30017824921f450bf710994be36f1678592539e9c" // Set your secret key
const LandDetails = ({landContract, landId }) => {
    const [landDetails, setLandDetails] = useState({});
    const [imageUrls, setImageUrls] = useState([]);
    const [selectedLand, setSelectedLand] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
  
    useEffect(() => {
      const loadLandDetails = async () => {
  
        try {
          const details = await landContract.getLandDetails(landId);
          setLandDetails(details);
        } catch (error) {
          console.error('Error fetching land details:', error);
        }
      };
  
      loadLandDetails();
    }, [landContract,landId]);

    /* Pinata IPFS code */
    const fetchPinataFiles = async () => {
      try {
        // Fetch the list of files from Pinata`https://api.pinata.cloud/data/pinList?metadata.keyvalues.landId=${Land_id}`,
        const response = await axios.get("https://api.pinata.cloud/data/pinList",  {
          headers: {
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretKey,
          },
        });
  console.log(response);
  //const images = response.data.rows.map(row => `https://gateway.pinata.cloud/ipfs/${row.ipfs_pin_hash}`);
  //return images;
        return response.data.rows.slice(0, 4); // Return the list of files
      } catch (error) {
        console.error("Error fetching files from Pinata:", error);
        throw error;
      }
    };

    const openImages = async (lands) => {
      setSelectedLand(lands);
  
  
      const pinataFiles = await fetchPinataFiles(); // Fetch files from Pinata
  
      if (pinataFiles.length > 0 ) {
        try {
          const imageUrls = pinataFiles.map(
            (file) => `https://gateway.pinata.cloud/ipfs/${file.ipfs_pin_hash}`
          ); // Generate image URLs from IPFS hashes 
  
          setImageUrls(imageUrls); // Set the image URLs to display in the modal
        } catch (error) {
          console.error("Error fetching images from IPFS:", error);
        }
      }
    };
  useEffect(() => {
      // Example: Automatically open images for a specific land when component mounts
      openImages('exampleLand');
    }, []);

    const openModal = (imageUrl) => {
      setCurrentImage(imageUrl);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setCurrentImage('');
    };
  

  
    return (<div className="bg-white shadow-md rounded-lg p-6 mt-6 mx-auto max-w-4xl">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
      Land Details for ID: {landId.toString()}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Full Name:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.fullName}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Email:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.email}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Father's Name:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.fatherName}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">CNIC:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.cnic}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Permanent Address:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.permanentAddress}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Temporary Address:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.temporaryAddress}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Size:</strong>
        <span className="w-2/3 text-gray-800">{landDetails._size}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Location:</strong>
        <span className="w-2/3 text-gray-800">{landDetails._location}</span>
      </div>
      <div className="flex items-center">
        <strong className="w-1/3 text-gray-600">Owner:</strong>
        <span className="w-2/3 text-gray-800">{landDetails.owner}</span>
      </div>
  <br></br>
  <div className="container mx-auto p-7 items-center">
      <h2 className="text-2xl font-bold text-center mb-2">Land Documents</h2>
      <div className="flex flex-wrap justify-center gap-2 mx-auto">
        {imageUrls.map((imageUrl, idx) => (
          <div key={idx} className="w-1/2 sm:w-1/2 md:w-1/3 p-2 flex justify-center">
          <img
            src={imageUrl}
            alt={`Land ${idx}`}
            className="object-cover border rounded"
            onClick={() => openModal(imageUrl)}
          />
        </div>
        ))}
      </div>
      </div>
    </div>

    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Enlarged land document"
              className="max-h-screen max-w-full"
            />
          </div>
        </div>
      )}
  </div>
    );
  };
  
  export default LandDetails;
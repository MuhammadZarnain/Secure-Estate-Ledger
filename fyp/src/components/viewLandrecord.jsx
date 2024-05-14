import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import Modal from "react-modal";

const ViewLandrecord = ({ landContract }) => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedLand, setSelectedLand] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [pinataApiKey, setPinataApiKey] = useState("c7ce592f91ef64cd9c24"); // Set your API key
  const [pinataSecretKey, setPinataSecretKey] = useState("371b874d23c09fda20625ed30017824921f450bf710994be36f1678592539e9c"); // Set your secret key

  useEffect(() => {
    const fetchLandDetails = async () => {
      try {
        const allLands = await landContract.getAllLandDetails();
        setLands(allLands);
      } catch (error) {
        console.error("Error fetching land details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLandDetails(); // Fetch land details when the component mounts
  }, [landContract]);

  const fetchPinataFiles = async () => {
    try {
      // Fetch the list of files from Pinata
      const response = await axios.get("https://api.pinata.cloud/data/pinList", {
        headers: {
          pinata_api_key: pinataApiKey,
          pinata_secret_api_key: pinataSecretKey,
        },
      });
console.log(response);
     // return response.data.rows; // Return the list of files
    } catch (error) {
      console.error("Error fetching files from Pinata:", error);
      throw error;
    }
  };

  const openModal = async (land) => {
    setSelectedLand(land);
    setModalIsOpen(true);

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

  const closeModal = () => {
    setModalIsOpen(false);
    setImageUrls([]); // Reset image URLs when closing the modal
  };

  if (loading) {
    return <div>Loading land details...</div>;
  }

  return (
    <div className="bg-white flex flex-col items-stretch">
      <div className="w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <Sidebar />
          <div className="bg-white flex flex-col items-stretch p-5">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold text-center mb-6">Land Details</h2>
                <div className="w-full overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2 border border-gray-200">Land ID</th>
                        <th className="px-4 py-2 border border-gray-200">Full Name</th>
                        <th className="px-4 py-2 border border-gray-200">CNIC</th>
                        <th className="px-4 py-2 border border-gray-200">Wallet Address</th>
                        <th className="px-4 py-2 border border-gray-200">Location</th>
                        <th className="px-4 py-2 border border-gray-200">Size</th>
                        <th className="px-4 py-2 border border-gray-200">Registered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lands.map((land, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-50 cursor-pointer"
                          onClick={() => openModal(land)} // Click handler for land ID
                        >
                          <td className="px-4 py-2 border border-gray-200">{land.Land_id.toString()}</td>
                          <td className="px-4 py-2 border border-gray-200">{land.fullName}</td>
                          <td className="px-4 py-2 border border-gray-200">{land.cnic}</td>
                          <td className="px-4 py-2 border border-gray-200">{land.owner}</td>
                          <td className="px-4 py-2 border border-gray-200">{land.location}</td>
                          <td className="px-4 py-2 border border-gray-200">{land.size}</td>
                          <td className="px-4 py-2 border border-gray-200">{land.isRegister ? 'Yes' : 'No'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal to display images */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Land Images"
        ariaHideApp={false}
       // className="absolute top-1/3 left-1/3 w-[900px] h-[500px] bg-white p-5 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Land Images</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {imageUrls.map((imageUrl, idx) => (
            <img key={idx} src={imageUrl} alt={`Land image ${idx}`} className="w-1/3 h-1/3 object-cover border rounded" />
          ))}
        </div>
        <button
          className="mt-4 bg-red-500 text-white px-2 py-1 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ViewLandrecord;
// RetrieveComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './sidebar';
const pinataApiKey="c7ce592f91ef64cd9c24" // Set your API key
const pinataSecretKey="371b874d23c09fda20625ed30017824921f450bf710994be36f1678592539e9c" 
const RetrieveComponent = () => {
    const [landId, setLandId] = useState('');
    const [fileLinks, setFileLinks] = useState([]);

    const handleRetrieve = async () => {
        const url = `https://api.pinata.cloud/data/pinList?status=pinned&metadata[name]=${landId}`;

        const config = {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretKey,
            },
        };

        try {
            const response = await axios.get(url, config);
            const files = response.data.rows.map(row => ({
                link: `https://gateway.pinata.cloud/ipfs/${row.ipfs_pin_hash}`,
                type: row.metadata.keyvalues.type
            }));
            setFileLinks(files);
        } catch (error) {
            console.error('Error retrieving files:', error);
        }
    };

    const renderFile = (file, index) => {
        if (file.type === 'image') {
            return (
                <div key={index}>
                    <img
                        src={file.link}
                        alt={`File ${index + 1}`}
                        style={{ width: '200px', height: 'auto', cursor: 'pointer' }}
                        onClick={() => window.open(file.link, '_blank')}
                    />
                </div>
            );
        } else if (file.type === 'pdf') {
            return (
                <div key={index}>
                    <iframe
                        src={file.link}
                        style={{ width: '200px', height: '300px', cursor: 'pointer' }}
                        onClick={() => window.open(file.link, '_blank')}
                        title={`File ${index + 1}`}
                    ></iframe>
                </div>
            );
        } else {
            return (
                <div key={index}>
                    <a href={file.link} target="_blank" rel="noopener noreferrer">
                        {file.link}
                    </a>
                </div>
            );
        }
    };

    return (
        <div className="bg-white flex flex-col items-stretch">
        <div className="w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <Sidebar />
          <div>
            <input
                type="text"
                placeholder="Land ID"
                value={landId}
                onChange={(e) => setLandId(e.target.value)}
            />
            <button onClick={handleRetrieve}>Retrieve</button>
            <div>
                {fileLinks.map((file, index) => renderFile(file, index))}
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default RetrieveComponent;

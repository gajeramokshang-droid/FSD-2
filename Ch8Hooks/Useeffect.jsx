// Create a react app using function component to display image of flower  
// using AXIOS to make API request. Use API Url 
// (https://flower.ceo/api/image/random). Key name in API which store image 
// is “sample”
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Useeffect() {
  // State variables to hold the image URL, loading state, and potential errors
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch the random flower image
  const fetchFlowerImage = () => {
    setLoading(true);
    setError(null);

    axios.get('https://flower.ceo/api/image/random')
      .then(response => {
        // Axios wraps the response body in a 'data' object.
        // We access the 'sample' key from it.
        setImageUrl(response.data.sample);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data from API:", err);
        setError("Failed to load flower image.");
        setLoading(false);
      });
  };

  // Run the fetch function once when the component initially mounts
  useEffect(() => {
    fetchFlowerImage();
  }, []);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>Random Flower Image</h2>
      
      {/* 1. Show loading indicator while fetching */}
      {loading && <p>Loading image...</p>}

      {/* 2. Show error message if the API request fails */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* 3. Render image if the URL exists and it is not loading */}
      {!loading && imageUrl && (
        <div style={{ margin: '20px 0' }}>
          <img 
            src={imageUrl} 
            alt="A beautiful flower" 
            style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} 
          />
        </div>
      )}

      {/* Button to let user fetch a new random image manually */}
      <button 
        onClick={fetchFlowerImage}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Next Flower
      </button>
    </div>
  );
}

export default Useeffect;


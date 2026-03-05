import React, { useEffect, useState } from 'react';
import { getAssignments } from '../services/api';

const StudentMaterials = () => {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await getAssignments();
        // Correctly handling the data from your API
        setMaterials(res.data);
      } catch (err) {
        console.error("Could not fetch materials");
      }
    };
    fetchMaterials();
  }, []);

  return (
    <div className="admin-container">
      {/* Added lavender-text class to match your theme */}
      <h2 className="lavender-text" style={{ marginBottom: '25px' }}>Study Materials</h2>
      
      <div className="module-list">
        {materials.length > 0 ? materials.map((item) => (
          <div key={item._id} className="module-card" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '20px',
            marginBottom: '15px',
            borderRadius: '15px',
            border: '1px solid #f0f0f0'
          }}>
            <div className="module-info">
              <h3 style={{ margin: 0, color: '#2D2A4E' }}>{item.title}</h3>
              <p style={{ margin: '5px 0 0 0', color: '#7f8c8d', fontSize: '14px' }}>
                {item.description}
              </p>
            </div>

            {/* Styled link to act as a proper button */}
            <a 
              href={`http://localhost:5000/${item.fileUrl}`} 
              target="_blank" 
              rel="noreferrer" 
              className="submit-btn" // Reusing your existing button class for consistency
              style={{ 
                textDecoration: 'none', 
                fontSize: '14px', 
                padding: '10px 20px',
                display: 'inline-block',
                textAlign: 'center'
              }}
            >
              Download PDF
            </a>
          </div>
        )) : (
          <p style={{ color: '#7f8c8d' }}>No materials uploaded for this subject yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudentMaterials;
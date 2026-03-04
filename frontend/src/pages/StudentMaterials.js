import React, { useEffect, useState } from 'react';
import { getAssignments } from '../services/api';

const StudentMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const subjectId = "69a3ff56dc96636c329e0b17"; // Example from your backend

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const res = await getAssignments();
        setMaterials(data);
      } catch (err) {
        console.error("Could not fetch materials");
      }
    };
    fetchMaterials();
  }, []);

  return (
    <div className="admin-container">
      <h2>Study Materials</h2>
      <div className="module-list">
        {materials.length > 0 ? materials.map((item) => (
          <div key={item._id} className="module-card">
            <div className="module-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <a href={`http://localhost:5000/${item.fileUrl}`} target="_blank" rel="noreferrer" className="enter-btn">
              Download PDF
            </a>
          </div>
        )) : <p>No materials uploaded for this subject yet.</p>}
      </div>
    </div>
  );
};

export default StudentMaterials;
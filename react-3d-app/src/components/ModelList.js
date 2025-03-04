import React, { useState, useEffect } from 'react';
import ModelViewer from './ModelViewer';

const ModelList = () => {
  const [models, setModels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch models from the backend
  useEffect(() => {
    fetch('/models')
      .then(response => response.json())
      .then(data => setModels(data));
  }, []);

  const filteredModels = models.filter(model =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search models..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {filteredModels.map(model => (
          <div key={model.id} style={{ margin: 10 }}>
            <h3>{model.name}</h3>
            <ModelViewer modelUrl={model.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelList;

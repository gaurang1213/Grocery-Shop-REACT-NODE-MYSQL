// frontend/src/components/Catalogue.js
import React, { useEffect, useState } from 'react';
import API from '../api';

export default function Catalogue() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get('/items').then(res => setItems(res.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Catalogue</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        justifyContent: 'center'
      }}>
        {items.map(item => (
          <div key={item.id} style={{
            border: '1px solid #ddd',
            borderRadius: 8,
            padding: 16,
            width: 220,
            boxSizing: 'border-box',
            background: '#fafafa'
          }}>
            <img src={item.image || 'https://via.placeholder.com/200'} alt={item.name} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 4 }} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p style={{ fontWeight: 'bold' }}>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

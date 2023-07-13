import React, { useEffect, useState } from 'react';
import { getAllTrains } from '../api/trainAPI';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      // Call the API to fetch all trains
      const token = await authenticate('your-access-code');
      if (token) {
        const data = await getAllTrains(token);
        if (data) {
          setTrains(data);
        }
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {/* Display the train schedules and seat availability */}
      {trains.map((train) => (
        <div key={train.id}>
          <h3>{train.name}</h3>
          {/* Display train details */}
        </div>
      ))}
    </div>
  );
};

export default AllTrains;

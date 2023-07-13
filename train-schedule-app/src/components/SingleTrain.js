import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainById } from '../api/trainAPI';

const SingleTrain = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      // Call the API to fetch a specific train by ID
      const token = await authenticate('your-access-code');
      if (token) {
        const data = await getTrainById(token, trainId);
        if (data) {
          setTrain(data);
        }
      }
    };

    fetchTrain();
  }, [trainId]);

  return (
    <div>
      <h1>Single Train</h1>
      {train ? (
        <div>
          <h3>{train.name}</h3>
          {/* Display train details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleTrain;

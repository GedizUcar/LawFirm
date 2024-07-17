import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lawFirms from '../data/lawFirms';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Lawyers: React.FC = () => {
  const lawyers = lawFirms.flatMap(firm => firm.lawyers);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const paginatedLawyers = lawyers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="lawyer-cards-container">
      <h1>Our Lawyers</h1>
      <div className="lawyer-cards">
        {paginatedLawyers.map(lawyer => (
          <div key={lawyer.id} className="lawyer-card">
            <h2>{lawyer.name}</h2>
            <p>{lawyer.specialization}</p>
            <p>{lawyer.education}</p>
            <Link to={`/lawyer/${lawyer.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(lawyers.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
};

export default Lawyers;
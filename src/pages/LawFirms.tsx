import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lawFirms from '../data/lawFirms';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const LawFirms: React.FC = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const paginatedFirms = lawFirms.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="law-firms-container">
      <h1>Law Firms</h1>
      <div className="law-firms">
        {paginatedFirms.map(firm => (
          <div key={firm.id} className="law-firm-card">
            <h2>{firm.name}</h2>
            <p>{firm.location}</p>
            <Link to={`/law-firm/${firm.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(lawFirms.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
};

export default LawFirms;
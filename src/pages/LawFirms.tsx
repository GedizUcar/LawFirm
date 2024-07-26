import React, { useState } from 'react';
import { Typography, Card, CardContent, Select, MenuItem, FormControl, InputLabel, Button, Popover } from '@mui/material';
import { lawFirms } from '../data/lawFirms';
import { useNavigate } from 'react-router-dom';


const ITEMS_PER_PAGE = 15; // İlk sayfada daha fazla öğe gösterebiliriz

const LawFirms: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [filteredLawFirms, setFilteredLawFirms] = useState(() => lawFirms);
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const handleFilter = () => {
    let filtered = lawFirms;

    if (selectedCity) {
      filtered = filtered.filter(firm => firm.location === selectedCity);
    }

    if (selectedSpecialization) {
      filtered = filtered.filter(firm => 
        firm.lawyers.some(lawyer => lawyer.specialization === selectedSpecialization)
      );
    }

    setFilteredLawFirms(filtered);
    setCurrentPage(1); // Reset to first page when filters are applied
    setAnchorEl(null); // Close the popover after applying filters
  };

  const handleClearFilters = () => {
    setSelectedCity('');
    setSelectedSpecialization('');
    setFilteredLawFirms(lawFirms);
    setCurrentPage(1); // Reset to first page when filters are cleared
    setAnchorEl(null); // Close the popover after clearing filters
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredLawFirms.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredLawFirms.length / ITEMS_PER_PAGE);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleViewDetails = (firmId: number) => {
    navigate(`/law-firm-detail/${firmId}`);
  };

  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>Law Firms</Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          Filter
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <div className="filter-container" style={{ padding: '1rem', display: 'flex', flexDirection: 'column' }}>
            <FormControl variant="outlined" className="filter-control" style={{ marginBottom: '1rem' }}>
              <InputLabel>City</InputLabel>
              <Select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value as string)}
                label="City"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Istanbul">Istanbul</MenuItem>
                <MenuItem value="Ankara">Ankara</MenuItem>
                <MenuItem value="Izmir">Izmir</MenuItem>
                <MenuItem value="Bursa">Bursa</MenuItem>
                <MenuItem value="Antalya">Antalya</MenuItem>
                <MenuItem value="Adana">Adana</MenuItem>
                <MenuItem value="Konya">Konya</MenuItem>
                <MenuItem value="Gaziantep">Gaziantep</MenuItem>
                <MenuItem value="Mersin">Mersin</MenuItem>
                <MenuItem value="Kayseri">Kayseri</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className="filter-control" style={{ marginBottom: '1rem' }}>
              <InputLabel>Specialization</InputLabel>
              <Select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value as string)}
                label="Specialization"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Corporate Law">Corporate Law</MenuItem>
                <MenuItem value="Family Law">Family Law</MenuItem>
                <MenuItem value="Criminal Law">Criminal Law</MenuItem>
                <MenuItem value="Real Estate Law">Real Estate Law</MenuItem>
                <MenuItem value="Labor Law">Labor Law</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleFilter} className="filter-button">
              Apply Filters
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClearFilters} className="filter-button">
              Clear Filters
            </Button>
          </div>
        </Popover>
      </div>
      <div className="law-firms">
        {currentItems.slice(0, 5).map((firm) => (
          <Card key={firm.id} className="law-firm-card">
            <CardContent>
              <Typography variant="h5">{firm.name}</Typography>
              <Typography variant="body2" color="textSecondary">{firm.location}</Typography>
              <Typography variant="body2" color="textSecondary">{firm.description}</Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleViewDetails(firm.id)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="law-firm-list">
        {currentItems.slice(5).map((firm) => (
          <div key={firm.id} className="law-firm-list-item">
            <div className="details">
              <Typography variant="body1">{firm.name}</Typography>
              <Typography variant="body2" color="textSecondary">{firm.location}</Typography>
              <Typography variant="body2" color="textSecondary">{firm.description}</Typography>
            </div>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleViewDetails(firm.id)}
            >
              View Details
            </Button>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              className={index + 1 === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawFirms;

import React, { useState } from 'react';
import { TextField, MenuItem, Button, IconButton, Popover } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';

const practiceAreas = [
  'Criminal Law',
  'Family Law',
  'Corporate Law',
  'Labor Law',
  'Intellectual Property Law',
  'Tax Law',
  'Bankruptcy Law',
  'Environmental Law',
  'Immigration Law',
  'Real Estate Law',
];

const cities = [
  'Istanbul',
  'Ankara',
  'Izmir',
  'Bursa',
  'Antalya',
  'Adana',
  'Konya',
  'Gaziantep',
  'Kayseri',
  'Mersin',
];

interface FilterProps {
  onFilter: (filters: { practiceArea: string; city: string }) => void;
  onClearFilters: () => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter, onClearFilters }) => {
  const [practiceArea, setPracticeArea] = useState('');
  const [city, setCity] = useState('');
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleFilter = () => {
    onFilter({ practiceArea, city });
    handleClose();
  };

  const handleClearFilters = () => {
    setPracticeArea('');
    setCity('');
    onClearFilters();
    handleClose();
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="filter-container">
      <IconButton aria-describedby={id} onClick={handleClick}>
        <FilterListIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="popover-content">
          <TextField
            select
            label="Location Type"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            variant="outlined"
            margin="normal"
            className="filter-select"
          >
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Specialization"
            value={practiceArea}
            onChange={(e) => setPracticeArea(e.target.value)}
            variant="outlined"
            margin="normal"
            className="filter-select"
          >
            {practiceAreas.map((area) => (
              <MenuItem key={area} value={area}>
                {area}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary" onClick={handleFilter} fullWidth>
            Apply Filters
          </Button>
        </div>
      </Popover>
      <IconButton onClick={handleClearFilters}>
        <ClearIcon />
      </IconButton>
    </div>
  );
};

export default Filter;

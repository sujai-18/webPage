import { useState } from 'react';
import '../styles/dropdownButton.scss';
import { ReactComponent as FilterIcon } from '../svgs/filterIcon.svg';
import { ReactComponent as DownArrowIcon } from '../svgs/downArrowIcon.svg';
import { Dropdown } from 'react-bootstrap';

function SearchDropdown({ items, onSelect }) {
  const [title, SetTitle] = useState('All');
  return (
    <Dropdown className="dropdown-button">
      <Dropdown.Toggle>
        <div>
          <FilterIcon />
          {title}
          <DownArrowIcon />
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => {
              onSelect(item);
              SetTitle(item);
            }}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SearchDropdown;

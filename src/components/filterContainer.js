import '../styles/filterContainer.scss';
import data from '../db.json';
import { useState } from 'react';

function FilterContainer({ filteredData, selectStatusType }) {
  const [className, setClassName] = useState('');
  return (
    <div className="filter-container">
      {filteredData.map(({ status, count }) => (
        <>
          {status === 'Archived' && <div className="bordered" />}
          <div className={className === status ? className : ''}>
            <span
              onClick={() => {
                selectStatusType(status);
                setClassName(status);
              }}
            >
              {status}
            </span>
            <div>{status === 'All' ? data.projects.length : count}</div>
          </div>
        </>
      ))}
    </div>
  );
}

export default FilterContainer;

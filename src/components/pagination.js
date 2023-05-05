import { Pagination } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { projectsPerPage } from './constant';

const PaginationComponent = ({ projects, renderProjects, isSorted }) => {
  const [currentPage, setCurrentPage] = useState(1),
    totalProjects = projects.length,
    indexOfLastProject = currentPage * projectsPerPage,
    indexOfFirstProject = indexOfLastProject - projectsPerPage,
    currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    renderProjects(currentProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, isSorted]);

  return (
    <Pagination>
      <Pagination.First onClick={() => setCurrentPage(1)} />
      <Pagination.Prev
        onClick={() =>
          currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1)
        }
      />
      {Array.from({ length: Math.ceil(totalProjects / projectsPerPage) }).map(
        (item, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ),
      )}
      <Pagination.Next
        onClick={() =>
          currentPage < Math.ceil(totalProjects / projectsPerPage)
            ? setCurrentPage(currentPage + 1)
            : setCurrentPage(currentPage)
        }
      />
      <Pagination.Last
        onClick={() =>
          setCurrentPage(Math.ceil(totalProjects / projectsPerPage))
        }
      />
    </Pagination>
  );
};

export default PaginationComponent;

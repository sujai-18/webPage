import './styles/global.scss';
import Sidebar from '../src/components/sidebar.js';
import Header from '../src/components/header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchDropdown from './components/searchDropdown';
import SearchBar from './components/searchBar';
import CreateProject from './components/createProject';
import { ReactComponent as CalenderIcon } from './svgs/calenderIcon.svg';
import ProjectTable from './components/table';
import { useMemo, useState } from 'react';
import FilterContainer from './components/filterContainer';
import data from './db.json';
import PaginationComponent from './components/pagination';
import _ from 'lodash';

function App() {
  const projectData = useMemo(() => data.projects, []),
    columns = [
      { title: '' },
      // { title: '' },
      { title: '#', count: '2' },
      { title: 'project name', count: '2' },
      { title: 'pm', count: '2' },
      { title: 'status', count: '2' },
      { title: 'last update', count: '2' },
      { title: 'resources', count: '2' },
      { title: 'project timeline', count: '2' },
      { title: 'estimation' },
    ],
    filterTitle = [
      'All',
      'At risk',
      'On hold',
      'Potential risk',
      'On track',
      'Archived',
    ],
    filteredData = filterTitle.reduce((acc, status) => {
      const count = projectData.filter((item) => item.status === status).length;
      acc.push({ status, count });
      return acc;
    }, []),
    [posts, setPosts] = useState([]);

  // dropdown-code
  const [filteredProjects, setFilteredProjects] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleSelect = (value) => {
      if (value !== 'All') {
        let result = [];
        result = projectData.filter((data) => data.status === value);
        setFilteredProjects(result);
      } else {
        setFilteredProjects();
      }
    },
    onChange = (e) => {
      let result = [];
      result = projectData.filter(
        (data) =>
          // eslint-disable-next-line eqeqeq
          data.projectId == e.target.value ||
          data.projectName === e.target.value,
      );
      if (result.length === 0) {
        setFilteredProjects();
      } else {
        setFilteredProjects(result);
      }
    },
    renderProjects = (projects) => {
      setPosts(projects);
    };

  //sorting functionality
  const [sortedData, setSortedData] = useState(projectData),
    [isSorted, setIsSorted] = useState(false),
    sortProjectData = (sortType, sortBy) => {
      let useSortType = 'projectId';
      if (sortType === 'project name') {
        useSortType = 'projectName';
      } else if (sortType === 'last update') {
        useSortType = 'lastUpdate';
      }
      const newData = _.orderBy(projectData, useSortType, sortBy);
      setSortedData(newData);
      setIsSorted(Math.random());
    },
    selectStatusType = (status) => {
      let result = [];
      result = projectData.filter((data) => data.status === status);
      if (status === 'All') {
        setFilteredProjects();
      } else {
        setFilteredProjects(result);
      }
    };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="layout">
        <Header />
        <div className="activities-container">
          <div className="activities">
            <div className="icon">
              <CalenderIcon />
            </div>
            <div className="search-activities">
              <SearchDropdown items={filterTitle} onSelect={handleSelect} />
              <SearchBar onChange={onChange} />
            </div>
          </div>
          <div>
            <CreateProject />
          </div>
        </div>
        <FilterContainer
          filteredData={filteredData}
          selectStatusType={selectStatusType}
        />
        <ProjectTable
          columns={columns}
          posts={filteredProjects || posts || projectData}
          sortFunction={sortProjectData}
        />
        <PaginationComponent
          projects={sortedData || filteredProjects || projectData}
          renderProjects={renderProjects}
          isSorted={isSorted}
        />
      </div>
    </div>
  );
}

export default App;

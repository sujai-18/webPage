import '../styles/table.scss';
import { Table } from 'react-bootstrap';
import { ReactComponent as ArrowCircleRightIcon } from '../svgs/arrowCircleRightIcon.svg';
import { ReactComponent as DownArrowIcon } from '../svgs/downArrowIcon.svg';
import { ReactComponent as DocumentIcon } from '../svgs/documentIcon.svg';
import { ReactComponent as InfoIcon } from '../svgs/infoIcon.svg';
import { ReactComponent as SortDownArrowIcon } from '../svgs/sortDownArrowIcon.svg';
import { ReactComponent as SortUpArrowIcon } from '../svgs/sortUpArrowIcon.svg';
import moment from 'moment';

function ProjectTable(props) {
  const { posts, sortFunction } = props;
  return (
    <Table hover className="custom-table">
      <thead>
        <tr className="custom-tr">
          <th className="table-head"></th>
          {props.columns.map((column, index) => {
            const { title } = column;
            return (
              <th key={index}>
                <div>
                  {title}
                  {['#', 'project name', 'last update'].includes(title) && (
                    <div className="icons">
                      <SortUpArrowIcon
                        onClick={() => sortFunction(title, 'asc')}
                      />
                      <SortDownArrowIcon
                        onClick={() => sortFunction(title, 'desc')}
                      />
                    </div>
                  )}
                  {['status', 'project timeline'].includes(title) && (
                    <InfoIcon />
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {posts.map((row, index) => {
          const {
            projectId,
            projectName,
            status,
            lastUpdate,
            resources,
            projectTimeline,
            estimation,
          } = row;
          return (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <ArrowCircleRightIcon />
              </td>
              <td key={index}>{projectId}</td>
              <td key={index} className="project-name">
                {projectName}
              </td>
              <td key={index} className="pm">
                <img
                  src={'https://www.w3schools.com/tags/img_girl.jpg'}
                  alt={'pm'}
                />
              </td>
              <td key={index} className="status">
                <div className={`container ${status}`}>
                  <div className={`circle ${status}`} />
                  <div>{status}</div>
                </div>
              </td>
              <td key={index} className="last-updated">
                <div>
                  <DocumentIcon />
                  {moment(lastUpdate).utc().format('DD MMM YYYY, hh:mm A')}
                </div>
              </td>
              <td key={index} className="resources">
                <div>{resources}</div>
              </td>
              <td key={index} className="timeline">
                <div className="container">
                  <div>
                    {moment(projectTimeline.startDate).format('DD MMM YYYY')}
                  </div>
                  <DownArrowIcon />
                  <div>
                    {moment(projectTimeline.endDate).format('DD MMM YYYY')}
                  </div>
                </div>
              </td>
              <td key={index} className="estimation">
                <div>
                  <span>US$</span>
                  <span>{estimation}k</span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ProjectTable;

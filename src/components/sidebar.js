import '../styles/sidebar.scss';
import { Nav } from 'react-bootstrap';
import { sidebarIcons } from './constant';

const Sidebar = () => (
  <Nav className="col-md-1 d-none d-md-block bg-blue sidebar">
    <div className="sidebar-sticky"></div>
    {sidebarIcons.map(({ icon, className }) => (
      <Nav.Item>
        <Nav.Link href="#" className={className}>
          <div>{icon}</div>
        </Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

export default Sidebar;

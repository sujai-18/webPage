import { Container } from 'react-bootstrap';
import Header from './header';
import Sidebar from './sidebar';

function Layout(props) {
  return (
    <Container fluid>
      <Sidebar />
      <Header />
    </Container>
  );
}

export default Layout;

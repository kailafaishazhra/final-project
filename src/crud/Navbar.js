import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Crud from './crud';

const navbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Perpustakaan</Nav.Link>
            <Nav.Link href="">Peminjaman</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default navbar;
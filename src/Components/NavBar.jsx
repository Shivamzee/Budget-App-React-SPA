import Container from "react-bootstrap/Container";
import { Stack, Button } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Container className="my-4">
      <Stack
        direction="horizontal"
        gap={2}
        className=" border-info border-bottom mb-4"
      >
        <h1 className=" me-auto">What is your Budget </h1>
        <Button variant="success">Add Budget </Button>
        <Button variant="btn btn-outline-danger">Add Expanse </Button>
      </Stack>
    </Container>
  );
};

export default NavBar;

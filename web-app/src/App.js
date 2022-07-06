import "bootstrap/dist/css/bootstrap.min.css";
import SingleCard from "./ImageCards";
import { Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Banner from './components/Banner'
import SearchBar from "./components/Search";
const App = () => {
    return (
        <>
        <Banner />
        <SearchBar />
        <Container>
          <Row xs={1} md={3} xl={6}>
          <SingleCard />
          </Row>
        </Container>
        </>
    );
}

export default App;
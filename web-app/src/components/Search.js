import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import '../css/SearchBar.css'
import {ReactComponent as ReactLogo} from '../icons/search.svg';

const SearchBar = (prop) => {
    // inline styling
    const searchStyle = {
        container: isWide => (
            {
                display: 'flex',
                padding: 0
            }
        )

    }

    // something to search
    const [searchInput, setSearchInput] = useState("");

    // listen to window size change
    const mediaMatch = window.matchMedia('(min-width: 1500px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    // size of search box
    const searchBoxSize = matches? 8: 6;

    // when input is updated, update the match
    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addListener(handler);
        return () => mediaMatch.removeListener(handler);
    })

    // Function to update value of search
    const updateVal = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        setSearchInput(name);
        console.log(`you entered ${name}`);
    }

    return (
        <Container className="searchBar">
            <Form className="searchInput" onSubmit={handleSubmit}>
                <Row className="grid-center">
                    <Col md={1} lg={1} xs={1}><ReactLogo /></Col>
                    <Col xs={3} lg={searchBoxSize} md={6} className="noPad">
                        <Form.Control placeholder="Enter the type of the pet" value={searchInput}
                            onChange={updateVal} />
                    </Col>
                    <Col md={2} lg={2} xs={2} style={searchStyle.container(matches)}><Button type='submit' className="searchButton noPad"> Search</Button></Col>
                </Row>
            </Form>

        </Container>
    );
}

// need boostrap search component here

export default SearchBar;
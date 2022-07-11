import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import '../css/SearchBar.css'

const SearchBar = (prop) => {
    // inline styling
    const searchStyle = {
        container: isWide => (
            {
                justifyContent: 'right',
                alignItems: 'right',
                color: 'blue',
                display: 'flex'
            }
        )

    }

    // something to search
    const [searchInput, setSearchInput] = useState("");

    // listen to window size change
    const mediaMatch = window.matchMedia('(min-width: 1500px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    // size of search box
    const searchBoxSize = matches? 7: 6;

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
                    <Col md={2} lg={2} xs={1}><Form.Label>Search A Pet</Form.Label></Col>
                    <Col xs={3} lg={searchBoxSize} md={6}>
                        <Form.Control placeholder="Enter a pet" value={searchInput}
                            onChange={updateVal} />
                    </Col>
                    <Col md={3} lg={3} xs={1} style={searchStyle.container(matches)}><Button type='submit'> Search</Button></Col>
                </Row>
            </Form>

        </Container>
    );
}

// need boostrap search component here

export default SearchBar;
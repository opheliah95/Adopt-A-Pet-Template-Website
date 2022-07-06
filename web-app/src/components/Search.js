import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const SearchBar = (prop) => {
    // something to search
    const { searchInput, setSearchInput } = useState("");

    return (
        <Container className="searchBar">
            <Form className="searchInput">
                <Form.Label>Search A Pet</Form.Label>
                <Form.Control placeholder="Enter a pet" />
            </Form>
            <Button> Search</Button>
        </Container>
    );
}

// need boostrap search component here

export default SearchBar;
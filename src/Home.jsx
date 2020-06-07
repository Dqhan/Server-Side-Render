// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <h1>Page Home.</h1>
        <Link to="/page_a">Link to Page A</Link>
        <Link to="/page_b">Link to Page B</Link>
    </div>
);
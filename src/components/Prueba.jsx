import React from 'react';
import { useParams } from 'react-router-dom';

const TestComponent = () => {
    const { id } = useParams();
    return <p>Test ID: {id}</p>;
}

export default TestComponent;

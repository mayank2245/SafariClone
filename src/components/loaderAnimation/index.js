import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import { Button, Container, Row } from 'react-bootstrap';

const LoaderAnimation = () => {
    return (
        <div>
            <HashLoader color={'#003e1c'}
                size={50} />
        </div>
    )
}

export default LoaderAnimation
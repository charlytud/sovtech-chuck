import React from 'react';

export default function Joke(props) {
    const {
        joke
    } = props
    return (
        <p>
            { joke }
        </p>
    )
}

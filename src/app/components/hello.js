"use client";

import React, { useEffect, useState } from 'react';

const FetchExample = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // バックエンドのURLに適宜書き換えてください。
        fetch('http://localhost:3030/')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <p>Message from backend: {message}</p>
        </div>
    );
};

export default FetchExample;
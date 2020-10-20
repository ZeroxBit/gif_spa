
import React, { useEffect, useState } from 'react';
import { url } from "../config/config.json"

const useFetch = (path, options) => {
    const [data, setData] = useState(null);
    const [isFeching, setIsFeching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        handleInitialValues();

        if (path) {
            handleFetch();
        }

    }, [path])

    const handleFetch = () => {
        fetch(`${url}${path}`, {
            ...options
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsFeching(false)
                setError(null);
            })
            .catch(err => {
                setData(null);
                setIsFeching(false)
                setError(err);
            });
    }

    const handleInitialValues = () => {
        setData(null);
        setIsFeching(true)
        setError(null);
    }

    return [
        data,
        isFeching,
        error
    ];
}

export default useFetch


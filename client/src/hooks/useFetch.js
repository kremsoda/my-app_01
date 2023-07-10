import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setMyPosts } from '../store';

export const useFetch = (axiosParams) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const fetchData = async (params) => {
        try {
            const result = await axios.request(params);
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    if(axiosParams.use == 'getAllPosts') {
        if(response){
            dispatch(setMyPosts(response.data));
        }
        console.log(axiosParams.use)
    }

    useEffect(() => {
        fetchData(axiosParams);
    }, []);

    return { response, error, loading };
};

const addNewPost = async (post) => {
    try {
        const formData = new FormData();
        Object.entries(post).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((item) => {
                    formData.append(key,item)
                });
            } else {
                formData.append(key, value);
            }
        });
        const result = await axios.post('http://localhost:5010/posts', formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        });
    } catch (error){
        console.log('Error:', error);
    }
}

export {addNewPost};
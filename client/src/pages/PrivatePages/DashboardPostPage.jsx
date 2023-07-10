import { v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";
import axios from 'axios';

import Button from '../../components/Button'
import { useDispatch } from "react-redux";
import { setMyPosts } from "../../store";

import Table from "../../components/Table/Table";

import { useFetch } from "../../hooks/useFetch";
import { deletePost } from "../../store";

function DashboardPostPage() {
    const dispatch = useDispatch();

    const [newPost, setNewPost] = useState({
        title: '',
        body: '',
        tag: '',
        categories: [],
        slug: '',
        thumbnail: null,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewPost((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleFileChange = (e) => {
        const {name,files} = e.target;
        setNewPost((prevState) => ({
            ...prevState,
            [name]: files[0],
        }))
    }

    const handleCategoriesChange = (e) => {
        const {value} = e.target;
        setNewPost((prevState) => ({
            ...prevState,
            categories: value.split(','),
        }));
    }

    const handleSubmit_AddPost = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            Object.entries(newPost).forEach(([key, value]) => {
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
            getPosts();
        } catch (error){
            console.log('Error:', error);
        }
    }

    const deleteThisPost = async (id) => {
        try {
            const result = await axios.delete(`http://localhost:5010/posts/${id}`);
            dispatch(deletePost(id));
        } catch (error){
            console.log('Error:', error);
        }
    }

    return (
        <>
            
            <h1>My posts</h1>
            <Table deleteThisPost={deleteThisPost}/>
            <h1>Add post</h1>
            <form onSubmit={handleSubmit_AddPost}>
                <input type="text" name="title" value={newPost.title} onChange={handleChange} placeholder="Title"/>
                <input type="text" name="body" value={newPost.body} onChange={handleChange} placeholder="Body"/>
                <input type="text" name="tag" value={newPost.tag} onChange={handleChange} placeholder="Tag"/>
                <input type="text" name="categories" value={newPost.categories} onChange={handleCategoriesChange} placeholder="Categories"/>
                <input type="text" name="slug" value={newPost.slug} onChange={handleChange} placeholder="Slug"/>
                <input type="file" name="thumbnail" onChange={handleFileChange}/>
                <Button success>Submit</Button>
            </form>
        </>
    );
}

export default DashboardPostPage;

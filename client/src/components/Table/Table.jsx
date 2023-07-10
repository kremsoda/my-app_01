import DataTable from 'react-data-table-component';
import Button from '../Button/Button';
import styles from './Table.module.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { setMyPosts } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';

function Table({deleteThisPost}) {
    const dispatch = useDispatch();

    const {response, error, loading} = useFetch({
        method: 'GET',
        use: 'getAllPosts',
        url: 'http://localhost:5010/posts',
    });

    const myPosts = useSelector((state) => {
        return state.posts.myPosts;
    });

    const [newPost, setNewPost] = useState({
        title: 'a',
        body: 'a',
        tag: ['asd'],
        categories: ['asd'],
        slug: 'a',
        thumbnail: null,
        externalLink: 'a'
    });

    // useEffect({
        
    // },[]);



    // const updatePost = async (id) => {

    //     try {
    //         const formData = new FormData();
    //         Object.entries(newPost).forEach(([key, value]) => {
    //             if (Array.isArray(value)) {
    //                 value.forEach((item) => {
    //                     formData.append(key,item)
    //                 });
    //             } else {
    //                 formData.append(key, value);
    //             }
    //         });
    //         const result = await axios.patch(`http://localhost:5010/posts/${id}`, formData, {
    //             headers: {
    //                 'Content-Type':'multipart/form-data'
    //             }
    //         });
    //         console.log(result)
    //     } catch (error){
    //         console.log('Error:', error);
    //     }
    // }

    const ExpandedComponent = ({ data }) => 
    <pre>
        {data.externalLink ?
            <img className={styles.img} src={data.externalLink} alt="" />
        :
            <img className={styles.img} src={data.thumbnail} alt="" /> 
        }
    </pre>

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Body',
            selector: row => row.body,
        },
        {
            name: 'Cetegories',
            selector: row => row.categories.join(' '),
        },
        {
            name: 'Slug',
            selector: row => row.slug,
        },
        {
            name: 'Edit',
            selector: row => <Button warning onClick={() => updatePost(row._id)}>X</Button> 
        },
        {
            name: 'Delete',
            selector: row => <Button danger outline onClick={() => deleteThisPost(row._id)}>x</Button> 
        }
    ];

    return (
        <>

            <DataTable
                columns={columns}
                data={myPosts}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
            />
        </>
    );
}

export default Table
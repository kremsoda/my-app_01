import { PostList, PostItem } from "../../components/Post"
import { v4 as uuidv4 } from "uuid";
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from "../../components/SearchBar";

import unsplashService from "../../services/unsplashService";

import { changeImages } from "../../store/slices/postSlice";



export const PostsPage = () => {

  const dispatch = useDispatch();

  const images = useSelector((state)=> {
    return state.posts.images;
  });

  const handleSubmit = async (term) => {
    const result = await unsplashService.searchUnsplashImages(term);
    dispatch(changeImages(result));
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
      <PostList>
        {images.map((image) => (
          <PostItem image={image} key={uuidv4()} />
          ))}
      </PostList>
    </>
  )
}

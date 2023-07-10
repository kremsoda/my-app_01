import { v4 as uuidv4 } from "uuid";

import {useDispatch, useSelector} from 'react-redux';

import { changeImages } from '../../store/slices/postSlice';

import unsplashService from '../../services/unsplashService';

import SearchBar from '../../components/SearchBar';
import { PostList, PostItem } from '../../components/Post';
import Hero from '../../components/Hero'
import CallButton from "../../components/CallButton/CallButton";

export const HomePage = () => {
  const heroBgSrc = 'src/assets/images/hero.jpg';

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
      <Hero CTA='Get Started' src={heroBgSrc}>You can find here any image you want!</Hero>
      <SearchBar onSubmit={handleSubmit}/>
      <CallButton/>
      <PostList>
        {images.map((image) => (
          <PostItem image={image} key={uuidv4()} />
        ))}
      </PostList>
    </>
  )
}

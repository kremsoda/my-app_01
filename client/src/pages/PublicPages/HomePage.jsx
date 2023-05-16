import { v4 as uuidv4 } from "uuid";

import {useDispatch, useSelector} from 'react-redux';

import { changeImages } from '../../store/slices/postSlice';

import unsplashService from '../../services/unsplashService';

import SearchBar from '../../components/SearchBar';
import { PostList, PostItem } from '../../components/Post';
import Hero from '../../components/Hero'
import CallButton from "../../components/CallButton/CallButton";
import { useState } from "react";
import Button from "../../components/Button";
import Popup from "../../components/Popup/Popup";

export const HomePage = () => {
    const [popup, setPopup ] = useState(false);


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
      <Button onClick={() => setPopup(!popup)}>Open</Button>
      <Popup popup={popup} setPopup={setPopup}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, odio accusamus perspiciatis vel laudantium eos eveniet et impedit est hic quisquam deserunt obcaecati accusantium exercitationem ipsa dignissimos vero, optio in.</Popup>
      <PostList>
        {images.map((image) => (
            <PostItem image={image} key={uuidv4()} />
        ))}
      </PostList>
    </>
  )
}

import {useParams, NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Button from '../../components/Button';
import { PostCart } from '../../components/Post';

export const PostPage = () => {

  const images = useSelector((state)=> {
    return state.posts.images;
  });

  const {id} = useParams();

  const imageForPost = images.find(image => image.id == id);

  return (
    <>
      <NavLink to='/posts'>
        <Button secondary>Back to posts</Button>
      </NavLink>
      <PostCart image={imageForPost}/>
    </>
  )
}

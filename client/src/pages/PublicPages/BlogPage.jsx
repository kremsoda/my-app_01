import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import { PostList } from "../../components/Post";
import { BlogItem} from '../../components/Blog'


export const BlogPage = () => {
  
  const myPosts = useSelector((state) => {
    return state.posts.myPosts;
  });

  console.log(myPosts)

  return (
    <div>
      <PostList>
        {myPosts.map((post) => (
          <BlogItem post={post} key={uuidv4()} />
        ))}
      </PostList>
    </div>
  )
}
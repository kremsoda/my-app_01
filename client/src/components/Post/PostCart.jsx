

function PostCart({image}) {
    return(
        <div>
            <img style={{borderRadius:'5px', overflow:'hidden'}} src={image.urls.full} alt="img"/>
        </div>
    );
}

export default PostCart;
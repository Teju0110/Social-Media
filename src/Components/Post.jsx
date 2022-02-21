import React, { useState } from 'react'
import './Post.css'
import profile from "../Images/Profile.jpg";
import { MoreVert } from "@material-ui/icons";
import likeImg from '../Images/like.png'
import heartImg from '../Images/heart.png'
import { Users } from '../DummyData';


const Post = ({post}) => {
    const[like,setLike]=useState(post.like)
    const [isLiked, setIsLiked]=useState(false)

    const handleClick =()=>{
        setLike(isLiked ? like-1 :like+1)
        setIsLiked(!isLiked)
    }    
    
  return (
    <div className='post'>
        <div className='postContainer'>
            <div className='postTop'>
            <div className='postTopLeft'>
                <img src={Users.filter((u)=> u.id ===post ?.userId)[0].profilePicture} className='postProfileImage' alt=""/>
                <spam className='postUsrname'>{Users.filter((u)=> u.id ===post ?.userId)[0].username}</spam>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className='postTopRight'><MoreVert/></div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post.desc}</span>
                <img src={post.photo} className='postImg' alt=''/>
            </div>
            <div className='postBottom'>
            <div className='postBottomLeft'>
                <img className='likeIcon' src={likeImg} onClick={handleClick} alt=""/>
                <img className='likeIcon' src={heartImg} alt=""/>
                <span className='postLikeCounter'>{like} people liked it</span>
            </div>
            <div className='postBottomRight'>
                <span className='postCommentText'>{post.comment} Comment</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Post
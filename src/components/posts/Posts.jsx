import React from "react";
import "./posts.css";
import FirstPost from '../../img/first__post.png';
import SecondPost from '../../img/second__post.png';
import ThirdPost from '../../img/third__post.png';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import TimerIcon from '@material-ui/icons/Timer';

const Posts = () => {
    return (
        <div className="posts">

                <h3>Recent Posts</h3>
                <div className="post">
                <div className="first__post item">
                    <img src={FirstPost} alt="" />
                    <div className="text">
                    <h3>Post title goes here</h3>
                        
                        <div className="span_container">
                        <span className="span1"><TimerIcon/><span className="timer">10m ago</span></span>
                        <span className="span2"><ChatBubbleOutlineIcon/><span className="timer">10 comments</span></span>
                        </div>
                    </div>
                </div>
                <div className="second__post item">
                    <img src={SecondPost} alt="" />
                    <div className="text">
                    <h3>Post title goes here</h3>
                        
                        <div className="span_container">
                        <span className="span1"><TimerIcon/><span className="timer">10m ago</span></span>
                        <span className="span2"><ChatBubbleOutlineIcon/><span className="timer">10 comments</span></span>
                        </div>
                    </div>
                </div>
                <div className="third__post item">
                    <img src={ThirdPost} alt="" />
                    <div className="text">
                    <h3>Post title goes here</h3>
                        
                        <div className="span_container">
                        <span className="span1"><TimerIcon/><span className="timer">10m ago</span></span>
                        <span className="span2"><ChatBubbleOutlineIcon/><span className="timer">10 comments</span></span>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Posts

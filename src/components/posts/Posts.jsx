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

            <div className="headers"><h3><b>Recent Posts</b></h3><h5 className="view">View more</h5></div>
                <div className="post">
                <div className="first__post item">
                    <img src={FirstPost} alt="" />
                    <div className="text">
                    <h5 className='post__h3'>Shop easily online</h5>
                        
                        <div className="span_container">
                        <span className="span1"><TimerIcon/><span className="timer">10m ago</span></span>
                        <span className="span2"><ChatBubbleOutlineIcon/><span className="timer">10 comments</span></span>
                        </div>
                    </div>
                </div>
                <div className="second__post item">
                    <img src={SecondPost} alt="" />
                    <div className="text">
                    <h5 className='post__h3'>Walk into our nearby stores</h5>
                        
                        <div className="span_container">
                        <span className="span1"><TimerIcon/><span className="timer">10m ago</span></span>
                        <span className="span2"><ChatBubbleOutlineIcon/><span className="timer">10 comments</span></span>
                        </div>
                    </div>
                </div>
                <div className="third__post item">
                    <img src={ThirdPost} alt="" />
                    <div className="text">
                    <h5 className='post__h3'>Latest fashion trends</h5>
                        
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

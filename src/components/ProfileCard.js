import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProfileCard({username, avatar}){
    return (
    <div className="profile_card">
        <Link to={`/user_profile/${username}`}><h1>{username}</h1></Link>
        <img className="preview_photo" src={avatar} alt="Image Unavailable" />
    </div>
    )
}

export default ProfileCard
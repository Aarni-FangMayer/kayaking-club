import React, { useState } from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileForm from "../forms/ProfileForm";
import "./profileEditor.css";
import editImage from "../../assets/icons/edit_image.png"

const ProfileEditor = ( { userInfo } ) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="account__edit">
      <button className="account__edit-title" onClick={()=> setAccordion(!accordion)}><h3>Edit profile</h3><img src={editImage} alt="edit icon pencil" /></button>
      {accordion &&
        <div className="account__edit-content">
          <ProfileAvatar avatarImg={userInfo.image} btnText={"change avatar"} />
          <ProfileForm placeholderName={`Current name: ${userInfo.username}`} placeholderEmail={`Current email: ${userInfo.email}`} placeholderPhone={`Current phone: ${userInfo.phone}`} btnText={"Save"} />
        </div>
      }

    </div>
  );
};

export default ProfileEditor;

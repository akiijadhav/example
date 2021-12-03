import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

function Profile() {
  const [userProfile, setUserProfile] = useState([]);

  const history = useHistory();

  useEffect(() => {
    setUserProfile(history.location.state.data);
  }, [history.location.state.data, userProfile]);
  console.log(userProfile, "log user details");

  return (
    <div>
      show full details of the user
      <div>User Profile Details</div>
      <div>
        <ul>
          <li>
            <img alt="avatar" src={userProfile.avatar} />
            First Name : {userProfile.first_name}
            Last Name: {userProfile.last_name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;

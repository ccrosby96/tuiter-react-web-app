import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

const ProfileComponent = () => {
    const profileArray = useSelector(
        (state) => state.profile);
    const profile = profileArray[0]
    return (<>
            <div className="row mt-2">
                <div className="col-1">
                    <Link to="../home">
                        <FontAwesomeIcon icon="arrow-left"> </FontAwesomeIcon>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="text-dark fw-bold" >
                        {profile.Name}
                    </div>
                    <div className="text-secondary" >
                        {profile.tuitCount}  Tuits
                    </div>
                </div>
            </div>
        <img alt="" src={profile.bannerPicture} className="w-100"/>
        <div className="row position-relative mb-5">
            <div className="col-8">
                <img alt="" src={profile.profilePicture} className="wd-nudge-profile-up rounded-circle position-absolute border border-5 border-white m-0 p-0"
                width= "150"
                height = "150"/>
            </div>
            <div className="col-4">
                <Link to="../edit-profile">
                    <button className="float-end btn rounded-pill border bg-large bg-white fw-bold mt-2 me-2"> Edit profile</button>
                </Link>
            </div>
        </div>
            <br></br><br></br><br></br>

        <div className="ps-4 pb-4 mb-4">
            <div className="text-dark fw-bold" >
                {profile.Name}
            </div>
            <div className="text-secondary mb-1" >
                {profile.handle}
            </div>
            <div className="text-secondary  mb-1" >
                {profile.bio}
            </div>
            <div className="text-secondary mb-1">

                <FontAwesomeIcon icon= "location-dot"></FontAwesomeIcon>
                {profile.location}

                <FontAwesomeIcon icon= "birthday-cake" className="ms-3"></FontAwesomeIcon>
                <span >Born </span>
                {profile.dateOfBirth}
                <FontAwesomeIcon icon= "calendar" className="ms-3 me-1"></FontAwesomeIcon>
                <span>Joined </span>
                {profile.dateJoined}
            </div>
            <div className="text-secondary mb-2">
                <span className="text-dark fw-bold me-1">{profile.followingCount}</span>
                Following
                <span className="text-dark fw-bold me-1 ms-3">{profile.followersCount}</span>
                Follwers
            </div>

        </div>


            </>
    );
}
export default ProfileComponent;
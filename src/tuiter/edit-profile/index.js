import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateProfile} from "../reducers/profile-reducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const profileArray = useSelector(
        (state) => state.profile);
    const [profile, setProfile] = useState(profileArray[0])

    const updateProfileHandler = () => {
        dispatch(updateProfile(profile))
    }
    const updateProfileNameHandler = (target) => {
        setProfile({...profile, Name: target})
    }
    const updateProfileBioHandler = (newBio) => {
        setProfile({...profile, bio: newBio})
    }
    const updateProfileLocationHandler = (location) => {
        setProfile({...profile, location: location})
    }
    const updateProfileWebsiteHandler = (url) => {
        setProfile({...profile, website: url})
    }
    const updateProfileBirthdayHandler = (dob) => {
        setProfile({...profile, dateOfBirth: dob})
    }

    return (
        <>
            <div className="row mt-2 mb-1">
                <div className="col-2">
                    <Link to="../profile">
                        <FontAwesomeIcon icon="xmark" className= "float-start mt-2"></FontAwesomeIcon>
                    </Link>
                </div>
                <div className="col-6">
                    <div className="mt-2 text-dark float-start  fw-bold" >
                        Edit Profile
                    </div>
                </div>
                <div className="col-4">
                    <Link to="../profile">
                        <button onClick={() => updateProfileHandler()} className="mt-1 float-end btn rounded-pill bg-dark text-white fw-bold">
                            Save
                        </button>
                    </Link>
                </div>

            </div>
            <img alt="" src={profile.bannerPicture} className="w-100"/>
            <div className="row position-relative mb-5">
                <div className="col-8">
                    <img alt="" src={profile.profilePicture} className="wd-nudge-profile-up rounded-circle position-absolute border border-5 border-white m-0 p-0"
                         width= "150"
                         height = "150"/>
                </div>

            </div>
            <br></br><br></br>
            <div className="ps-4 pb-4 mb-4 mt-5">
                <form className="form-floating mb-4">
                    <input className="form-control text-dark w-100"
                           value={profile.Name}
                           id="name"
                           onChange={(event) => updateProfileNameHandler(event.target.value)}>
                    </input>
                    <label className="floatingInputValue" htmlFor="name"> name</label>
                </form>
                <form className="form-floating mb-4">
                    <textarea className="form-control text-dark w-100"
                              value={profile.bio}
                              id="bio"
                              onChange={(event) => updateProfileBioHandler(event.target.value)}>
                    </textarea>
                    <label className="floatingInputValue" htmlFor="bio"> Bio</label>
                </form>
                <form className="form-floating mb-4">
                    <input className="form-control text-dark w-100"
                           value={profile.location}
                           id="location"
                           onChange={(event) => updateProfileLocationHandler(event.target.value)}>
                    </input>
                    <label className="floatingInputValue" htmlFor="location"> Location</label>
                </form>
                <form className="form-floating mb-3">
                    <input className="form-control text-dark w-100"
                           value={profile.website}
                           id="website"
                           onChange={(event) => updateProfileWebsiteHandler(event.target.value)}>

                    </input>
                    <label className="floatingInputValue" htmlFor="url goes here">Website</label>
                </form>
                <form className="form-floating mb-3">
                    <input type="date" className="form-control text-dark w-100"
                           value={profile.dateOfBirth}
                           onChange={(event) => updateProfileBirthdayHandler(event.target.value)}>
                    </input>
                </form>

                <div className="text-dark mt-3">
                    Switch to Professional

                    <FontAwesomeIcon icon="chevron-right" className="float-end"></FontAwesomeIcon>
                </div>
            </div>


            </>
    )
};

export default EditProfileComponent;
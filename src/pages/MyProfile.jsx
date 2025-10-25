import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      toast("No logged-in user found!");
      return;
    }

    setLoading(true);
    try {
      await updateProfile(currentUser, {
        displayName,
        photoURL,
      });

    
      setUser({
        ...currentUser,
        displayName,
        photoURL,
      });

      toast("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast("Error updating profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 mb-10 shadow-lg  rounded-lg bg-base-100">
      <h1 className="text-2xl font-bold ">My Profile</h1>

      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col items-center">
          <img
            src={photoURL || "https://via.placeholder.com/100"}
            alt={displayName || "User"}
            className="w-24 h-24 rounded-full mb-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Display Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
          />
        </div>

        <button
          onClick={handleUpdateProfile}
        
          className="btn btn-primary w-full"
        >
        Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;

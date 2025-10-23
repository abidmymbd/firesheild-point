import React, { useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [newName, setNewName] = useState("");
    const [newPhoto, setNewPhoto] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleUpdate = () => {
        if (!newName && !newPhoto) return;

        updateProfile(auth.currentUser, {
            displayName: newName || user.displayName,
            photoURL: newPhoto || user.photoURL,
        })
            .then(() => {
                alert("Profile updated successfully!");
                setUser({ ...auth.currentUser });
                setNewName("");
                setNewPhoto("");
            })
            .catch((err) => console.log(err));
    };

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-xl font-semibold">Loading user info...</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center mt-10 w-11/12 mx-auto">
            <img
                src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="User"
                className="w-32 h-32 rounded-full border-4 border-gray-300"
            />
            <h2 className="text-2xl my-3 font-bold">{user.displayName || "No Name"}</h2>
            <p className="text-gray-600">{user.email}</p>

            <div className="card bg-base-200 p-6 mt-4 w-full max-w-md space-y-3">
                <input
                    type="text"
                    placeholder="New Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="input input-bordered w-full"
                />
                <input
                    type="text"
                    placeholder="New Photo URL"
                    value={newPhoto}
                    onChange={(e) => setNewPhoto(e.target.value)}
                    className="input input-bordered w-full"
                />
                <button
                    onClick={handleUpdate}
                    className="btn btn-primary w-full">
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;

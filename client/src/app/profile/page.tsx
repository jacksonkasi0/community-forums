'use client';
import { useEffect, useState } from "react";

// ** API
import { getUserProfile } from "@/api/user/get-profile";

// ** Types
import { UserProfile } from "@/types/user";

const ProfilePage = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUserProfile()
      .then(setProfile)
      .catch((err) => {
        console.error("Failed to fetch profile:", err);
        setError("Unable to load profile");
      });
  }, []);

  if (error) return <div>{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.email}</p>
      {profile.profile_pic && (
        <img src={profile.profile_pic} alt={profile.name} />
      )}
      <small>Joined: {new Date(profile.created_at).toLocaleDateString()}</small>
    </div>
  );
};

export default ProfilePage;

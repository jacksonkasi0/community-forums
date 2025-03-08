// ** Axios Instance
import axiosInstance from "@/api/axios";

// ** Types
import { UserProfile } from "@/types/user";

/**
 * Fetch the authenticated user's profile.
 *
 * @returns {Promise<UserProfile>} - The user profile data.
 */
export const getUserProfile = async (): Promise<UserProfile> => {
  // Make a GET request to the /user/profile endpoint.
  const response = await axiosInstance.get<UserProfile>("/user/profile");
  return response.data;
};

import axios from "axios";
export const BASE_URL = "https://awf-api.lvl99.dev";
let token = null;
let currentUser = null

export async function login() {
  const username = "rwagubi3110";
  const password = "8923110";

  try {
    const response = await axios.post(BASE_URL + "/auth/login", {
      username: username,
      password: password,
    });

    token = response.data.access_token;

    currentUser = response.data.user;
    //console.log(currentUser.firstName, currentUser.lastName);

    return currentUser;
  } catch (error) {
    console.log("Login failed:", error);
    throw error;
  }
}

// get auth headers 
export function getAuthHeaders() {
  return {
    Authorization: "Bearer " + token,
  };
}

// User Profile
export async function getUser() {
  if (!token) {
    await login();
  }

  try {
    const response = await axios.get(BASE_URL + "/auth/profile", {
      headers: getAuthHeaders(),
    });

    // console.log("data:", response.data);

    return response.data;
  } catch (error) {
    console.log("Error getting user profile:", error);
    throw error;
  }
}

export async function getForums() {
  if (!token) {
    await login();
  }

  try {
    const response = await axios.get(BASE_URL + "/forums", {
      headers: getAuthHeaders(),
    });

    return response.data;
  } catch (error) {
    console.log("Error getting forums:", error);
    throw error;
  }
}
export async function getPostsByForum(slug) {
  if (!token) {
    await login();
  }

  try {
    const response = await axios.get(BASE_URL + "/forums/" + slug + "?sortBy=hot&limit=10", {
      headers: getAuthHeaders(),
    });

    return response.data;
  } catch (error) {
    console.log("Error getting posts by forum:", error);
    throw error;
  }
}

//Posts By IDs
export async function getPostsByIds(ids) {
  if (!token) {
    await login();
  }
  try {
    const response = await axios.post(BASE_URL + "/posts", { ids: ids }, {
      headers: getAuthHeaders(),
    });

    return response.data;
  } catch (error) {
    console.log("Error getting posts by IDs:", error);
    throw error;
  }
}

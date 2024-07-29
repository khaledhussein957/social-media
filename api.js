import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const registerUser = (data) => api.post('/register-user', data);
export const loginUser = (data) => api.post('/login-user', data);
export const getAllUser = () => api.get('/all-users');
export const getUserProfile = (id) => api.get(`/profile/${id}`);
export const updateUserProfile = (id, data) => api.put(`/update-profile/${id}`, data);
export const deleteUserProfile = (id) => api.delete(`/delete-profile/${id}`);

export const createPost = (data) => api.post('/create-post', data);
export const getPost = (id) => api.get(`/posts/${id}`);
export const getAllPost = () => api.get('/all-posts');
export const updatePost = (id, data) => api.put(`/update-posts/${id}`, data);
export const deletePost = (id) => api.delete(`/delete-posts/${id}`);

export const createComment = (postId, data) => api.post(`/posts/${postId}/comments`, data);
export const getComment = (postId, id) => api.get(`/posts/${postId}/comments/${id}`);
export const updateComment = (postId, id, data) => api.put(`/posts/${postId}/comments/${id}`, data);
export const deleteComment = (postId, id) => api.delete(`/posts/${postId}/comments/${id}`);

export const followUser = (id) => api.post(`/users/${id}/follow`);
export const unfollowUser = (id) => api.delete(`/users/${id}/unfollow`);
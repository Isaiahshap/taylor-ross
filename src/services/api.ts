import axios from 'axios';

// Replace with your real WordPress URL
const API_BASE_URL = 'https://yourwordpresssite.com/wp-json/wp/v2';

export const fetchPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

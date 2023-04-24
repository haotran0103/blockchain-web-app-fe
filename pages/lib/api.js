import axios from 'axios';

export async function fetchData() {
  const response = await axios.get('/api/data');
  return response.data;
}

export async function updateData() {
  const response = await axios.post('/api/data/update');
  return response.data;
}

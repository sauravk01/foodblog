let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";

export const getData = async (url, token) => {
  console.log("url", `${BASE_URL}/api/${url}`);
  const res = await axios.get(`${BASE_URL}/api/${url}`);
  const data = await res.data;
  return data;
};

export const postData = async (url, post, token) => {
  const res = await axios.post(`${BASE_URL}/api/${url}`, post, {
    headers: {
      Authorization: token,
    },
  });
  const data = await res.data;
  return data;
};

export const putData = async (url, post, token) => {
  const res = await axios.put(`${BASE_URL}/api/${url}`, post, {
    headers: {
      Authorization: token,
    },
  });

  const data = await res.data;
  return data;
};

export const patchData = async (url, post, token) => {
  const res = await axios.patch(`${BASE_URL}/api/${url}`, post, {
    headers: {
      Authorization: token,
    },
  });
  const data = await res.data;
  return data;
};

export const deleteData = async (url, token) => {
  const res = await axios.delete(`${BASE_URL}/api/${url}`, {
    headers: {
      Authorization: token,
    },
  });
  const data = await res.data;
  return data;
};

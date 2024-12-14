import axios from "axios";
import { Api_Url } from "./URL";


const GetApi = async (apiEndpoint) => {
  try {
    const response = await axios.get(`${Api_Url}/${apiEndpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const PostApi = async (apiEndpoint, data) => {
  try {
    const response = await axios.post(`${Api_Url}/${apiEndpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

const PutApi = async (apiEndpoint, data) => {
  try {
    const response = await axios.put(`${Api_Url}/${apiEndpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error putting data:', error);
    throw error;
  }
};


const DeleteApi = async (apiEndpoint) => {
  try {
    const response = await axios.delete(`${Api_Url}/${apiEndpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};



export { GetApi, PostApi, PutApi,DeleteApi }
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      toast.error('Incorrect data entered', {
        position: toast.POSITION.TOP_CENTER,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await axios.post('/users/logout');
    clearToken();
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  'async/refreshUser',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if (token) {
      setToken(token);
      try {
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    } else {
      return thunkAPI.rejectWithValue("Can't refresh current user");
    }
  }
);

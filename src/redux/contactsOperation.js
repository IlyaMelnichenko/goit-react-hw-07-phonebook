import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// First, create the thunk
const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)
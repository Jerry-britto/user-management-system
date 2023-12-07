import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  domain: "",
  page: 1,
  totalPages: 50,
  gender: "",
  available: "",
  clickable:false,
  group:[]
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.page = state.page + 1;
    },
    prevPage: (state, action) => {
      state.page = state.page - 1;
    },
    searchUser: (state, action) => {
      state.name = action.payload;
      state.page = 1;
    },
    filterDomain: (state, action) => {
      state.domain = action.payload;
    },
    filterGender: (state, action) => {
      state.gender = action.payload;
    },
    filterAvailable:(state,action)=>{
      state.available = action.payload
    },
    setChange:(state,action)=>{
      state.clickable = !state.clickable;
    },
    addToGroup:(state,action)=>{
      state.group = [...state.group,action.payload]
    },
    removeFromGroup:(state,action)=>{
      state.group =  state.group.filter((item) => item !== action.payload)
    },
    emptyGroup:(state,action)=>{
      state.group = [];
    }
  },
});

export const {
  setUser,
  nextPage,
  prevPage,
  searchUser,
  filterDomain,
  filterGender,
  filterAvailable,
  setChange,
  addToGroup,
  removeFromGroup,
  emptyGroup
} = user.actions;

export default user.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface MainState {
  search: boolean;
  add: boolean;
  toggle:boolean;
}

const initialState: MainState = {
  search: false,
  add: false,
  toggle:false
};

export const MainSlice = createSlice({
  name: "Initial",
  initialState,
  reducers: {
    handleInitialSearch: (state) => {
      state.search = true;
    },
    handleInitialSearchStop: (state) => {
      state.search = false;
    },
    handleAddModalOpen: (state) => {
      state.add = true;
    },
    handleAddModalClose: (state) => {
      state.add = false;
    },
    handleToggle: (state) => {
      state.toggle =!state.toggle;
    },
  },
});

export const {
  handleInitialSearch,
  handleInitialSearchStop,
  handleAddModalOpen,
  handleAddModalClose,
  handleToggle
} = MainSlice.actions;

export default MainSlice.reducer;

export type RootState = {
  Initial: MainState;
};

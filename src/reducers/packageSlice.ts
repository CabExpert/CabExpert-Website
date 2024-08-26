// reducers/packageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PackageState {
  selectedPackage: string | null; // Assuming package is identified by a string ID or name
}

const initialState: PackageState = {
  selectedPackage: null,
};

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    selectPackage: (state, action: PayloadAction<string>) => {
      state.selectedPackage = action.payload;
    },
    clearPackage: (state) => {
      state.selectedPackage = null;
    },
  },
});

export const { selectPackage, clearPackage } = packageSlice.actions;
export default packageSlice.reducer;

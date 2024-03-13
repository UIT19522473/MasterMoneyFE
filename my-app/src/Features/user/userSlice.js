import { createSlice } from "@reduxjs/toolkit";
import { userLoginRedux } from "./userAsync";

const initialState = {
  // isLoading: false,
  // success: false,
  accessToken: "",
  message: "",
  // errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    newAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    UserLogin: (state, action) => {
      state.accessToken = action.payload.data || "";
      state.message = action.payload.message || "";
    },

    UserLogout: (state, action) => {
      // state.isLoading = false;
      // state.success = false;
      state.accessToken = "";
      state.message = "";
    },

    // removeWishlist: (state, action) => {
    //   state.currentUser.wishlist = state.currentUser.wishlist.filter(
    //     (item) => item !== action.payload
    //   );
    // },

    // addWishlist: (state, action) => {
    //   state.currentUser.wishlist = [
    //     ...state.currentUser.wishlist,
    //     action.payload,
    //   ];
    // },
  },

  // Code logic xử lý async action
  // extraReducers: (builder) => {
  //   // Bắt đầu thực hiện action login (Promise pending)
  //   builder.addCase(userLoginRedux.pending, (state) => {
  //     // Bật trạng thái loading
  //     state.isLoading = true;
  //   });

  //   // Khi thực hiện action login thành công (Promise fulfilled)
  //   builder.addCase(userLoginRedux.fulfilled, (state, action) => {
  //     // Tắt trạng thái loading, lưu thông tin user vào store

  //     console.log(action.payload);

  //     state.isLoading = false;
  //     state.success = true;
  //     //   state.currentUser = action.payload.data || null;
  //     state.accessToken = action.payload.data || "";
  //     state.message = action.payload.message || "";
  //   });

  //   // Khi thực hiện action login thất bại (Promise rejected)
  //   builder.addCase(userLoginRedux.rejected, (state, action) => {
  //     // Tắt trạng thái loading, lưu thông báo lỗi vào store
  //     state.isLoading = false;
  //     state.success = false;
  //     state.accessToken = "";
  //     state.message = "Server is not working";
  //   });
  // },
});

// Action creators are generated for each case reducer function
export const { UserLogin, UserLogout, newAccessToken } = userSlice.actions;

export default userSlice.reducer;

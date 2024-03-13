import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiLogin } from "../../apis/userApis";
// import { apiLogin } from "../../apis/apiUser";

//login by thunk
export const userLoginRedux = createAsyncThunk(
  // Tên action
  "user/login",
  //   Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  //   data: { email, password, setWaitLogin, setErrorLogin }
  async (data, { rejectWithValue }) => {
    const { email, password } = data;

    const response = await apiLogin({
      email,
      password,
    });

    const jsonData = response.data;

    // Nếu bị lỗi thì reject
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(jsonData);
    }

    // Còn không thì trả về dữ liệu
    return jsonData;
  }
);

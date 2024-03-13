import axios from "axios";

// api confirm register: data: {token}
const testGet = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_URL_SERVER_API}/users/test`
    // {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     // Thêm các headers khác nếu cần
    //   },
    //   withCredentials: true,
    // }
  );
  return response;
};

export { testGet };

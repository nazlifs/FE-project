import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gray-300 flex ">
      <div className="w-[468px] h-[495px] bg-white border-gray-300 shadow-md m-auto rounded-lg px-[50px] py-14">
        <div className="">
          <h1 className="text-2xl font-bold mb-3.5">Welcome Back</h1>
          <span className="mr-1 text-sm">Don't have account?</span>
          <button
            onClick={() => navigate("/signup")}
            className="font-bold text-sm"
          >
            Sign Up
          </button>
        </div>
        <div className="gap-y-5 my-10">
          <span>Username</span>
          <input
            type="text"
            placeholder="enter your username"
            className="w-full border-2 rounded-lg p-3 my-2"
          />
          <span>Password</span>
          <input
            type="password"
            placeholder="enter your password"
            className="w-full border-2 rounded-lg p-3 my-2"
          />
        </div>
        <div className="">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white rounded-lg p-2"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex bg-gray-300">
      <div className="w-[468px] h-[686px] bg-white border-gray-300 shadow-md m-auto rounded-md py-[60px] px-[50px]">
        <div className="text-sm">
          <h1 className="text-2xl font-semibold mb-3.5">Sign Up</h1>
          <span className="mr-1">Already have an account?</span>
          <button
            onClick={() => navigate("/")}
            className="font-semibold text-sm"
          >
            Sign In
          </button>
        </div>
        <div className="gap-y-5 my-10">
          <span>Name</span>
          <input
            type="text"
            placeholder="enter your name"
            className="w-full border-2 rounded-lg p-3 my-2"
          />
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
          <span>Confirm Password</span>
          <input
            type="password"
            placeholder="enter your password"
            className="w-full border-2 rounded-lg p-3 my-2"
          />
        </div>
        <button className="w-full rounded-lg p-3 bg-blue-500 hover:bg-blue-700 text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;

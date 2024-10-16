import Footer from "../footer";

const ForgotPw = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20 bg-white px-5">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700">
          Forgot your password?
        </h1>
        <p className="text-gray-500 font-bold mt-5">
          Don&apos;t worry, we got your back!
        </p>
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center w-full max-w-[500px]">
        <input
          type="email"
          placeholder="Enter your email address to get link"
          className="border border-gray-300 rounded-xl py-3 md:py-5 px-5 w-full md:min-w-[300px]"
        />
        <button className="bg-yellow-500 shadow-lg font-bold px-8 py-3 md:py-5 md:ml-5 rounded-2xl active:bg-yellow-600 mt-4 md:mt-0 w-full md:w-auto">
          Send
        </button>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-700 font-semibold">
          Click here if you didn’t receive any link
          <br /> in 2 minutes
        </p>
        <div className="bg-[#6A4029] text-white shadow-[#6A402975] shadow-md font-bold py-4 md:py-5 px-5 md:px-6 rounded-lg mt-4 cursor-pointer active:scale-95 transition duration-300">
          Resend Link
        </div>
        <p className="mt-4 font-semibold text-gray-700">01:54</p>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPw;
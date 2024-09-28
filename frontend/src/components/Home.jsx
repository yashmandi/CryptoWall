import React from "react";
import logo from "../assets/image.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={logo} alt="HomepageLogo" className="w-[130px] mt-3 mb-2   " />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-[22px]">Welcome to CryptoWall!</p>
        <p className="text-[14px]">
          Your first step towards securing your crypto.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-12">
        <h4
          className="text-[16px] bg-white text-gray-800 px-3 cursor-pointer hover:bg-[#1B1B1B] border-white border-2 hover:text-white rounded-md"
          onClick={() => navigate("/your-wallet")}
        >
          Create a Wallet
        </h4>
        <h4
          className="text-[15px] mt-4 bg-white text-gray-800 px-2.5 cursor-pointer hover:bg-[#1B1B1B] border-white border-2 hover:text-white rounded-md"
          onClick={() => navigate("/recover")}
        >
          Sign in with Seed Phrase
        </h4>
      </div>

      <div className="flex justify-center items-end h-[160px]">
        <p className="text-xs font-normal">
          Developed by{" "}
          <a
            href="https://github.com/yashmandi"
            target="_blank"
            className="hover:underline font-semibold"
          >
            @yashmandi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;

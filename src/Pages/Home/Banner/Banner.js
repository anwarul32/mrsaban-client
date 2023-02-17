import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://i.ibb.co/9h7Djjw/kaffeebart-RTBGLx0-K1-Ns-unsplash.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className=" text-xl mb-5">
              <Link to="/services" className="text-blue-500">
                MRSHABAN.COM.BD
              </Link>{" "}
              হোলো একটি অনলাইন ও অফলাইন ভীতিক হোম সার্ভিস প্লোটফর্ম যা বড়
              প্ররিসরে গ্রহকের চাহিদার ভীতিতে সার্ভিস দিয়ে থাকে। আপনাদের প্রয়োজনীয় সকল সার্ভিস যেমন
              ইলেকট্রনিক্স এন্ড ইলেকট্রিক্যাল, হাউজ ওয়ারিং,ইন্ডাস্ট্রিয়াল
              ওয়ারিং,এসি, রিফ্রেজিটার, আই.পি.এস, স্যানেটারী এন্ড প্লাম্বিং,
              আইটি,সিসিটিবি ক্যামরা, সোলার প্যানেল, মাইক এন্ড সাউন্ড সিস্টেম
              ইত্যাদি । আমাদের রয়েছে একদল প্রশিক্ষিত শু-দক্ষ
              ইলেক্টেশিয়ান,প্লাম্বার ও টেকনিশিয়ান ।
            </p>
            
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

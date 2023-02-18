import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h2 className="my-4 font-bold text-orange-500 text-3xl ml-4">
        This is About Us Section
      </h2>
      <p className="text-xl mx-5">
        <Link to="/services" className="text-blue-500">
          MRSHABAN
        </Link>{" "}
        হোলো একটি অনলাইন ও অফলাইন ভীতিক হোম সার্ভিস প্লোটফর্ম যা বড় প্ররিসরে
        গ্রহকের চাহিদার ভীতিতে সার্ভিস দিয়ে থাকে। আমরা আপনাদের বেস্ততার কথা
        চিন্তা করে আপনাদের প্রয়োজনীয় সকল সার্ভিস যেমন ইলেকট্রনিক্স এন্ড
        ইলেকট্রিক্যাল, হাউজ ওয়ারিং,ইন্ডাস্ট্রিয়াল ওয়ারিং,এসি, রিফ্রেজিটার,
        আই.পি.এস, স্যানেটারী এন্ড প্লাম্বিং, আইটি,সিসিটিবি ক্যামরা, সোলার
        প্যানেল, মাইক এন্ড সাউন্ড সিস্টেম ইত্যাদি সার্ভিসিং ও সার্ভিস নিয়ে হাজির
        আপনার দৌড় গোড়ায়, এ সকল সার্ভিস নিয়ে আপনাকে দৌরাতে হবে না বরং আমরা যাবো
        আপনার কাছে,আপনাদের সিংগেল কল বা এসএমএস এ সার্ভিস দেওয়ার জন্য প্রস্তুত
        আমাদের টেকনিশিয়ান। আমাদের রয়েছে একদল প্রশিক্ষিত শু-দক্ষ
        ইলেক্টেশিয়ান,প্লাম্বার ও টেকনিশিয়ান,যারা অতান্ত আধুনিক টুলস মাধ্যমে
        আপনার কাজ খুবই দক্ষতার সাথে নিখুঁতভাবে সম্পুর্ন করে থাকে,আমাদের রয়েছে
        আপনার হাতের মুঠো, আপনার দৌরগোড়ায় থেকে একটি মাএ কল দুরে,আমরা আপনার সিংগেল
        কলে আপনার গন্তব্য সার্ভিস দেওয়ার জন্য সর্বদায় প্রস্তুত থাকি ২৪/৭;
      </p>
      <p className="m-4 text-3xl font-bold">
        আমরা সকল গ্রহকের অর্ড়ার খুব গুরুত্বের সাথে বিবেচনা করি ও যতদ্রুত সম্ভব সার্ভিস দিয়ে থাকি।
      </p>
    </div>
  );
};

export default About;

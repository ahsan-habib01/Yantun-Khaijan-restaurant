"use client";
import Image from "next/image";
import { useState } from "react";

export default function ReviewCard({ review }) {
  const { user, email, photo, rating, review: text, likes, date } = review;

  const [likeCount, setLikeCount] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="border rounded-xl p-5 shadow-md hover:shadow-lg transition">
      {/* User Info */}
      <div className="flex items-center gap-4">
        {/* <img
          src={photo}
          alt={user}
          className="w-14 h-14 rounded-full object-cover border"
        /> */}

        <Image 
          src={photo}
          alt={user}
          className="w-14 h-14 rounded-full object-cover border"
          width={56}
          height={56}
        ></Image>

        <div>
          <h3 className="font-semibold text-lg">{user}</h3>
          <p className="text-gray-600 text-sm">{email}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3 text-yellow-500">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i}>★</span>
          ))}
        {Array(5 - rating)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-gray-300">
              ★
            </span>
          ))}
      </div>

      {/* Review Text */}
      <p className="mt-3 text-gray-500 leading-relaxed">{text}</p>

      {/* Date */}
      <p className="text-gray-400 text-sm mt-3">
        {new Date(date).toLocaleDateString("en-US")}
      </p>

      {/* Like Button */}
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={handleLike}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
            isLiked
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-gray-700 hover:bg-gray-600 border-gray-400"
          }`}
        >
          {isLiked ? "Liked ❤️" : "Like 🤍"}
        </button>

        <span className="text-sm text-gray-600">{likeCount} likes</span>
      </div>
    </div>
  );
}

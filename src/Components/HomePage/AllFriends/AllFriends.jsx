import React, { use } from "react";
import FriendCard from "../FriendCard/FriendCard";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const AllFriends = () => {
  const friendsData = use(friendsPromise);

  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <h3 className="font-semibold text-[#1F2937] text-2xl mb-2">
        Your Friends
      </h3>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {friendsData.map((friend, index) => (
          <FriendCard key={index} friend={friend}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;

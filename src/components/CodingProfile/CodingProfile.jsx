import React from "react";

const CodingProfiles = () => {
  // Sample data for coding profiles
  const profiles = [
    {
      platform: "LeetCode",
      username: "algoacer",
      url: "https://leetcode.com/algoacer/",
      img: "../src/assets/leetcode.png"
    },
    {
      platform: "Codeforces",
      username: "algoacer",
      url: "https://codeforces.com/profile/algoacer",
      img: "../src/assets/codeforces.png"
    },
    {
      platform: "CodeChef",
      username: "h_arsh79",
      url: "https://www.codechef.com/users/h_arsh79",
      img: "../src/assets/codechef.png"
    },
    // Add more profiles as needed
  ];

  // some api for usage
  // https://codeforces.com/api/user.info?handles=algoacer
  // https://codeforces.com/api/user.rating?handle=algoacer
  // https://leetcode-stats-api.herokuapp.com/algoacer
  // https://codechef-api.vercel.app/h_arsh79

  // const leetcodeApi = fetch('https://leetcode-stats-api.herokuapp.com/algoacer')
  // console.log(leetcodeApi);

  return (
    <>
    <div className="md:h-1/2">
    <h1 className="text-2xl font-semibold my-4">My Coding Profiles</h1>
      
    <div className="bg-gray-100 p-4 overflow-x-auto whitespace-nowrap">
      <div className="flex space-x-4 justify-evenly p-3">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="w-60 bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out
            flex justify-between"
          >
            <h2 className="text-xl font-semibold">{profile.platform}</h2>
            <p className="text-blue-500 hover:underline ">
              <img src={profile.img}/>
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                {profile.username}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default CodingProfiles;

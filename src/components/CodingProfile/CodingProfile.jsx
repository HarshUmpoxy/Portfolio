// import React, { useState, useEffect } from "react";
// import {LeetcodeProfile} from './LeetCode';

// const CodingProfiles = () => {
//   // Sample data for coding profiles
//   const profiles = [
//     {
//       platform: "LeetCode",
//       username: "algoacer",
//       url: "https://leetcode.com/algoacer/",
//       img: "../src/assets/leetcode.png"
//     },
//     {
//       platform: "Codeforces",
//       username: "algoacer",
//       url: "https://codeforces.com/profile/algoacer",
//       img: "../src/assets/codeforces.png"
//     },
//     {
//       platform: "CodeChef",
//       username: "h_arsh79",
//       url: "https://www.codechef.com/users/h_arsh79",
//       img: "../src/assets/codechef.png"
//     },
//     // Add more profiles as needed
//   ];

//   // some api for usage
//   // https://codeforces.com/api/user.info?handles=algoacer
//   // https://codeforces.com/api/user.rating?handle=algoacer
//   // https://leetcode-stats-api.herokuapp.com/algoacer
//   // https://codechef-api.vercel.app/h_arsh79

//   // const leetcodeApi = fetch('https://leetcode-stats-api.herokuapp.com/algoacer')
//   // console.log(leetcodeApi);
//   const [leetProfileData, setLeetProfileData] = useState(null);
//   useEffect(() => {
//     async function fetchLeetcodeProfile() {
//       try {
//         const data = await LeetcodeProfile();
//         setLeetProfileData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchLeetcodeProfile();
//   }, []);

//   return (
//     <>
//     <div className="md:h-1/2">
//     <h1 className="text-2xl font-semibold my-4">My Coding Profiles</h1>
      
//     <div className="bg-gray-100 p-4 overflow-x-auto whitespace-nowrap">
//       <div className="flex space-x-4 justify-evenly p-3">
//         {profiles.map((profile, index) => (
//           <div
//             key={profile}
//             className="w-60 bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out
//             flex justify-between"
//           >
//             <h2 className="text-xl font-semibold">{profile.platform}</h2>
//             <p className="text-blue-500 hover:underline ">
//               <img src={profile.img}/>
//               <a href={profile.url} target="_blank" rel="noopener noreferrer">
//                 {profile.username}
//               </a>
//               <div className="p-4">
//                 <h1 className="text-2xl font-bold mb-4">Leetcode Profile</h1>
//                 {leetProfileData ? (
//                   <div className="bg-white p-4 rounded shadow-md">
//                     <p>Acceptance Rate: {leetProfileData.acceptanceRate}%</p>
//                     <p>Easy Questions: {leetProfileData.easySolved}</p>
//                     <p>Medium Questions: {leetProfileData.mediumSolved}</p>
//                     <p>Hard Questions: {leetProfileData.hardSolved}</p>
//                     <p>Total Questions: {leetProfileData.totalSolved}</p>
//                   </div>
//                 ) : (
//                   <p>Loading...</p>
//                 )}
//               </div>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default CodingProfiles;
import React, { useState, useEffect } from "react";
import { LeetcodeProfile } from './LeetCode';
import { CodeforcesProfile } from './Codeforces';
import { CodechefProfile} from './Codechef';

// Create a separate ProfileCard component
const ProfileCard = ({ platform, username, url, img, profileData }) => {
  return (
    <div className="flex-shrink-0 max-md:w-full  w-60 bg-white p-4 rounded-md shadow-sm hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-xl font-semibold">{platform}</h2>
      <div className="text-white font-semibold flex flex-col justify-center">
        <div className="flex flex-row items-center justify-around pt-6 text-blue-700 hover:underline">
          <img src={img} alt={platform} />
          <a href={url} target="_blank" rel="noopener noreferrer">
            {username}
          </a>
        </div>
        {platform === "LeetCode" && profileData && (
          <div className="p-4">
            {/* <h1 className="text-2xl font-bold mb-4">Leetcode Profile</h1> */}
            <div className="bg-yellow-400 p-4 rounded shadow-md">
              <p>Acceptance: {profileData.acceptanceRate}%</p>
              <p>Easy: {profileData.easySolved}</p>
              <p>Medium: {profileData.mediumSolved}</p>
              <p>Hard: {profileData.hardSolved}</p>
              <p>Total: {profileData.totalSolved}</p>
            </div>
          </div>
        )}
        {platform === "Codeforces" && profileData && (
          <div className="p-4">
            {/* <h1 className="text-2xl font-bold mb-4">Codeforces Profile</h1> */}
            <div className="bg-blue-400 p-4 rounded shadow-md">
              <p>Max Rank: {profileData.result[0].maxRank}</p>
              <p>Max Rating: {profileData.result[0].maxRating}</p>
            </div>
          </div>
        )}
        {platform === "CodeChef" && profileData && (
          <div className="p-4">
            {/* <h1 className="text-2xl font-bold mb-4">Codechef Profile</h1> */}
            <div className="bg-[#964B00] p-4 rounded shadow-md">
              <p>Highest Rating: {profileData.highestRating}</p>
              <p>Country Rank: {profileData.countryRank}</p>
              <p>Stars: {profileData.stars}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CodingProfiles = () => {
  const [leetProfileData, setLeetProfileData] = useState(null);
  const [codeforcesProfileData, setCodeforcesProfileData] = useState(null);
  const [codechefProfileData, setCodechefProfileData] = useState(null);

  useEffect(() => {
    async function fetchLeetcodeProfile() {
      try {
        const data = await LeetcodeProfile();
        setLeetProfileData(data);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchLeetcodeProfile();
  }, []);

  useEffect(()=>{
    async function fetchCodeforcesProfile() {
      try {
        const data = await CodeforcesProfile();
        setCodeforcesProfileData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCodeforcesProfile();
  }, []);

  useEffect(()=>{
    async function fetchCodechefProfile() {
      try {
        const data = await CodechefProfile();
        console.log("codechef",data);
        setCodechefProfileData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCodechefProfile();
  }, [])

  const profiles = [
    {
      platform: "LeetCode",
      username: "algoacer",
      url: "https://leetcode.com/algoacer/",
      img: "../src/assets/leetcode.png",
      profileData: leetProfileData,
    },
    {
      platform: "Codeforces",
      username: "algoacer",
      url: "https://codeforces.com/profile/algoacer",
      img: "../src/assets/codeforces.png",
      profileData: codeforcesProfileData,
    },
    {
      platform: "CodeChef",
      username: "h_arsh79",
      url: "https://www.codechef.com/users/h_arsh79",
      img: "../src/assets/codechef.png",
      profileData: codechefProfileData,
    }
    
  ];

  return (
    <div className="md:h-1/2">
      <h1 className="text-2xl font-semibold my-4">My Coding Profiles</h1>
      <div className="bg-gray-100 p-4 overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-12 justify-around p-3">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;

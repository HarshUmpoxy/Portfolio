export async function LeetcodeProfile(){
    try{
    const response = await fetch('https://leetcode-stats-api.herokuapp.com/algoacer');
    const data = await response.json();//await is must here, as response.json takes time
    console.log(data);
return data;
    }
    catch(err){
    console.log(err);
const obj= {
  'acceptanceRate': 56.56,
  'easy': 115,
  'medium': 255,
  'hard': 80,
  'totalQ': 450
}
return obj;
    }
};

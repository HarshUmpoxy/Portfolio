export async function CodeforcesProfile(){
    try{
    const response = await fetch('https://codeforces.com/api/user.info?handles=algoacer');
    const data = await response.json();//await is must here, as response.json takes time
    console.log(data);
    return data;
    }
    catch(err){
        console.log(err);
        const obj= {
        'maxRank': newbie,
        'maxRating': 1169,
        }
        return obj;
    }
};

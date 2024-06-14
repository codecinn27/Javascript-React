const axiosRequest = require('axios')

async function getActivity(){
    try{
        let response = await axiosRequest.get('https://www.boredapi.com/api/activity');
        console.log(`You could ${response.data.activity}`);
    }catch(error){
        console.error(`Error: ${error}`);
    }
}

getActivity()
setInterval(getActivity,1000);

//references: https://youtu.be/li7FzDHYZpc?si=3e-aZwjOi8dnhjDV
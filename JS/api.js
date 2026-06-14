import axios from 'axios'
import cors from 'cors'

const API = async () => {
    try{
    const { data } = await axios.get("https://api.exchangerate.host/latest", {
        params:{
            base: "USD",
            symbols: "BRL"
        }
    })
    console.log(data)
}
    catch(error){
        console.log("pau no axios", { error })
    }   
}
API()


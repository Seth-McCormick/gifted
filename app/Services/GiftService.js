import { ProxyState } from "../AppState.js";


let params = {
    api_key: "j6dzSfJmFuKhP0lTPWgZ8BtAL1Fnm3gP",
    rating: "pg",
    q: '',
    limit: 10


}
const gifApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs'

})

class GiftService {

    async searchGif(q) {
        params.q = q
        // console.log('got to the service');
        const res = await gifApi.get('search', { params })
        console.log('getting gif', res.data.data);
        // NOTE set the proxy state array to the data of the gifs
        // NOTE we then map or search over the data 
        // NOTE then set g as each data point and access the url of each data point 
        // NOTE this turns each of the urls into a usable url
        ProxyState.gifs = res.data.data.map(g => g.images.downsized_large.url)
       

    }

}

export const giftService = new GiftService()
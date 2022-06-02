

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
        console.log('getting gif', res.data, q);

    }

}

export const giftService = new GiftService()
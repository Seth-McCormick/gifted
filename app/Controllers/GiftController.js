
import { giftService } from "../Services/GiftService.js";
import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";



function _drawGif() {
    let gif = ProxyState.gif
    let template = ''
    gif.forEach(g => template += g.GifTemplate)

    document.getElementById('loading-gif').innerHTML = template


}

export class GiftController {
    constructor() {
        // console.log('loaded controller');
        ProxyState.on('gif', _drawGif)

    }

    async searchGif() {
        try {

            window.event.preventDefault()
            let form = window.event.target
            let query = {
                url: form.url.value
            }
            console.log('i got gif', query);
            await giftService.searchGif(query)
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }

    }
}
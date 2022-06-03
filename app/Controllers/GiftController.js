
import { giftService } from "../Services/GiftService.js";
import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";



function _drawGif() {

    let template = ''
    // NOTE changed p to url and we are accessing each url of the gif
    ProxyState.gifs.forEach(url => template += `<div class="col-12" onclick='app.giftController.setUrl(${url})'><img class='img-fluid' src="${url}" alt=""></div>`)
document.getElementById('loading-gif').innerHTML = template

}

export class GiftController {
    constructor() {
        // console.log('loaded controller');
        // NOTE added this to watch for a change for our gif proxy state
ProxyState.on('gifs', _drawGif)

    }

    // NOTE this was added but havent done anything with it. 
    // NOTE we will us this to send the url into out Gift making form to make gift

    setUrl(url){
        console.log(url);
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

import { giftService } from "../Services/GiftService.js";
import { Pop } from "../Utils/Pop.js";
import { ProxyState } from "../AppState.js";



function _drawGif() {
    let gif = ProxyState.gif


}

export class GiftController {
    constructor() {
        // console.log('loaded controller');


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
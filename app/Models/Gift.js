export class Gift {
    constructor(data) {
        this.description = data.description
        this.url = data.url
        this.gif = data.gif
    }


    get GifTemplate() {
        return `
        <div class="col-12"><img src="" alt=""></div>
   
`
    }
}
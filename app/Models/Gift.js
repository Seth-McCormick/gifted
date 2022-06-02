export class Gift {
    constructor(data) {
        this.description = data.description
        this.URL = data.URL
        this.gif = data.gif
    }


    get GifTemplate() {
        return `
${'this is OG'}
`
    }
}
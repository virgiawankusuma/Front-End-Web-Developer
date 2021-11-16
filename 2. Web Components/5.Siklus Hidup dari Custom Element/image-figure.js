class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log('constructed!');
    }

    connectedCallback() {
        console.log('connected!');
    }
    
    disconnectedCallback() {
        console.log('disconnected!');
    }
    
    adobtedCallback() {
        console.log('adopted!');
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute: ${name} changed!`);
    }
    
    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
       dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]
    static get observedAttributes(){
        return ['caption'];
    }
}

customElements.define('image-figure', ImageFigure);
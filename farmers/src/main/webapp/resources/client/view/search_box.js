import {
    searchBoxModel,
    pSearchTags,
    rSearchTags
} from '../model/model.mjs'

// const template = document.createElement('template');
// template.innerHTML = searchBoxModel;

class SearchBox extends HTMLElement {
    constructor() {
        super();

        this.pSearchTagArr = pSearchTags;
        this.rSearchTagArr = rSearchTags;

        const template = document.getElementById('search-box-template');
        template.innerHTML = searchBoxModel;
        this.attachShadow({mode: 'open'}).appendChild(template.content.cloneNode(true));

        this.tagNodeList = this.shadowRoot.querySelectorAll('tags');
        
        this.shadowRoot.querySelector('#popular').addEventListener('click', this.pushPopularTags.bind(this));
        this.shadowRoot.querySelector('#recent').addEventListener('click', this.pushRecentTags.bind(this));
        this.shadowRoot.querySelector('#close').addEventListener('click', this.hideSearchBox.bind(this));
        
        this.searchbox = document.getElementById('search-box');

        this.hideSearchBox();
        this.pushPopularTags();
    }

    pushPopularTags() {
        console.log('this is:',this);
        for (let i = 0; i < this.tagNodeList.length; i++) {
            this.tagNodeList[i].innerText = pSearchTags[i];
        }
    }

    pushRecentTags() {
        for (let i = 0; i < this.tagNodeList.length; i++) {
            this.tagNodeList[i].innerText = rSearchTags[i];
        }
    };

    displaySearchBox() {
        document.getElementById('search-box').style.display = 'block';
    }
    
    hideSearchBox() {
        document.getElementById('search-box').style.display = 'none';
    }
    
}

const search = document.querySelector('#search');
search.addEventListener('click', SearchBox.prototype.displaySearchBox);
window.customElements.define('search-box', SearchBox);
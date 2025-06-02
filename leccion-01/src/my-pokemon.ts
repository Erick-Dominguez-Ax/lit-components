import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MyHeader } from "./my-header";
import { MyFooter } from "./my-footer";
export interface IPokeResponse {
  count?: number
  next?: string
  previous?: any
  results?: IPokemon[]
}

export interface IPokemon {
  name: string
  url: string
}

@customElement("my-pokemon")
export class MyPokemon extends LitElement {

    @property()
    pokeResponse: IPokeResponse = {};
    

    getInfo = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result: IPokeResponse) => {
        this.pokeResponse = { ...result };
        console.log(this.pokeResponse)
      });
    };

  constructor(){
    super();
    this.getInfo();
  }

  render() {
    return html`
    <my-header></my-header>
      <p>Render a list of pokemons:</p>
    
      <ul>
        
        ${this.pokeResponse.results?.map((item) => {
          return html`
            <li>${item.name} ///////// ${item.url}</li>
          `;
        })}

      </ul>
      
    <my-footer></my-footer>
    `;
  }

}
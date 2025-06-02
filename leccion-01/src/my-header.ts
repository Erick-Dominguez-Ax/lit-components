import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-header")
export class MyHeader extends LitElement {
    @property()
    localUser = JSON.parse(localStorage.getItem("datos"));


    render() {
    return html`
                <div class="header">
                    <div class="usuario">
                        <h1>Bienvenido ${this.localUser.nombre} </h1>
                    </div>
                </div>
    `}
    
    static styles = css`
    .header {
        background-color: red;
        top:0px;
        width: 100%;        
    }
  `;


}
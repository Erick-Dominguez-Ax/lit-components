import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-footer")
export class MyFooter extends LitElement {
    
    render() {
    return html`
                <div class="footer">
                    <div class="usuario">
                        <h1>Esto tiene que ser un footer</h1>
                    </div>
                </div>
    `}
    
    static styles = css`
    .footer {
        background-color: blue;
        bottom: 0px;
        width: 100%;        
    }
  `;


}
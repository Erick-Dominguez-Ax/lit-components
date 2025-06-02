import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class SimpleGreeting extends LitElement {
  
  @property()
  mensaje = ''

  @property()
  estado = ''

  constructor() {
    super();
    console.log('Constructor - :D');
    this.mensaje = "Mi componente Lit está cargando.";
    this.estado = "Constructor";
  }

  connectedCallback() {
    super.connectedCallback();
    this.estado = "Conectado - connectedCallback";
    console.log(this.estado);
  }

  firstUpdated() {
    this.estado = "Primer render - firstUpdated";
    console.log(this.estado);
  }

  updated(changedProperties:any) {
    super.updated(changedProperties);
    this.estado = "Actualizado - updated";
    console.log(this.estado);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.estado = "Desconectado - disconnectedCallback";
    console.log(this.estado);
  }

  render() {
    return html`
      <h2>Ciclo de Vida del Componente Lit</h2>
      <p><strong>Estado actual:</strong> ${this.estado}</p>
      <p><strong>Mensaje:</strong> ${this.mensaje}</p>
      <button @click="${this.cambiarMensaje}">Cambiar mensaje</button>
    `;
  }

  cambiarMensaje() {
    this.mensaje = "¡El mensaje ha cambiado!";
  }
}
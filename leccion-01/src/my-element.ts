import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

let datos = {"nombre": "Erick", "password": "contraseña"}
localStorage.setItem("datos" , JSON.stringify(datos))


@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    p {
      color: violet;
    }
    .form{
    color: red;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    }
    
    .button{
      justify-content:center  
    }
  `;

  @property()
  usuario="";
  @property()
  contraseña="";

  @property()
  userLocal = JSON.parse(localStorage.getItem("datos"));

  writeUser(event:Event){
    const input = event.target as HTMLInputElement;
     this.usuario = input.value
     console.log(this.usuario)
     
  }

  writePassword(event:Event){
    const input = event.target as HTMLInputElement;
     this.usuario = input.value
     console.log(this.contraseña)
   }

  logIn(event:Event){
    event.preventDefault();
    if(this.userLocal!=null){
      if(this.userLocal.nombre == this.usuario && this.userLocal.password == this.contraseña){
        console.log(`Bienvenido ${this.usuario}`);
      }
    }
  }

  render() {
    return html`
        <div class='form'> 
        <form @submit=${this.logIn}>
        <p>Formulario de inicio de sesión</p>
          <div>
          <label>Usuario</label>
            <input @input=${this.writeUser} placeholder="Usuario">
          </div>
          <div>
          <label>contraseña</label>
            <input @input=${this.writePassword} placeholder="contraseña">
            </input>
          </div>
            <div class="button">
            <button type="submit">Iniciar sesión</button>
            </div>
          </form>
        </div>
        `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
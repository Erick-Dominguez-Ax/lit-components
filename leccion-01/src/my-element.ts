import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

let datos = {"nombre": "Erick", "password": "contraseña"}
localStorage.setItem("datos" , JSON.stringify(datos))


@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    .form{
    backgroud-color: purple;
    color: red;

    border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-items: center;
    border-radius: 10px;
    }
    
    .btn_{
      display:flex 
      justify-items: center;
    }
    
    .click{
      background-color: red;
      color: white;
      
    }
    
    .usuario{
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .contraseña{
      
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
     this.contraseña = input.value
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
        
        <div class="form">
          Formulario de inicio de sesión
          
          <div class="usuario">
            <label>Usuario</label>
            <input @input=${this.writeUser} placeholder="Usuario">
          </div>

          <div class="usuario">
          <label>contraseña</label>
            <input @input=${this.writePassword} placeholder="contraseña">
          </div>

          <div class="btn_">
            <button class="click"type="submit" @click=${this.logIn}>Iniciar sesión</button>
          </div>

        </div>
        
        `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
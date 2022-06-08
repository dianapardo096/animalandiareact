import "./Header.css";
import logoA from "../../img/logoA.jpg";
function Header(){
    return(
        <header>
        <div class="logo">
            <img src={logoA} alt="Logo Animalandia"></img>
        </div>
        <div className="botones">
            <button class="b-login"><i class="fa-solid fa-power-off"></i>  Ingresar</button>
            <button class="registro"><i class="fa-solid fa-user-plus"></i>  Registrarse</button>
        </div>
        </header>
    );
}
export default Header;
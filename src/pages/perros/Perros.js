import "../../index.css"
import Header from "../../componentes/Header/Header";
import Navbar from "../../componentes/navbar/Navbar";
import Razas from "../../componentes/Perros/Razas";
import { getAllPerros } from "../../componentes/Perros/perros";


function Perros (){
    const perros=getAllPerros();
    return(
        <div>
            <Header />
            <Navbar />
        <div className="container mb-5">
            
            <div className="row">
                <h1 className="text-center mt-4 fw-bold">Razas de Perros japoneses</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        perros.map(p=>(
                            <Razas 
                            prop1={p.id}
                            prop2={p.thumbnail}
                            prop3={p.raza}
                            prop4={p.descripcion}
                            prop5={p.acercade}
                            prop6={p.imagen}
                            prop7={p.detalle}
                            prop8={p.vida}
                            prop9={p.tamaño}/>
                        ))
                    }
                </div>
            </div> 
        </div>
        </div>
    );
}
export default Perros
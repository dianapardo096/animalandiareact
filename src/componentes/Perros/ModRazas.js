import "./Razas"
function ModRazas(props){
    return(
        <div className="modal fade" id={props.propModal1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{props.propModal3}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={props.propModal6} className="card-img-top mx-auto d-block mb-2"  alt={props.propModal3} />
              <h3>Acerca de:</h3><p>{props.propModal5}</p>
              <h3>Cualidades:</h3><p>{props.propModal7}</p>
              <h3>Tamaño:</h3><p>{props.propModal9}</p>
              <h3>Vida:</h3><p>{props.propModal8}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ModRazas;
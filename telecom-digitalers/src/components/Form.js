import IndComment from "../components/IndComment";
import Comments from "../constants/comments";

const Form = () => {
    window.addEventListener("load", () => {
        let btnAddComment = document.getElementById("commentForm");
        btnAddComment.addEventListener("click", () => {
        let newNameComment = document.querySelector("#nombre");
        let newRolComment = document.querySelector("#rol");
        let newComentarioComment = document.querySelector("#comentario");
        let aux = {
            nombre: newNameComment.value,
            rol: newRolComment.value,
            comentario: newComentarioComment.value,
        };
        newNameComment.value &&
            newRolComment.value &&
            newComentarioComment.value &&
            IndComment(aux)
        newNameComment.value = "";
        newRolComment.value = "";
        newComentarioComment.value = "";
        });
    });
    return (
        <section className="form-father-class d-block m-3">
            <div className="form" id="form">
                    <div className="subtitle">Dejanos un comentario!</div>
                    <div className="">
                        <label htmlFor="nombre" className="">Nombre</label>
                        <input
                        id="nombre"
                        className="input"
                        type="text"
                        placeholder="Ingrese su Nombre"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="rol" className="">
                            Rol
                        </label>
                        <input
                            id="rol"
                            className="input"
                            type="text"
                            placeholder="Ingrese el Rol desempeñado"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="comentario" className="">
                            Comentario
                        </label>
                        <input
                            id="comentario"
                            className="input"
                            type="text"
                            placeholder="Escriba un comentario"
                        />
                    </div>
                    <button id="commentForm" type="submit" className="submit" onClick={() => {
                        let newNameComment = document.querySelector("#nombre");
                        let newRolComment = document.querySelector("#rol");
                        let newComentarioComment = document.querySelector("#comentario");
                        let aux = {
                            nombre: newNameComment.value,
                            rol: newRolComment.value,
                            comentario: newComentarioComment.value,
                        };
                        if( newNameComment.value && newRolComment.value && newComentarioComment.value)
                            Comments =  [...Comments,{
                                nombre: newNameComment.value,
                                rol: newRolComment.value,
                                comentario: newComentarioComment.value,
                            }]
                        newNameComment.value = "";
                        newRolComment.value = "";
                        newComentarioComment.value = "";   
                        }
                    }>
                    Enviar Comentario
                    </button>
                </div>
        </section>
    );
};

export default Form;

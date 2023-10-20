import Comments from "../constants/comments";
import IndComment from "./IndComment";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentsLoader = () => {
    return (
    <div className="commentsContainer container">
        <header className="mainHeader containerTitle">
            Conoce las opiniones de nuestros alumnos y profesores
        </header>
        <section id="comentarios" className="d-flex flex-wrap justify-content-around">
            <div className="d-flex flex-wrap justify-content-around">
            {Comments.map((n) => (
                <div key={n.nombre}>
                    <IndComment
                    nombre={n.nombre}
                    rol={n.rol}
                    comentario={n.comentario}
                    />
                </div>
            ))}
            </div>
        </section>
    </div>
    );
};

export default CommentsLoader;

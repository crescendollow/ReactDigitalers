import IndComment from "../components/IndComment";

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

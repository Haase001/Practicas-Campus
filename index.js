//Practica 6 en JS

//Intro a DOM
/*
Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)
*/

const newComment = document.getElementById('form');
const commentSection = document.getElementById('comments-box');

function DeleteComments (button, comment) {
    button.addEventListener ('click', () => {
        comment.remove ();
    })
};

function createNewComment (author, comment) {
    newComment.reset();

    //Crear un nuevo elemento
    const comments = document.createElement('div');
    comments.classList.add ('comment');

    //Crear imagen de usuario, o en este caso el icono de usuario jeje 
    const commenticon = document.createElement ('div');
    commenticon.classList.add ('person-icon');

    //Agregamos el icono
    const icon = document.createElement ('i');
    icon.classList.add ('fa-solid', 'fa-user');
    commenticon.appendChild (icon) //metemos el icono en commenticon

    //Agregamos el espacio para comentarios
    const commentContent = document.createElement ('div');
    commentContent.classList.add ('comment-content');

    //Creamos el nombre de usuario
    const commentUsername = document.createElement ('p');
    commentUsername.classList.add('comment-author');
    commentUsername.textContent = author || 'Anonimo'; //No sabía que tambien se podían usar estos operadores aqui, pero tiene sentido
    commentContent.appendChild (commentUsername); //Metemos el nombre de usuario en commentContent

    //Creamos el comentario
    const commentText = document.createElement ('p');
    commentText.textContent= comment;
    commentContent.appendChild (commentText); //Metemos el comentario en commentContent

    //obtener la fecha
    let fecha = new Date();
    const opcionesDeFecha = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }
    const fechaFormateada = fecha.toLocaleString('es-Es', opcionesDeFecha);

    //Agregar la fecha a una etiqueta
    const commentDate = document.createElement ('small');
    commentDate.textContent = fechaFormateada;
    commentContent.appendChild (commentDate); //metemos la fecha en commentContent

    //Creamos el botón
    const commentBtn = document.createElement ('button');
    commentBtn.classList.add ('delete-btn');
    commentBtn.setAttribute ('type', 'button');

    //Creamos el icono de la basura
    const trashicon = document.createElement ('i');
    trashicon.classList.add ('fa-solid', 'fa-trash');
    commentBtn.appendChild (trashicon); //Metemos el icono en el boton

    DeleteComments (commentBtn, comments);

    comments.appendChild (commenticon)
    comments.appendChild (commentContent)
    comments.appendChild (commentBtn)

    commentSection.appendChild (comments)
    console.log(author, comment);
};

newComment.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let author = document.getElementById('author-input').value.trim(); //Para que no aparezca en vacio el espacio si no ponen un Nombre
    let comment = document.getElementById('comment-input').value; 
    createNewComment(author, comment);
});

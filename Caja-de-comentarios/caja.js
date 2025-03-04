const newComment = document.getElementById('form');
const commentSection = document.getElementById('comments-box');

//Creamos una funcion para cargar todos los comentarios anteriores al cargar la página
function loadComments() {
    //Creamos una variable local con el valor del areglo guardado en localStorage, o si no hay ninguno, por un arreglo vacio
    const allComments = JSON.parse(localStorage.getItem('comments')) || [];

    //Por cada objeto en el arreglo mandamos a llamar a la funcion para crear un nuevo comentario
    allComments.forEach(element => {
        createNewComment(element.username, element.text, element.date)
    });
}

loadComments();

//Funcion para eliminar comentarios
function DeleteComments (button, comment, currentComment) {
    button.addEventListener ('click', () => {
        comment.remove ();

        //Eliminamos de localStorage
        //Primero sacamos los datos ya existentes en una variable local
        const allComments = JSON.parse(localStorage.getItem('comments')) || [];
        
        //Recorremos el arreglo por cada elemento en la variable allComments
        for (let index = 0; index < allComments.length; index++) {
            //Si currentComment encuentra una cohincidencia en el array, lo eliminamos

            //No se porque (currentComment === allComments[index]) siempre sale false; entonces será por cohincidencia de su elementos 
            if (currentComment.username === allComments[index].username && currentComment.text === allComments[index].text && currentComment.date === allComments[index].date) {
                allComments.splice(index, 1);   
                //Guardamos la lista actualizada en localStorage
                localStorage.setItem('comments', JSON.stringify(allComments));
            }
        }
    })
};

//Funcion para crear elementos
function createNewComment (author, comment, fechaFormateada) {
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

    //Agregamos la fecha a una etiqueta
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

    //Ponemos todo en su lugar
    comments.appendChild (commenticon)
    comments.appendChild (commentContent)
    comments.appendChild (commentBtn)

    commentSection.appendChild (comments)

    //Creamos un objeto para poder enviarlo a nuestro array con todos los comentarios
    let currentComment = {
        username: author || 'Anonimo',
        text: comment,
        date: fechaFormateada,
    }

    //Llamamos a la funcion de borrar el comentario en caso de que lo ocupemos ya con los nuevos parametros agregados
    DeleteComments (commentBtn, comments, currentComment);
};

newComment.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let author = document.getElementById('author-input').value.trim(); //Para que no aparezca en vacio el espacio si no ponen un Nombre
    
    let comment = document.getElementById('comment-input').value.trim();

    //Sacamos la hora y fecha del evento
    let fecha = new Date();
        const opcionesDeFecha = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }
        fechaFormateada = fecha.toLocaleString('es-Es', opcionesDeFecha)

    //Validamos que la caja de comentarios tenga algo
    if (comment === '') {
        alert('Debes escribir algo para subir tu comentario')
    } else {
        //Si todo está bien entonces llamamos a la función
        createNewComment(author, comment, fechaFormateada); 
        
        //Creamos un objeto para poder enviarlo a nuestro array con todos los comentarios
        let currentComment = {
            username: author || 'Anonimo',
            text: comment,
            date: fechaFormateada,
        }

        //Creamos una variable local con el valor de los comentarios en localStorage o si no hay nada, un areglo vacio
        const allComments = JSON.parse(localStorage.getItem('comments')) || [];

        //Agregamos el comentario al arreglo
        allComments.push (currentComment);

        //Salvamos el arreglo en localStorage
        localStorage.setItem('comments', JSON.stringify(allComments))
    }
});
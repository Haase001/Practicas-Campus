    const commentForm = document.querySelector(".comment-form");
    const commentsBox = document.getElementById("comments-box");
    const commentInput = document.getElementById("comment");
    const submitBtn = document.getElementById("submit-btn");

    // Deshabilitar el botón si no hay texto en el comentario
    commentInput.addEventListener("input", () => {
        submitBtn.disabled = commentInput.value.trim() === "";
    });

    // Agregar un nuevo comentario
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores del formulario
        const username = document.getElementById("username").value.trim();
        const commentText = commentInput.value.trim();

        // Crear un nuevo comentario
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        // Icono de persona
        const personIcon = document.createElement("i");
        personIcon.classList.add('fa-solid', 'fa-user', 'person-icon');

        // Contenido del comentario
        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-content");

        const commentAuthor = document.createElement("p");
        commentAuthor.classList.add("comment-author");
        commentAuthor.textContent = username || "Anónimo"; // Si no hay nombre, mostrar "Anónimo"

        const commentTextElement = document.createElement("p");
        commentTextElement.textContent = commentText;

        const commentDate = document.createElement("small");
        commentDate.textContent = new Date().toLocaleString(); // Fecha y hora actual

        // Botón para eliminar comentario
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteBtn.addEventListener("click", () => {
            commentsBox.removeChild(commentElement); // Eliminar el comentario
        });

        // Agregar elementos al comentario
        commentContent.appendChild(commentAuthor);
        commentContent.appendChild(commentTextElement);
        commentContent.appendChild(commentDate);

        commentElement.appendChild(personIcon);
        commentElement.appendChild(commentContent);
        commentElement.appendChild(deleteBtn);

        // Agregar el comentario a la caja de comentarios
        commentsBox.appendChild(commentElement);

        // Limpiar el formulario
        commentForm.reset();
        submitBtn.disabled = true; // Deshabilitar el botón nuevamente
    });

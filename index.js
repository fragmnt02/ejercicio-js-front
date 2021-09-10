window.onload = function () {
    const objeto = document.getElementById('objeto');
    let presionado = false;
    let difX, difY;
    objeto.addEventListener('mousedown', (evento) => {
        const objeto = document.getElementById('objeto');
        const objRectangulo = objeto.getBoundingClientRect();
        const objX = objRectangulo.left;
        const objY = objRectangulo.top;
        difX = evento.clientX - objX;
        difY = evento.clientY - objY;
        presionado = true;
        document.addEventListener('mousemove', mover);
    });

    objeto.addEventListener('mouseup', () => {
        presionado = false;
        document.removeEventListener('mousemove', mover);
    });

    /*
    objeto.addEventListener('click', () => {
        presionado = !presionado;
        if (presionado) {
            document.addEventListener('mousemove', mover);
        } else {
            document.removeEventListener('mousemove', mover);
        }
    });
    */
   
    function mover(evento) {
        const x = evento.clientX;
        const y = evento.clientY;
        const objeto = document.getElementById('objeto');
        objeto.style.left = `${x - difX}px`;
        objeto.style.top = `${y - difY}px`;
    }
}


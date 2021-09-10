window.onload = function () {
    const objeto = document.getElementById('objeto');
    const folder = document.getElementById('folder');

    let presionado = false;
    let difX, difY;
    let contador = 0;

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

    folder.addEventListener('click', () => {
        contador++;
        if (contador === 2){
            console.log("Abriendo folder");
            contador=0;
            abrirFolder();
        }
    }
    );

    folder.addEventListener('mousedown',(evento) => {
        const objRectangulo = folder.getBoundingClientRect();
        const objX = objRectangulo.left;
        const objY = objRectangulo.top;
        difX = evento.clientX - objX;
        difY = evento.clientY - objY;
        document.addEventListener('mousemove', moverFolder);
    });

    folder.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moverFolder);
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
        objeto.style.left = `${x - difX}px`;
        objeto.style.top = `${y - difY}px`;
    }

    function moverFolder(evento) {
        const x = evento.clientX;
        const y = evento.clientY;
        folder.style.left = `${x - difX}px`;
        folder.style.top = `${y - difY}px`;
    }

    function abrirFolder(){
        const venta = document.createElement('div');
        venta.style.width='1000px';
        venta.style.height='600px';
        venta.style.position='absolute';
        venta.style.left = `${window.innerWidth/2 - 500}px`;
        console.log(window.innerHeight);
        venta.style.top = `${window.innerHeight/2 - 300}px`;
        venta.style.backgroundColor='red';
        document.body.appendChild(venta);
    }
}


// head.js
$(document).ready(function() {
    $("#open-letter-btn, #open-letter-btn-desktop").click(function() {
        $.ajax({
            type: "GET",
            url: "carta.aspx",
            success: function(data) {
                $("#letter-modal").html(data);
                $("#letter-modal").show();
            },
            error: function(xhr, status, error) {
                // Si falla la carga del archivo .aspx, cargamos el contenido directamente
                const letterContent = `
               
    <div class='letter-content'>
        <span class='close' id='close-btn'>&times;</span>
        <div class='letter-header'>
            <div class='letter-info'>
                <h2 id='letter-recipient'>Para ti</h2>
            </div>
        </div>
        <div class='letter-body'>
            <p>
                En este Día de San Valentín hay varias cosas que decir, 
                pero creo que es mejor ser directo con lo que hay que decir, ¿no? Jiji. 
                Bueno, espero que estés bien y tranquilo. si no, que los problemas que tengas se resuelvan pronto 
                y aprendas de ellos, por algo suceden las cosas, o bueno, eso creo yo. 
                Ya fuera de eso, escribo esto porque creo que merece saber lo importante que eres
                y aunque me haya desaparecido por un rato (2 meses), a veces es mejor centrarte en las metas que tienes 
                claras y esforzarte para obtenerlas. Las metas , los sueños o las ambiciones difíciles son muy interesantes,
                ya que se convierten en una aventura donde el destino te guía por las decisiones que tomas. 
                Y en parte, si esa aventura se forma junto con tu ser es lo que te puede convertir en único.
                Así que vive cada experiencia o momento para que cuando termine una de tus aventuras sea un recuerdo que 
                quieres recordar. Obviamente, vas a vivir más que una sola aventura, como tus estudios, amistades, amores, familiares,
                ser padre o madre, etc. Bueno, lo último es decisión tuya, nadie te obliga, y igual para qué pensarlo ahora
                , aún se tiene tiempo. Es mejor que cada aventura se viva a su ritmo y hasta se pueden juntar algunas aventuras, 
                haciéndolo más emocionante. Y esas aventuras pueden comenzar en cualquier momento 
                como 'cada atardecer marca un nuevo comienzo, cada amanecer una nueva oportunidad'. 
                Es decisión tuya si vivirla. Para finalizar, espero que te haya gustado esta carta y si estás pasando un mal momento
                te recomiendo dormir, ya que 'el sueño es la lluvia que calma el fuego del alma',
                si no lo entendiste, te lo dejo de tarea para que lo pienses. Te deseo lo mejor.
                Renato
            </p>
        </div>
        <div class='letter-footer'>
            <p>Feliz día de San Valentín</p>
        </div>
    </div>

                `;
                $("#letter-modal").html(letterContent);
                $("#letter-modal").show();
                console.log("Usando contenido de respaldo debido al error:", error);
            }
        });
    });
});

// cancelacion.js
document.addEventListener('DOMContentLoaded', function() {
    const letterModal = document.getElementById('letter-modal');
    
    // Cierra la carta cuando se hace clic en el botón de cerrar o fuera de la carta
    if (letterModal) {
        letterModal.addEventListener('click', function(e) {
            if (e.target.id === 'close-btn' || e.target.id === 'letter-modal') {
                letterModal.style.display = 'none';
            }
        });
    }
    
    // Funciones para el selector de versión
    window.selectVersion = function(version) {
        document.getElementById('version-selector').style.display = 'none';
        document.getElementById('mobile-version').style.display = 'none';
        document.getElementById('desktop-version').style.display = 'none';
        document.getElementById(version + '-version').style.display = 'block';
        document.querySelector('.back-btn').style.display = 'block';
    }

    window.showSelector = function() {
        document.getElementById('version-selector').style.display = 'flex';
        document.getElementById('mobile-version').style.display = 'none';
        document.getElementById('desktop-version').style.display = 'none';
        document.querySelector('.back-btn').style.display = 'none';
    }
});
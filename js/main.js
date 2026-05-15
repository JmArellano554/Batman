
        // CONTADOR
        let clicks = 0;

        function contarClicks() {

            clicks++;

            document.getElementById("contador").innerHTML =
                "Cantidad de clics: " + clicks;
        }

        // CAMBIAR COLOR DE FONDO
        function cambiarColor() {

            const colores = [
                "#1c1c1c",
                "#2c3e50",
                "#4b0082",
                "#006400",
                "#8b0000",
                "#2f4f4f"
            ];

            const colorAleatorio =
                colores[Math.floor(Math.random() * colores.length)];

            document.body.style.backgroundColor = colorAleatorio;
        }

        // MOSTRAR FECHA
        function mostrarFecha() {

            const fechaActual = new Date();

            document.getElementById("fecha").innerHTML =
                fechaActual.toLocaleString();
        }

        // MOSTRAR / OCULTAR INFORMACIÓN
        function toggleInfo() {

            const info = document.getElementById("infoExtra");

            if (info.style.display === "none") {

                info.style.display = "block";

            } else {

                info.style.display = "none";
            }
        }

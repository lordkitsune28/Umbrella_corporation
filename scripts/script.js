$(document).ready(function () {

    // hacer aparecer o desaparecer al inicio de sesion y registro
    $("#registro").click(function (e) {
        e.preventDefault();
        $("#inicio-sesion").addClass("d-none");
        $("#registrar").removeClass("d-none");

    });
    $("#inicio").click(function (e) {
        e.preventDefault();
        $("#registrar").addClass("d-none");
        $("#inicio-sesion").removeClass("d-none");

    });

    // hacer funcionar al formulario de registro

    let remail = $("#rEmail");
    let rpass = $("#rPass");
    let pass2 = $("#pass2");
    let usuario = [];


    $(pass2).keyup(function (e) {
        usuario = {
            email: remail.val(), clave: rpass.val()
        };
        if (pass2.val() === rpass.val()) {
            $(".alerta").html("");

            $("#registra").click(function (e) {
                e.preventDefault();

                if (remail.val() === "") {

                    $(".alerta").html("Todos los Campos son Obligatorios");

                } else {
                    $(".alerta").html("");
                    $("#inicio").click();
                    $("#listo").html("Usuario creado correctamente");
                    localStorage.setItem("user", JSON.stringify(usuario));
                }
            });
        } else {
            $(".alerta").html("Los codigos de accesos no coinciden");

        }

    });

    // hacer funcionar formulario de inicio de sesion

    let iemail = $("#iEmail");
    let ipass = $("#iPass");
    const user = JSON.parse(localStorage.getItem("user"));
    let intentos = 0;


    $(".alerta").html("");
    $("#ingresar").click(function (e) {

        if (iemail.val() === "" || ipass.val() === "") {

            $(".alerta").html("Todos los Campos son Obligatorios");

        } else {
            if (user.clave === ipass.val() && user.email === iemail.val()) {
                console.log("holi")
            } else {
                $(".alerta").html("Email o codigo de acceso es incorrecto");
                $("#articulo").addClass("text-danger");
                intentos = intentos + 1;
                if (condition) {
                    
                }
            }

            
            console.log(intentos)
        }
    });

});
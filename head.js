$("#open-letter-btn").click(function () {
    $.ajax({
        type: "GET",
        url: "carta.aspx",
        success: function (data) {
            $("#letter-modal").html(data);
            $("#letter-modal").show();
        },
        error: function (xhr, status, error) {
            console.log("Error en la solicitud AJAX: " + error);
        }
    });
});
$("#open-letter-btn-desktop").click(function () {
    $.ajax({
        type: "GET",
        url: "carta.aspx",
        success: function (data) {
            $("#letter-modal").html(data);
            $("#letter-modal").show();
        },
        error: function (xhr, status, error) {
            console.log("Error en la solicitud AJAX: " + error);
        }
    });
});

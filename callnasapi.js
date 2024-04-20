var url = "http://35.227.136.155:8080/api/datos";

function postDato() {

    console.log(url);

    var myName = $("#name").val();
    var myDescription = $("#description").val();
    var myImage = $("#image").val();

    var mydato = {
        name: myName,
        description: myDescription,
        image: myImage
    };
    console.log(mydato);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            console.log(data);
            $("#resultado").html(JSON.stringify(data.Datos));
        },
        data: JSON.stringify(mydato)
    });
        }
    
function getDatos() {
    console.log(url);
    
    $.getJSON(url, 
        function (json) {
        console.log(json);

        var arrDatos = json.Datos;

        var htmlTableNasa = '<table border="1">';

        arrDatos.forEach(function (item) {
            console.log(item);
            htmlTableNasa += '<tr>' +
                '<td>' + item.name + '</td>' +
                '<td>' + item.description + '</td>' +
                '<td>' + item.image + '</td>' +               
                '</tr>';
        });
        htmlTableNasa += '</table>';

        $("#resultado").html(htmlTableNasa);
        
         }
    );
}

$(function () {
    $('button.btn').hide();
    $('div.html-sf').hide();
    $('div.css-sf').hide();
    $('div.javascript-sf').hide();
    $('div.java-sf').hide();
    $('div.csharp-sf').hide();
    $('div.sql-sf').hide();
    $('div.html-af').hide();
    $('div.css-af').hide();
    $('div.javascript-af').hide();
    $('div.java-af').hide();
    $('div.csharp-af').hide();
    $('div.sql-af').hide();

    if ($('#subject').val() == "html") {
        $('div.html-sf').show();
        $('div.html-af').show();

    }
    if ($('#subject').val() == "css") {
        $('div.css-sf').show();

        $('div.css-af').show();

    }
    if ($('#subject').val() == "javascript") {
        $('div.javascript-sf').show();

        $('div.javascript-af').show();

    }
    if ($('#subject').val() == "java") {
        $('div.java-sf').show();

        $('div.java-af').show();

    }
    if ($('#subject').val() == "csharp") {
        $('div.csharp-sf').show();

        $('div.csharp-af').show();

    }
    if ($('#subject').val() == "sql") {
        $('div.sql-sf').show();

        $('div.sql-af').show();

    }


    $('button.btn').show();


    $('#form').on('submit', function () {
        if ($('.assignments').val() == "") {
            alert("Please select an Assignment!");
        }
    });
});
$(function () {
    $('button.btn').hide();
    var hidestuff = function () {
        $('div.html-form, div.css-form, div.javascript-form, div.java-form, div.csharp-form, div.sql-form').hide();
    }

    $("select[name='subject']").change(function () {
        hidestuff();

        var value = $(this).val();
        if (value == "html") {
            $("div.html-form").show();
        }
        if (value == "css") {
            $("div.css-form").show();
        }
        if (value == "javascript") {
            $("div.javascript-form").show();
        }
        if (value == "java") {
            $("div.java-form").show();
        }
        if (value == "csharp") {
            $("div.csharp-form").show();
        }
        if (value == "sql") {
            $("div.sql-form").show();
        }
        $('button.btn').show();
    });
    hidestuff();

});
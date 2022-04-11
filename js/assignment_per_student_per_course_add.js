$(function () {
    $('button.btn').hide();

    var hidestuff = function () {
        $('div.html-sf, div.css-sf, div.javascript-sf, div.java-sf, div.csharp-sf, div.sql-sf').hide();
        $('div.html-af, div.css-af, div.javascript-af, div.java-af, div.csharp-af, div.sql-af').hide();
    }

    $("select[name='subject']").change(function () {
        hidestuff();

        var value = $(this).val();
        if (value == "html") {
            $("div.html-sf").show();
            $('div.html-af').show()
        }
        if (value == "css") {
            $("div.css-sf").show();
            $("div.css-af").show();
        }
        if (value == "javascript") {
            $("div.javascript-sf").show();
            $("div.javascript-af").show();

        }
        if (value == "java") {
            $("div.java-sf").show();
            $("div.java-af").show();
        }
        if (value == "csharp") {
            $("div.csharp-sf").show();
            $("div.csharp-af").show();

        }
        if (value == "sql") {
            $("div.sql-sf").show();
            $("div.sql-af").show();

        }
        $('button.btn').show();
    });
    hidestuff();


});
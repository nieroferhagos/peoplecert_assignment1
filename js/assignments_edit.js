$(function () {
    
    $('div.title-error').hide();
    $('div.description-error').hide();

    var oral_mark = $('#oral-mark').val();
    var writing_mark = $('#writing-mark').val();

    var error_title = '';
    $('#title').focusout(function () {
        checkTitle();
    });
    var error_description = '';
    $('#description').focusout(function () {
        checkDescription();
    });

    function checkTitle() {
        var pattern = /^[\w\#]*$/;
        var tiTle = $('#title').val();
        console.log(tiTle);
        if (pattern.test(tiTle) && tiTle !== '') {
            $('div.title-error').hide();
            $('#title').css({ "border-bottom": "3px solid #34f458" });
            $('input[type=text]').val(function () {
                return this.value.toUpperCase();
            });
        }
        else {
            $('div.title-error').show().html("Should contain only characters or numbers or special characters!");
            error_title = 'true';
        };
    };
    function checkDescription() {
        var pattern = /^[\w\#]*$/;
        var desCripTion = $('#description').val();
        console.log(desCripTion);
        if (pattern.test(desCripTion) && desCripTion !== '') {
            $('div.description-error').hide();
            $('#description').css({ "border-bottom": "3px solid #34f458" });
            
        }
        else {
            $('div.description-error').show().html("Should contain only characters!");
            error_description = 'true';
        };
    };

    $('#total-mark').focusout(function() {
        var total_mark = '';
        $("#total-mark").html( oral_mark + writing_mark );
    });
});
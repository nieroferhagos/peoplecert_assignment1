$(function () {
    $('#firstname-error').hide();
    $('#lastname-error').hide();
    $('select.subject').selectpicker();

    var error_fname = '';
    $('#firstname').focusout(function () {
        checkFirstName();
    });
    var error_lname = '';
    $('#lastname').focusout(function () {
        checkLastName();
    });

    function checkFirstName() {
        var pattern = /^[a-zA-Z\s]*$/;
        var firstName = $('#firstname').val();
        console.log(firstName);
        if (pattern.test(firstName) && firstName !== '') {
            $('#firsname-error').hide();
            $('#firstname').css({ "border-bottom": "3px solid #34f458" });
            $('input[type=text]').val(function () {
                return this.value.toUpperCase();
            });
        }
        else {
            $('#firstname-error').show().html("Should contain only characters!");
            error_fname = 'true';
        };
    };

    function checkLastName() {
        var pattern = /^[a-zA-Z\s]*$/;
        var lastName = $('#lastname').val();
        console.log(lastName);
        if (pattern.test(lastName) && lastName !== '') {
            $('#lasname-error').hide();
            $('#lastname').css({ "border-bottom": "3px solid #34f458" });
            $('input[type=text]').val(function () {
                return this.value.toUpperCase();
            });
        }
        else {
            $('#lastname-error').show().html("Should contain only characters!");
            error_lname = 'true';
        };
    };

    $('form.form').validate({
        messages: {
            subject: {
                required: "Please select a subject!"
            }
        }
    });

});
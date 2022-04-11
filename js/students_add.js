$(function () {
    $('#firstname-error').hide();
    $('#lastname-error').hide();
    $('#email-error').hide();

    var error_fname = '';
    $('#firstname').focusout(function () {
        checkFirstName();
    });
    var error_lname = '';
    $('#lastname').focusout(function () {
        checkLastName();
    });
    var error_email = '';
    $('#e-mail').focusout(function() {
        checkEmail();
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

    function checkEmail() {
        var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var eMail = $('#e-mail').val();
        console.log(eMail);
        if (pattern.test(eMail) && eMail !== '') {
            $('#email-error').hide();
            $('#e-mail').css({ "border-bottom": "3px solid #34f458" });
        }
        else {
            $('#email-error').show().html("Invalid e-mail!");
            error_email = 'true';
        };
    };
});
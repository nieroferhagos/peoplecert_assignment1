$('div.title-error').hide();
        $('select.stream').selectpicker();
        $('select.type').selectpicker();

        $('form.form').on('submit', function (form) {
            if (!$('#title').prop('checked')) {
                $('div.title-error').show();
            }
            else {
                $('div.title-error').hide();
            }
            return false;
        });

        $('form.form').validate({
            messages: {
                stream: {
                    required: "Please select one or more subjects!"
                },
                type: {
                    required: "Please select an option!"
                }
            }
        });

        $('#end-date').change(function () {
        var startDate = document.getElementById('start-date').value;
        var endDate = document.getElementById('end-date').value;

        if (Date.parse(startDate) >= Date.parse(endDate)) {
          alert("End date should be greater than Start date");
          document.getElementById("end-date").value = "";
        }
      });
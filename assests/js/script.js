$(document).ready(function () {
    // NavBar Collapse at SM and MD
    $('.navbar-nav .nav-link, .dropdown-item').not('.dropdown-toggle').on('click', function () {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    // Mail sending Function
    function sendmail() {
        var name = $("#name").val();
        var email = $("#email-address").val();
        var subject = $("#subject").val();
        var comments = $("#comment").val();
        var emailBody = `
                <div class="card border">
                <div class="card-header">
                    <h5 class="text-center m-2">Email Details</h5>
                </div>
                <div class="card-body p-5">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <hr>
                    <p><strong>Comments:</strong></p>
                    <p>${comments}</p>
                </div>
            </div>
                            `;
        Email.send({
            SecureToken: "Include your own Token",
            To: 'sample@gmail.com',
            From: "noreply@gmail.com",
            Subject: subject,
            Body: emailBody
        }).then(
            message => {
                if (message === "OK") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Email sent successfully',
                        text: 'Thank you for your Response.',
                        timer: 2500,
                    });
                    $("#contactForm")[0].reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: 'Please try again later'
                    });
                }

            }
        );
    }
    $('#contactForm').on('submit', function (event) {
        event.preventDefault();
        sendmail();
    });
    AOS.init({
        once: true,
        offset: 50,
        delay: 150,
    });
});

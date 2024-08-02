$(document).ready(function() {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        events: [
            // Sample event
            {
                title: 'Doctor Appointment',
                start: '2024-07-24T10:30:00',
                end: '2024-07-24T12:30:00',
                className: 'appointment'
            }
        ]
    });

    $('#appointmentForm').on('submit', function(event) {
        event.preventDefault();
        const date = $('#appointmentDate').val();
        const details = $('#appointmentDetails').val();

        $('#calendar').fullCalendar('renderEvent', {
            title: details,
            start: date,
            className: 'appointment'
        }, true);

        this.reset();
    });

    $('#reminderForm').on('submit', function(event) {
        event.preventDefault();
        const date = $('#reminderDate').val();
        const details = $('#reminderDetails').val();

        $('#calendar').fullCalendar('renderEvent', {
            title: `Reminder: ${details}`,
            start: date,
            className: 'reminder'
        }, true);

        this.reset();
    });
});

document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'front.html'; 
});

function redirectToPage(page) {
            window.location.href = page;
        }

        function logout() {
            // Implement your logout functionality here
            alert("Logout clicked");
            // Example: window.location.href = 'login.html';
        }

        // Highlight the active menu item
        document.addEventListener('DOMContentLoaded', (event) => {
            const currentPage = window.location.pathname.split('/').pop();
            const menuItems = document.querySelectorAll('.list-item');
            
            menuItems.forEach(item => {
                item.classList.remove('active'); // Remove the 'active' class from all items
            });

            if (currentPage === 'appointment.html' || currentPage === '') {
                document.getElementById('appointment').classList.add('active');
            } else {
                menuItems.forEach(item => {
                    const iconClass = item.querySelector('.list-item-icon').classList[1];
                    const pageMap = {
                        'fa-address-card': 'profile.html',
                        'fa-stream': 'dashboard.html',
                        'fa-book': 'report.html',
                        'fa-calendar': 'appointment.html',
                        'fa-upload': 'add.html'
                    };
                    if (pageMap[iconClass] === currentPage) {
                        item.classList.add('active');
                    }
                });
            }
});


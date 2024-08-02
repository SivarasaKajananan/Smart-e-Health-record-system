document.getElementById('logoutButton').addEventListener('click', function() {
    window.location.href = 'front.html'; 
});


function redirectToPage(page) {
            window.location.href = page;
        }

        // Highlight the active menu item
        document.addEventListener('DOMContentLoaded', (event) => {
            const currentPage = window.location.pathname.split('/').pop();
            const menuItems = document.querySelectorAll('.list-item');
            
            menuItems.forEach(item => {
                item.classList.remove('active'); // Remove the 'active' class from all items
            });

            if (currentPage === 'report.html' || currentPage === '') {
                document.getElementById('report').classList.add('active');
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
    
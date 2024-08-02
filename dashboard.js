// Sample chart data
const heartRateData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Heart Rate',
        data: [75, 78, 70, 80, 85, 75, 77],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

const bloodPressureData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Blood Pressure',
        data: [120, 125, 110, 115, 130, 125, 120],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

const glucoseData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Glucose',
        data: [90, 85, 88, 92, 87, 90, 88],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const calorieData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Daily Calorie Intake',
        data: [2500, 3000, 2000, 2200, 2600, 3100, 3500],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Create charts
const heartRateCtx = document.getElementById('heartRateChart').getContext('2d');
const heartRateChart = new Chart(heartRateCtx, {
    type: 'bar',
    data: heartRateData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false 
            }
        }
    }
});

const bloodPressureCtx = document.getElementById('bloodPressureChart').getContext('2d');
const bloodPressureChart = new Chart(bloodPressureCtx, {
    type: 'bar',
    data: bloodPressureData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false 
            }
        }
    }
});

const glucoseCtx = document.getElementById('glucoseChart').getContext('2d');
const glucoseChart = new Chart(glucoseCtx, {
    type: 'bar',
    data: glucoseData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false 
            }
        }
    }
});

const calorieCtx = document.getElementById('calorieChart').getContext('2d');
const calorieChart = new Chart(calorieCtx, {
    type: 'bar',
    data: calorieData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false 
            }
        }
    }
});

let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
    progressEndValue = 90,    
    speed = 100;
    
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);

let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");
let progressStartValue1 = 0,    
    progressEndValue1 = 85,    
    speed1 = 100;
    
let progress1 = setInterval(() => {
    progressStartValue1++;
    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`
    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }    
}, speed);

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

            if (currentPage === 'dashboard.html' || currentPage === '') {
                document.getElementById('dashboard').classList.add('active');
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

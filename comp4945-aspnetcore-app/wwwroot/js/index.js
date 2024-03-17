const createBarChart = () => {
    const ctx = document.getElementById('barChart').getContext('2d');
    const data = {
        'Asia': 42,
        'Africa': 5,
        'North America': 20,
        'South America': 11,
        'Antarctica': 1,
        'Europe': 11,
        'Australia': 2
    };
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Number of Cities I Got Lost In by Continent',
                data: data,
                backgroundColor: [
                    '#d34a0a',
                    '#d96e03',
                    '#EE9B00',
                    '#E9C46A',
                    '#94D2BD',
                    '#0A9396',
                    '#005F73'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Cities'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Continent'
                    }
                }
            }
        }
    });
};

const createPolarAreaChart = () => {
    const ctx = document.getElementById('polarAreaChart').getContext('2d');
    const backgroundColors = ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'];
    const data = {
        'Accommodation': 60,
        'Transportation': 20,
        'Food': 75,
        'Activities': 40,
        'Miscellaneous': 80,
    };

    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        }
    });
};

const createDoughnutChart = () => {
    const ctx = document.getElementById('doughnutChart').getContext('2d');
    const backgroundColors = ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', '#FF8C00', '#6A5ACD', '#20B2AA'];
    const data = {
        'Accommodation': 15,
        'Transportation': 30,
        'Food': 35,
        'Activities': 15,
        'Miscellaneous': 5
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(data),
            datasets: [{
                data: Object.values(data),
                backgroundColor: backgroundColors,
                borderWidth: 1
            }]
        }
    });
};

const createLineChart = () => {
    const ctx = document.getElementById('lineChart').getContext('2d');
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Number of Times I Got Lost by Month',
            data: [65, 59, 80, 81, 56, 55, 40, 30, 20, 70, 45, 35],
            fill: false,
            borderColor: '#d34a0a',
            tension: 0.1
        }]
    };
    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Times I Got Lost'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createBarChart();
    createPolarAreaChart();
    createDoughnutChart();
    createLineChart();
});
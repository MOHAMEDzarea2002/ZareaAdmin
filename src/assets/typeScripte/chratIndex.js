
let traffic = document.getElementById("traffic")
let product = document.getElementById("product")


const profittExpenses = document.getElementById("profitt-expenses")

// Data design profitt-expenses
new Chart(profittExpenses, {
  type: 'bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Profit',
        data: [12, 6, 8, 7, 5, 10, 4], // بيانات الأرباح
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        barThickness: 10,
        borderRadius:20,
      },
      {
        label: 'Expenses',
        data: [4, 3, 7, 5, 6, 8, 3], // بيانات المصاريف
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        barThickness: 10,
        borderRadius: 20,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: '',
      },
      title: {
        display: true,
        text: 'Weekly Profit & Expenses',
      },
    },
    scales: {
      y: {
        beginAtZero: true
      },
    }
  }
});

// design traffic
new Chart(traffic, {
  type: 'doughnut',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Profit',
        data: [9, 6, 8, 7, 5, 10, 4], // بيانات الأرباح
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Expenses',
        data: [4, 3, 7, 5, 6, 8, 3], // بيانات المصاريف
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'none',
      },
      title: {
        display: true,
        text: 'Weekly Profit &',
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
// design product
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week
  datasets: [
    {
      label: 'Profit ($)',
      data: [9, 5, 10, 6, 7, 12, 4], // Replace with actual profit data
      backgroundColor: 'rgba(54, 162, 235, 0.7)', // Blue
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: 'Expenses ($)',
      data: [6, 3, 8, 4, 6, 10, 2], // Replace with actual expense data
      backgroundColor: 'rgba(255, 99, 132, 0.7)', // Red
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const config = {
  type: 'line', // Chart type
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'none',
      },
      title: {
        display: false,
        text: 'Weekly Profit & Expenses',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

new Chart(product, config);
console.log("za")
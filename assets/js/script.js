/**
 * Initialize horizontal bar chart
 */
const ctx = document.getElementById("funnelChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["View", "Installation attempt", "Successful installation"],
        datasets: [
            {
                data: [1480, 253, 171],
                backgroundColor: ["#1f6f8b", "#f5a623", "#2ecc71"],
                borderRadius: 6
            }
        ]
    },
    options: {
        indexAxis: "y", // horizontal bars
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: "#eee"
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }
});

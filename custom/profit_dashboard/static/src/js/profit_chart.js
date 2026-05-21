/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, onMounted } from "@odoo/owl";

export class ProfitChart extends Component {
    setup() {
        onMounted(() => {
            const ctx = document.getElementById("profitChart");

            const ventas = 55;
            const gastos = 38;
            const utilidad = 17;
            const total = ventas + gastos + utilidad;

            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [""],
                    datasets: [
                        {
                            label: "Ventas",
                            data: [(ventas / total) * 100],
                            backgroundColor: "#d32f2f",
                            barPercentage: 0.3,
                            categoryPercentage: 0.3,
                        },
                        {
                            label: "Gastos",
                            data: [(gastos / total) * 100],
                            backgroundColor: "#1976d2",
                            barPercentage: 0.3,
                            categoryPercentage: 0.3,
                        },
                        {
                            label: "Utilidad",
                            data: [(utilidad / total) * 100],
                            backgroundColor: "#388e3c",
                            barPercentage: 0.3,
                            categoryPercentage: 0.3,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "bottom",
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                            min: 0,
                            max: 100,
                            ticks: {
                                stepSize: 20,
                            },
                        },
                    },
                },
            });
        });
    }
}

ProfitChart.template = "profit_dashboard.ProfitChart";

registry.category("actions").add(
    "profit_dashboard.ProfitChart",
    ProfitChart
);

registry.category("actions").add(
    "profit_dashboard.ProfitChart",
    ProfitChart
);

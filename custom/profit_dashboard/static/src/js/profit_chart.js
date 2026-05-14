/** @odoo-module **/

import { Component, onMounted } from "@odoo/owl";

export class ProfitChart extends Component {
    setup() {
        onMounted(async () => {
            const { Chart } = await import("chart.js/auto");

            const ctx = document.getElementById("profitChart");

            new Chart(ctx, {
                type: "bar",
                data: {
                    labels: [""],
                    datasets: [
                        { label: "Ventas", data: [55] },
                        { label: "Gastos", data: [38] },
                        { label: "Utilidad", data: [17] },
                    ],
                },
                options: {
                    scales: {
                        x: { stacked: true },
                        y: {
                            stacked: true,
                            max: 100
                        }
                    }
                }
            });
        });
    }
}

ProfitChart.template = "profit_dashboard.ProfitChart";

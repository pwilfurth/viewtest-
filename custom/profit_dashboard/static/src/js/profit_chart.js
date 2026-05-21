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
                        },
                        {
                            label: "Gastos",
                            data: [(gastos / total) * 100],
                            backgroundColor: "#1976d2",
                        },
                        {
                            label: "Utilidad",
                            data: [(utilidad / total) * 100],
                            backgroundColor: "#388e3c",
                        },
                    ],
                },
                options: {
                    responsive: true,
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
                            min: 0,
                            max: 100,
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

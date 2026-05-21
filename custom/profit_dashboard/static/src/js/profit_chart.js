/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, onMounted } from "@odoo/owl";

export class ProfitChart extends Component {
    setup() {
        onMounted(() => {
            if (!window.Chart) {
                console.error("Chart.js not loaded");
                return;
            }

            const ctx = document.getElementById("profitChart");

            new window.Chart(ctx, {
                type: "bar",
                data: {
                    labels: ["Test"],
                    datasets: [{
                        label: "Ventas",
                        data: [55],
                        backgroundColor: "#d32f2f",
                    }]
                }
            });
        });
    }
}

ProfitChart.template = "profit_dashboard.ProfitChart";

registry.category("actions").add(
    "profit_dashboard.ProfitChart",
    ProfitChart
);

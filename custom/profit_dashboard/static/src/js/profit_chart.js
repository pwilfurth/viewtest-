/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, xml } from "@odoo/owl";

class ProfitChart extends Component {}

ProfitChart.template = xml`
    <div class="o_profit_dashboard">
        <h1>Profit Dashboard</h1>
    </div>
`;

registry.category("actions").add(
    "profit_dashboard.ProfitChart",
    ProfitChart
);

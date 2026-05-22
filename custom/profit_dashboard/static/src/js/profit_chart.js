/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";

class ProfitChart extends Component {
    static template = "profit_dashboard.ProfitChart";
}

registry.category("actions").add(
    "profit_dashboard.ProfitChart",
    ProfitChart
);

export default ProfitChart;

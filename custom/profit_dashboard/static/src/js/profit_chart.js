/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component } from "@odoo/owl";

export class ProfitChart extends Component {}
ProfitChart.template = "profit_dashboard.ProfitChart";

registry.category("actions").add(
    "profit_dashboard.ProfitChart",
    ProfitChart
);

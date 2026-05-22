/** @odoo-module **/

import { registry } from "@web/core/registry";

registry.category("actions").add("profit_dashboard.ProfitChart", {
    start() {
        document.body.innerHTML += "<h1>Profit Dashboard Loaded</h1>";
    },
});

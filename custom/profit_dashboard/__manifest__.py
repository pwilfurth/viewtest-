{
    "name": "Profit Dashboard",
    "version": "1.0",
    "depends": ["web"],
    "data": [
        "views/dashboard.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "profit_dashboard/static/src/js/profit_chart.js",
            "profit_dashboard/static/src/xml/profit_chart.xml",
        ],
    },
    "installable": True,
}

// Write your JavaScript code.

    function NumericText() {
        var key = window.event.keyCode;
        if (key < 48 || key > 57)
            window.event.returnValue = false;
    }
    function someFunc() {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChart);
    }

    function drawChart() {
        var name = document.getElementById('name').value;
        var name1 = document.getElementById('x1').value;
        var name2 = document.getElementById('x2').value;
        var name3 = document.getElementById('x3').value;

        var data = google.visualization.arrayToDataTable([
            ['Year', name],
            ['2004', Number(name1)],
            ['2005', Number(name2)],
            ['2006', Number(name3)]
        ]);

        var options = {
        title: 'Result',
            curveType: 'function',
            legend: {position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);

    }

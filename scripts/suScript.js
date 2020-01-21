google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisitChart);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawAccompanimentChart);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawApproachChart);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawParkChart);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawDistanceChart);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawAgeChart);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawGenderChart);

function drawVisitChart() {
  let data = google.visualization.arrayToDataTable([
    ['Visits', 'Amount'],
    ['1', 12],
    ['2 - 5', 42],
    ['6 - 10', 34],
    ['> 10', 8]
  ]);

  let chart = new google.visualization.PieChart(document.getElementById('visitChart'));
  chart.draw(data);

}

function drawAccompanimentChart() {
  let data = google.visualization.arrayToDataTable([
    ['Number of Accompanies', 'Amount'],
    ['alleine', 7],
    ['zu zweit', 47],
    ['mit 3 - 4 Personen', 14],
    ['mit 5 - 9 Personen', 3],
    ['mit 10+ Personen', 2]
  ]);


  let chart = new google.visualization.PieChart(document.getElementById('accompanimentChart'));
  chart.draw(data);

}

function drawApproachChart() {
  let data = google.visualization.arrayToDataTable([
    ['Kind of Arrival', 'Amount'],
    ['PKW', 23],
    ['Bus', 3],
    ['Linz Linien', 14],
    ['Bahn', 12],
    ['Zweirad', 4],
    ['zu Fuß', 7]
  ]);


  let chart = new google.visualization.PieChart(document.getElementById('approachChart'));
  chart.draw(data);

}

function drawParkChart() {
  let data = google.visualization.arrayToDataTable([
    ['Parking Situation', 'Amount'],
    ['Parkgarage Musiktheater', 23],
    ['Garage am Bahnhof', 3],
    ['umliegende Straßen', 2],
    ['sonstiges', 6]
  ]);


  let chart = new google.visualization.PieChart(document.getElementById('parkChart'));
  chart.draw(data);

}

function drawDistanceChart() {
  let data = google.visualization.arrayToDataTable([
    ['Distance', 'Amount'],
    ['< 10 km', 22],
    ['11 - 20 km', 23],
    ['21 - 50 km', 16],
    ['> 50 km', 8]
  ]);

  let chart = new google.visualization.PieChart(document.getElementById('distanceChart'));
  chart.draw(data);
}

function drawAgeChart() {
  let data = google.visualization.arrayToDataTable([
    ['Age', 'Amount'],
    ['0 - 16', 4],
    ['17 - 24', 12],
    ['25 - 40', 16],
    ['41 - 55', 18],
    ['> 55', 27]
  ]);

  let chart = new google.visualization.PieChart(document.getElementById('ageChart'));
  chart.draw(data);
}

function drawGenderChart() {
  let data = google.visualization.arrayToDataTable([
    ['Gender', 'Amount'],
    ['weiblich', 24],
    ['männlich', 21],
    ['divers', 2]
  ]);

  let chart = new google.visualization.PieChart(document.getElementById('genderChart'));
  chart.draw(data);
}

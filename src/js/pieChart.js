window.onload = function () {
  if ($("#chartContainer").length > 0) {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: ""
    },
    axisY: {
      title: ""
    },
    
    data: [
      {
        type: "column",
        showInLegend: true,
        legendMarkerColor: "grey",
        legendText: "PROINVESTOR",
        
        dataPoints: [
          { y: 5.5, label: "Bonos Extranjeros" },
          { y: 8, label: "Criptoactivos" },
          { y: 9.8, label: "Factoring Latam y USA" },
          { y: 10.1, label: "Mercado Inmobiliario" },
          { y: 10.25, label: "Participaciones de Factoring Institucional" },
          { y: 26.75, label: "Divisas (Arbitraje, forex)" },
          {
            y: 28.6,
            label: "Participaciones en fondos satélite",
            exploded: true,
          },
        ],
      },
    ],
  });
  chart.render();
}
};

function explodePie(e) {
  if (
    typeof e.dataSeries.dataPoints[e.dataPointIndex].exploded === "undefined" ||
    !e.dataSeries.dataPoints[e.dataPointIndex].exploded
  ) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }
  e.chart.render();
}

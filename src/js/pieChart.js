window.onload = function () {
  if ($("#chartContainer").length > 0) {
  var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    animationEnabled: true,
    legend: {
      fontColor: "#FFF",
    },
    backgroundColor: "transparent",
    title: {
      //text: "Title"
    },
    legend: {
      itemWidth: 200,
      fontColor: "#FFFFFF",
      cursor: "pointer",
      itemclick: explodePie,
    },
    data: [
      {
        type: "pie",
        indexLabelFontColor: "#FFFFFF",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}%</strong>",
        indexLabel: "{name} - {y}%",
        
        dataPoints: [
          { y: 5.5, name: "Bonos Extranjeros" },
          { y: 8, name: "Criptoactivos" },
          { y: 9.8, name: "Factoring Latam y USA" },
          { y: 10.1, name: "Mercado Inmobiliario" },
          { y: 10.25, name: "Participaciones de Factoring Institucional" },
          { y: 26.75, name: "Divisas (Arbitraje, forex)" },
          {
            y: 28.6,
            name: "Participaciones en fondos satélite",
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

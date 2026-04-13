import { series } from "./data.js";
function renderSeriesInTable(seriesList) {
    const tableBody = document.getElementById("series-tbody");
    if (!tableBody) {
        return;
    }
    seriesList.forEach((serie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        tableBody.appendChild(row);
    });
}
function getSeasonsAverage(seriesList) {
    let totalSeasons = 0;
    seriesList.forEach((serie) => {
        totalSeasons += serie.seasons;
    });
    return totalSeasons / seriesList.length;
}
function renderSeasonsAverage(seriesList) {
    const averageElement = document.getElementById("seasons-average");
    if (!averageElement) {
        return;
    }
    const average = getSeasonsAverage(seriesList);
    averageElement.innerHTML = `Seasons average: ${average.toFixed(2)}`;
}
renderSeriesInTable(series);
renderSeasonsAverage(series);
//# sourceMappingURL=main.js.map
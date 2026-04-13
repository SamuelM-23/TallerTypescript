import { series } from "./data";
import { Serie } from "./series";
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
renderSeriesInTable(series);
//# sourceMappingURL=main.js.map
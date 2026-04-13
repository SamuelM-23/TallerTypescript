import { series } from "./data.js";
import type { Serie } from "./series.js";

function renderSeriesInTable(seriesList: Serie[]): void {
  const tableBody = document.getElementById("series-tbody");

  if (!tableBody) {
    return;
  }

  tableBody.innerHTML = "";

  seriesList.forEach((serie) => {
    const row = document.createElement("tr");
    row.style.cursor = "pointer";
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    row.addEventListener("click", () => {
      renderSeriesDetail(serie);
    });

    tableBody.appendChild(row);
  });
}

function renderSeriesDetail(serie: Serie): void {
  const detailContainer = document.getElementById("series-detail");

  if (!detailContainer) {
    return;
  }

  detailContainer.innerHTML = `
    <div class="card">
      <img src="${serie.poster}" class="card-img-top" alt="${serie.name} poster">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a
          href="${serie.webpage}"
          class="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit website
        </a>
      </div>
    </div>
  `;
}

function getSeasonsAverage(seriesList: Serie[]): number {
  let totalSeasons = 0;

  seriesList.forEach((serie) => {
    totalSeasons += serie.seasons;
  });

  return totalSeasons / seriesList.length;
}

function renderSeasonsAverage(seriesList: Serie[]): void {
  const averageElement = document.getElementById("seasons-average");

  if (!averageElement) {
    return;
  }

  const average = getSeasonsAverage(seriesList);
  averageElement.innerHTML = `Seasons average: ${average.toFixed(2)}`;
}

renderSeriesInTable(series);
renderSeasonsAverage(series);

const initialSerie = series[0];

if (initialSerie) {
  renderSeriesDetail(initialSerie);
}

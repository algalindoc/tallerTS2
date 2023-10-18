import {Serie} from './serie.js';
import {series} from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTemporadasElement: HTMLElement = document.getElementById("promedioTemporadas")!;
let serieDetails: HTMLElement = document.getElementById("serieDetails")!;

mostrarTablaSeries(series);
promedioTemporadasElement.innerHTML = `Promedio de temporadas: ${promedioTemporadas(series)}`;

function mostrarTablaSeries(series: Serie[]): void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for(let serie of series){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.addEventListener("click", () => mostrarDetalleSerie(serie));
        trElement.innerHTML = `<td>${serie.id}</td>
        <td><a href="#Card ${serie.name}">${serie.name}</a></td>
        <td>${serie.platform}</td>
        <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function promedioTemporadas(series: Serie[]): number{
    let totalTemporadas: number = 0;
    for(let serie of series){
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas/series.length;
}

function mostrarDetalleSerie(serie: Serie): void {
    serieDetails.innerHTML = `
        <div class="card" style="width: 19rem;">
        <img class="card-img-top" src="${serie.imagen}"  height: auto;">
            <div class="card-body">
                <h1 class="card-title" style="font-size:larger">${serie.name}</h1>   
                <p>${serie.description}</p>
                <p> <a href="${serie.linkStream}" target="_blank">${serie.linkStream}</a></p>
            </div>
        </div>
    `;
}
import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioTemporadasElement = document.getElementById("promedioTemporadas");
var serieDetails = document.getElementById("serieDetails");
mostrarTablaSeries(series);
promedioTemporadasElement.innerHTML = "Season average: ".concat(promedioTemporadas(series));
function mostrarTablaSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.addEventListener("click", function () { return mostrarDetalleSerie(serie); });
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td><a href=\"#Card ").concat(serie.name, "\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.platform, "</td>\n        <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesTbody);
}
function promedioTemporadas(series) {
    var totalTemporadas = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas / series.length;
}
function mostrarDetalleSerie(serie) {
    serieDetails.innerHTML = "\n        <div class=\"card\" style=\"width: 19rem;\">\n        <img class=\"card-img-top\" src=\"".concat(serie.imagen, "\"  height: auto;\">\n            <div class=\"card-body\">\n                <h1 class=\"card-title\" style=\"font-size:larger\">").concat(serie.name, "</h1>   \n                <p>").concat(serie.description, "</p>\n                <p> <a href=\"").concat(serie.linkStream, "\" target=\"_blank\">").concat(serie.linkStream, "</a></p>\n            </div>\n        </div>\n    ");
}

on("click", ".btn-table-collapse", (function(e) {
    e.preventDefault(), i()(".table").toggleClass("short");
    var t = i()(".btn-table-collapse");
    t.text("Показать прайс полностью" == t.text() ? "Скрыть полный прайс" : "Показать прайс полностью"), Object(a.j)(i()(".mini-price-header").offset().top)
}))
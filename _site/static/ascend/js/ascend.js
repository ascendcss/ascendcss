function ascendGrid() {
    var ascendStyle = document.createElement('style');
    ascendStyle.appendChild(document.createTextNode(""));
    document.head.appendChild(ascendStyle);
    return new Promise(function (resolve) {
        var elements = document.getElementsByClassName("ascend-grid");
        if (elements.length == 0) {
            resolve(`No existen layouts para crear`);
        }
        var i = 0;
        for (let element of elements) {
            var elementos = elementos + element;
            var class_id = "grid" + Math.floor(Math.random() * 100000) + (Date.now() + "").slice(-4) + Math.floor(Math.random() * 1000);
            element.classList.add(class_id);
            element.style.display = "grid";
            var col_sm = element.getAttribute("sm:col"),
                col_md = element.getAttribute("md:col"),
                col_lg = element.getAttribute("lg:col"),
                col_xl = element.getAttribute("xl:col"),
                row_sm = element.getAttribute("sm:row"),
                row_md = element.getAttribute("md:row"),
                row_lg = element.getAttribute("lg:row"),
                row_xl = element.getAttribute("xl:row");

            if ((col_sm || col_md || col_lg || col_xl) || (row_sm || row_md || row_lg || row_xl)) {
                var createGridNow = (col_xl && ascendStyle.sheet.insertRule(`@media only screen and (min-width: 90em){.${class_id} {grid-template-columns: ${col_xl};}}`),
                    col_lg && ascendStyle.sheet.insertRule(`@media only screen and (min-width: 64em){.${class_id} {grid-template-columns: ${col_lg};}}`),
                    col_md && ascendStyle.sheet.insertRule(`@media only screen and (min-width: 40em){.${class_id} {grid-template-columns: ${col_md};}}`),
                    col_sm && ascendStyle.sheet.insertRule(`@media only screen and (min-width: 0em){.${class_id} {grid-template-columns: ${col_sm};}}`),
                    row_xl && ascendStyle.sheet.insertRule(`@media only screen and (min-width: 90em){.${class_id} {grid-template-rows: ${row_xl};}}`),
                    row_lg && ascendStyle.sheet.insertRule(`@media only screen and (min-width: 64em){.${class_id} {grid-template-rows: ${row_lg};}}`),
                    row_md && ascendStyle.sheet.insertRule(`@media only screen and (min-width: 40em){.${class_id} {grid-template-rows: ${row_md};}}`),
                    row_sm && ascendStyle.sheet.insertRule(`@media only screen and (min-width: 0em){.${class_id} {grid-template-rows: ${row_sm};}}`));
            };
            i++;
            if (i == elements.length) {
                resolve(`Se crearon ${i} layouts exitosamente:`);
            }
        };
    })
}
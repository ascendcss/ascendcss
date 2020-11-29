function buscar() {
    fetch('/search.json').then(
        resp => resp.json()
    ).then(repos => {
        buscarAhora(repos);
    }).catch(ex => {
        console.error(ex);
    })
    const buscarAhora = data => {
        const list = data;
        const options = {
            includeScore: true,
            keys: ['title', 'category']
        };
        var buscar = document.getElementById("buscar").value;
        if (buscar.length == 0) {
            document.getElementById("docs-items").style.display = "block";
        } else {
            document.getElementById("docs-items").style.display = "none";
        }
        const fuse = new Fuse(list, options);
        const result = fuse.search("!" + buscar);
        var cajaBusqueda = document.getElementById("resultados-de-busqueda");
        cajaBusqueda.innerHTML = "";
        var resultados = "",
            comenzar = "",
            grid = "",
            componentes = "",
            layout = "",
            otros = ""

        result.forEach(data => {
            if (data.item.category == "Comenzar") {
                comenzar += `
            <a href="${data.item.url}" class="color-200">${data.item.title}</a><br>
            `;
            } else if (data.item.category == "Grid System") {
                grid += `
            <a href="${data.item.url}" class="color-200">${data.item.title}</a><br>
            `;
            } else if (data.item.category == "Componentes") {
                componentes += `
            <a href="${data.item.url}" class="color-200">${data.item.title}</a><br>
            `;
            } else if (data.item.category == "Layout") {
                layout += `
            <a href="${data.item.url}" class="color-200">${data.item.title}</a><br>
            `;
            } else {
                otros += `
            <a href="${data.item.url}" class="color-200">${data.item.title}</a><br>
            `;
            }
        });
        if (comenzar != "") {
            resultados = resultados + `
            <h3>Comenzar</h3>
            ${comenzar}
            `
        }
        if (grid != "") {
            resultados = resultados + `
            <h3>Grid</h3>
            ${grid}
            `
        }
        if (layout != "") {
            resultados = resultados + `
            <h3>Layout</h3>
            ${layout}
            `
        }
        if (componentes != "") {
            resultados = resultados + `
            <h3>Componentes</h3>
            ${componentes}
            `
        }
        if (otros != "") {
            resultados = resultados + `
            <h4>Otros</h4>
            ${otros}
            `
        }
        if (resultados != "") {
            cajaBusqueda.innerHTML += resultados;
        } else {
            if (buscar.length != 0) {
                cajaBusqueda.innerHTML += "No hay resultados";
            }
        }
    }
}
function xSideparOpen() {
    document.getElementById("x-sidebar").classList.toggle("hidden");
    document.getElementById("x-sidebar").classList.toggle("block");
    document.getElementById("sidebar-btn").classList.toggle("hidden");
}
function openNav(id) {
    var nav = document.getElementById(id);
    nav.classList.toggle("navbar-show");
}
var heads = [];
heads.push(...document.getElementsByTagName('H1'));
heads.push(...document.getElementsByTagName('H2'));
heads.push(...document.getElementsByTagName('H3'));
for (element of heads) {
    var idElement = element.id;
    if (idElement != "") {
        element.insertAdjacentHTML('beforeend', `<a href="#${idElement}" class="title-icon"><i class="fas fa-link title-icon-ico"></i></a>`);
    }
}
// function copyUrl(str) {
//     const el = document.createElement('textarea');
//     el.value = document.location.origin + document.location.pathname + "#" + str.id;
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand('copy');
//     document.body.removeChild(el);
// }
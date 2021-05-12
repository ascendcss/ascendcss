const bundleScss = require("bundle-scss");
var fs = require('fs');

var dist = "./dist/ascencss.bundle.scss";
bundleScss("./src/scss/ascendcss.scss", dist).then(scss => {
    var data = scss.replace(/(\/\/)+(.)*/gm, "");
    fs.writeFile(dist, data.replace(/\n+(\s)*/g, ""), 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
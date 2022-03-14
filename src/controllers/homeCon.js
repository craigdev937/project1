class Pages {
    HomeIndex = (req, res) => {
        res.render("pages/index", {
            pageTitle: "Home",
            styleCSS: "main.css",
            javaSCRIPT: "main.js"
        })
    };

    Math = (req, res) => {
        res.render("pages/math", {
            pageTitle: "Math",
            styleCSS: "math.css",
            javaSCRIPT: "math.js"
        })
    };
};

export const PAGES = new Pages;



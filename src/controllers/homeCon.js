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

    Display = (req, res) => {
        res.render("pages/display", {
            pageTitle: "Display",
            styleCSS: "display.css",
            javaSCRIPT: "display.js"
        })
    };

    Position = (req, res) => {
        res.render("pages/position", {
            pageTitle: "Position",
            styleCSS: "position.css",
            javaSCRIPT: "position.js"
        })
    };

    Flexbox = (req, res) => {
        res.render("css/flex", {
            pageTitle: "Flexbox",
            styleCSS: "flex.css",
            javaSCRIPT: "flex.js"
        })
    };
};

export const PAGES = new Pages;



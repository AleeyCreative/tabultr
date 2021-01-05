function prepareMarkup(tableMarkup) {
    let markup = "<html>";
    markup += prepareMarkupHead();
    markup += prepareMarkupBody(tableMarkup);
    markup += prepareScripts();
    markup += "</html>";
    return markup;
}

function prepareMarkupHead() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>quickpeek</title>
        <style>
            body {
            }
            table {
            }
            tr th {
            }
            tr td {
            }
            tr td:nth-child(even) {
            }
        </style>
    </head>
    `;
}

function prepareMarkupBody(tableMarkup) {
    return `
    <body>
        <input type="search">
        ${tableMarkup}
    </body>
    `;
}

function prepareScripts() {}

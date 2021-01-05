function generateTable(collection, opts) {
    let table = `
        <table>
            <thead>
                ${generateTableHeading(opts)}
            </thead

            <tbody>
                ${generateTableBody(collection, opts)}
            </tbody>
        </table>
    `;
}

function generateTableHeading({ heading }) {
    let heading = `<th>`;
    for (let h of heading) {
        heading += `<td> ${h} </th>`;
    }
    return heading;
}

function generateTableBody(collection, { heading }) {
    let tableBody = "";
    for (let doc of collection) {
        let tableRow = `<tr>`;
        for (let h of heading) {
            tableRow += `<td>${doc[h] ? doc[h] : "-"} </td>`;
        }
        tableBody += tableRow;
    }
    return tableBody;
}

module.exports = generateTable;

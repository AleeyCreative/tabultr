module.exports = (collection, opts = {}) => {
    if (Array.isArray(collection) === false) {
        throw new Error(errors.NOT_ARRAY);
    }
    let options = unpackOptions(collection, opts)
    let table = generateTable(collection, opts)
    let markup = prepareMarkup(table)
    return markup 
}


function unpackOptions(collection, opts) {
    return {
        heading: opts.heading ? opts.heading : extractHeading(collection[0]),
        theme: opts.theme : "light"
     }
}

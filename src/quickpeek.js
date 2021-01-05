const renderer = require('./renderer')
/**
 *
 * @param {object} appInstance The express app instance
 * @param {object} dbModel  The mongoose model for a given collection in the MongoDB database
 */

function quickpeek({appInstance, dbModel, logger}) {
    appInstance.get('/quickpeek', (req, res, next) => {
        try {
            let results = await dbModel.find({})
            if(results.length > 0) {
                let markup = renderer(results)
                res.send(markup)
            }
        } catch(e) {
            console.log(e)
        }
    }
        
    

    } catch(e) {
        if(logger) logger(e)
        else console.error(e)
    }
}

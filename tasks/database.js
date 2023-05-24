const fs = require('fs')
const xlsToJson = require('xls-to-json')

const buildModelByKey = (groups, key) =>
    groups.reduce((acc, data) => {
        const size = data[key]

        if (size) {
            delete data.description
            acc[size] = data
        }

        return acc
    }, {})

async function parseSizeModel(sheetName) {
    return new Promise(function (resolve, reject) {
        xlsToJson(
            {
                input: './src/assets/sizes.xls',
                output: null,
                sheet: sheetName,
            },
            function (err, result) {
                if (err) {
                    console.error(err)
                    return reject(err)
                }

                const model = {
                    key: sheetName,
                    description: result[0].description,
                    brazil: buildModelByKey(result, 'brazil'),
                    usa: buildModelByKey(result, 'usa'),
                    europe: buildModelByKey(result, 'europe'),
                }

                resolve(model)
            }
        )
    })
}

async function run() {
    const sheets = [
        'generic',
        'women_coats_dress',
        'women_blouse',
        'women_shoes',
        'men_shirt',
        'men_shoes',
        'men_suit',
        'kids_clothes',
        'kids_shoes',
    ]

    const promiseSizes = []

    for (const sheetName of sheets) {
        promiseSizes.push(parseSizeModel(sheetName))
    }

    const models = await Promise.all(promiseSizes)

    const sizes = models.reduce(
        (acc, model) => ({ ...acc, [model.key]: model }),
        {}
    )

    fs.writeFileSync(
        './src/db/sizes.json',
        JSON.stringify(sizes, null, 4),
        'utf8'
    )
}

run()

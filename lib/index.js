/**
* Creates React/Redux module
*
* @param p Current process
*/

const fs = require('fs')
const LineByLineReader = require('./lineReader')




const dirStructure = [
    'Actions',
    'Components',
    'Reducers'
]

const createFile = (currentPath, newClassName, dirStructureItem) => {
    const viewPreffix = 'View'
    const ext = '.js'
    // FIXME get correct path
    const templatesDir = '/usr/local/lib/node_modules/rrmw/lib/templates/'

    let filePath = ''

    switch (dirStructureItem) {
        case 'Components':
            filePath = `${currentPath}/${viewPreffix}${newClassName}${ext}`
            break
        default:
            filePath = `${currentPath}/${dirStructureItem}${newClassName}${ext}`
    }

    const writeStream = fs.createWriteStream(filePath)
    const lineReader = new LineByLineReader(`${templatesDir}${dirStructureItem}.js`)

    writeStream.once('open', (fd) => {
        lineReader.on('error', function (err) {
            console.log(err)
            writeStream.end()
        })

        lineReader.on('line', function (line) {
            const newLine = line.replace(/#####/g, newClassName);
            writeStream.write(`${newLine}\n`)
        })

        lineReader.on('end', function () {
            writeStream.end()
        })  
    })
}


const rrmw = (p) => {
    const currentDirRath = p.env.PWD
    const newClassName = p.argv[2] ? p.argv[2] : 'EmptyClass'
    const moduleRoot = p.argv[1]?p.argv[1]:'/'

    dirStructure.forEach((item, i) => {
        const currentPath = `${currentDirRath}/${item}`

        if (!fs.existsSync(currentPath)) {
            fs.mkdirSync(currentPath)
            createFile(currentPath, newClassName, item)
        } else {
            console.log(`${currentPath} exist`)
            createFile(currentPath, newClassName, item)
        }
    })
}

exports.rrmw = rrmw
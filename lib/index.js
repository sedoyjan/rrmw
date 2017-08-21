/**
* Creates React/Redux module
*
* @param p Current process
*/

const fs = require('fs')
const path = require('path')
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
            const newLine = line.replace(/#####/g, newClassName)
            console.log('wrote line',newLine)
            writeStream.write(`${newLine}\n`)
        })

        lineReader.on('end', function () {
            console.log('wrote end')
            writeStream.end()
        })  
    })
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const rrmw = (p) => {
    const currentDirRath = '/Users/sedoyjan/Desktop/rrmw'//p.env.PWD || '.'
    const newClassNameTemp = p.argv[2] ? p.argv[2] : 'EmptyClass'
    const newClassName = capitalize(newClassNameTemp.replace(/--/g, ''))

    dirStructure.forEach((item, i) => {
        const currentPath = path.join(currentDirRath,item)//`${currentDirRath}/${item}`
        console.log('currentPath',currentPath)    
        if (!fs.existsSync(currentPath)) {
            fs.mkdirSync(currentPath)
            createFile(currentPath, newClassName, item)
        } else {
            createFile(currentPath, newClassName, item)
        }
    })
}

exports.rrmw = rrmw
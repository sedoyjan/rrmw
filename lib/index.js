/**
* Creates React/Redux module
*
* @param p Current process
*/

const fs = require('fs')
const path = require('path')
const readline = require('readline')

const dirStructure = [
    'Actions',
    'Components',
    'Reducers'
]



const createFile = (currentPath, newClassName, dirStructureItem, templatesPath) => {
    const viewPreffix = 'View'
    const ext = '.js'
    // FIXME get correct path
    // const templatesDir = '/usr/local/lib/node_modules/rrmw/lib/templates/'

    let filePath = ''

    switch (dirStructureItem) {
        case 'Components':
            filePath = `${currentPath}/${viewPreffix}${newClassName}${ext}`
            break
        default:
            filePath = `${currentPath}/${dirStructureItem}${newClassName}${ext}`
    }
    const writeStream = fs.createWriteStream(filePath, {
        flags: 'w',
        defaultEncoding: 'utf8',
        fd: null,
        mode: 0o666,
        autoClose: true
    })

    var rd = readline.createInterface({
        input: fs.createReadStream(`${templatesPath}/${dirStructureItem}.js`),
        // output: process.stdout,
        console: false
    });
    rd.on('line', function (line) {
        const newLine = line.replace(/#####/g, newClassName)
        writeStream.write(`${newLine}\n`)
    });
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const rrmw = (p) => {

    const pa = p.mainModule.paths.filter(item=>{
        if (item.indexOf('rrmw/node_modules') != -1) {
            return item
        }
    })

    const pathPart = pa[0].split('rrmw')[0]

    const templatesPath = path.join(pathPart,'rrmw','lib','templates')
    
    const currentDirRath = p.env.PWD || '.'
    const modulePath = p.env._ || '.'
    const newClassNameTemp = p.argv[2] ? p.argv[2] : 'EmptyClass'
    const newClassName = capitalize(newClassNameTemp.replace(/--/g, ''))
    dirStructure.forEach((item, i) => {
        const currentPath = path.join(currentDirRath, item)

        if (!fs.existsSync(currentPath)) {
            fs.mkdirSync(currentPath)
            createFile(currentPath, newClassName, item, templatesPath)
        } else {
            createFile(currentPath, newClassName, item, templatesPath)
        }
    })
}

exports.rrmw = rrmw
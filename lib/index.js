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
    'Reducers',
    'Containers'
]

const viewPreffix = 'View'

const createStylesFile = (filepath, className, templatePath) => {
    const ext = '.scss'
    const postfix = 'Styles'
    const fileName = `${viewPreffix}${className}${ext}`
    const filePath = path.join(filepath, fileName)
    const writeStream = fs.createWriteStream(filePath, {
        flags: 'w',
        defaultEncoding: 'utf8',
        fd: null,
        mode: 0o666,
        autoClose: true
    })
    var rd = readline.createInterface({
        input: fs.createReadStream(`${templatePath}/${postfix}${ext}`),
        console: false
    })
    rd.on('line', function (line) {
        const newLine = line.replace(/#####/g, className)
        writeStream.write(`${newLine}\n`)
    })

}

const createFile = (currentPath, newClassName, dirStructureItem, templatesPath) => {
    
    const ext = '.js'
    let filePath = ''

    switch (dirStructureItem) {
        case 'Components': {
            const viewPath = path.join(currentPath, `${viewPreffix}${newClassName}`)
            if (!fs.existsSync(viewPath)) {
                fs.mkdirSync(viewPath)
            }
            filePath = path.join(viewPath, `${viewPreffix}${newClassName}${ext}`)
            break
        }
        default: {
            filePath = `${currentPath}/${dirStructureItem.slice(0, -1)}${newClassName}${ext}`
            break
        }
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
    })
    rd.on('line', function (line) {
        let newLine = line.replace(/#####/g, newClassName)
        writeStream.write(`${newLine}\n`)
    })
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const addStyles = (currentPath, newClassName, item, cssTemplatesPath) => {
    if (item == 'Components') {
        const stylesPath = path.join(currentPath, `${viewPreffix}${newClassName}`)
        
        if (!fs.existsSync(stylesPath)) {
            fs.mkdirSync(stylesPath)
        }

        createStylesFile(stylesPath, newClassName, cssTemplatesPath)
    }
    return
}

const rrmw = (p) => {
    const pa = p.mainModule.paths.filter(item => {
        if (item.indexOf('rrmw/node_modules') != -1) {
            return item
        }
    })

    const pathPart = pa[0].split('rrmw')[0]

    const templatesPath = path.join(pathPart, 'rrmw', 'lib', 'templates')
    const cssTemplatesPath = path.join(pathPart, 'rrmw', 'lib', 'templates', 'styles')
    const currentDirRath = p.env.PWD || '.'
    const modulePath = p.env._ || '.'
    const newClassNameTemp = p.argv[2] ? p.argv[2] : 'EmptyClass'
    const newClassName = capitalize(newClassNameTemp.replace(/--/g, ''))
    dirStructure.forEach((item, i) => {

        const currentPath = path.join(currentDirRath, item)

        if (!fs.existsSync(currentPath)) {
            fs.mkdirSync(currentPath)
        }

        createFile(currentPath, newClassName, item, templatesPath)
        addStyles(currentPath, newClassName, item, cssTemplatesPath)
    })
}

exports.rrmw = rrmw
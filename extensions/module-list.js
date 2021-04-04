const path = require('path')

module.exports = (toolbox) =>
{
    toolbox.updateListModules = updateListModules
    toolbox.showListModules = showListModules
}

const showListModules = (toolbox) =>
{
    let modules = toolbox.filesystem.read(path.resolve(__dirname, '..', 'modules.json'), 'json')
    let list = [['Name', 'Package', 'Install', 'Link']]

    modules.map((plugin) => {
      list.push([plugin.name, plugin.package, `service-cli module:install ${plugin.name}`, plugin.link])
    })

    toolbox.print.table(list, { format: 'lean' })
}
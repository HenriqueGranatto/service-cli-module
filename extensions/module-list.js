module.exports = (toolbox) =>
{
    toolbox.updateListModules = updateListModules
    toolbox.showListModules = showListModules
}

const showListModules = (toolbox) =>
{
    let modules = toolbox.filesystem.read('modules.json', 'json')
    let list = [['Name', 'Package', 'Install', 'Link']]

    modules.map((plugin) => {
      list.push([plugin.name, plugin.package, `service-cli module:install ${plugin.name}`, plugin.link])
    })

    toolbox.print.table(list, { format: 'lean' })
}

const updateListModules = async (toolbox) =>
{
  toolbox.print.info(await toolbox.system.run('git fetch'))
  toolbox.print.info(await toolbox.system.run('git checkout origin/master -- modules.json'))
  toolbox.print.success('Lista de módulos atualizada com sucesso')
}
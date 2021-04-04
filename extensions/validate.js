module.exports = (toolbox) =>
{
    if(['module:install', 'module:update', 'module:uninstall'].indexOf(toolbox.parameters.command) >=0)
    {
        toolbox.validate = validateModuleCommand
    }
}

const validateModuleCommand = (toolbox, moduleList) =>
{
    toolbox.print.info("- Verificando módulo(s)")
    let modules = toolbox.filesystem.read('modules.json', 'json')
    
    if(!modules)
    {
        toolbox.print.error("- Módulo não encontrado. Execute o comando 'service-cli module:list' para verificar os módulos instalados")
        process.exit(0)
    }

    const plugin = modules.filter((mod) => moduleList.indexOf(mod.name) >= 0 )

    if(plugin.length == 0)
    {
        toolbox.print.error("- Módulo não encontrado. Execute o comando 'service-cli module:list' para verificar os módulos instalados")
        process.exit(0)
    }

    toolbox.print.info("- Módulo(s) encontrado(s)")

    return plugin
}
const { exec } = require("child_process");

const command = {
    name: 'module:uninstall',
    description: "Remove um módulo do projeto.",
    run: async toolbox => {
        const modules = await toolbox.validate(toolbox, toolbox.parameters.array)

        for (const plugin of modules) 
        {
            toolbox.print.success(`- Desinstalando módulo ${plugin.name}`)
            const command = `npm uninstall ${plugin.package}`
            toolbox.print.info(command)
            toolbox.print.info(await toolbox.system.run(command))
        }

        toolbox.print.success("- Módulo(s) desinstalado(s) com sucesso. Execute 'service-cli help' para verificar a lista atualizada de comandos")
        process.exit(0)
    }
  }
  
  module.exports = command
  
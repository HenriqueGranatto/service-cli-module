const command = {
    name: 'module:install',
    description: "Instala um módulo no projeto (Verifique a lista de módulos disponíveis).",
    run: async toolbox => {
        const modules = await toolbox.validate(toolbox, toolbox.parameters.array)

        for (const plugin of modules) 
        {
            toolbox.print.success(`- Instalando módulo ${plugin.name}`)
            const command = `npm install ${plugin.link}`
            toolbox.print.info(command)
            toolbox.print.info(await toolbox.system.run(command))
        }

        toolbox.print.success("- Módulo(s) instalado(s) com sucesso. Execute 'service-cli help' para verificar a lista atualizada de comandos")
        process.exit(0)
    }
  }
  
  module.exports = command
  
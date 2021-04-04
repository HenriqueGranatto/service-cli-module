const command = {
    name: 'module:list',
    description: "Lista os módulos disponíveis (use --update para atualizar a lista de módulos disponíveis)",
    run: async toolbox => {
      if(toolbox.parameters.options.update)
      {
          process.exit(0)
      }

      await toolbox.showListModules(toolbox)
    }
  }
  
  module.exports = command
  
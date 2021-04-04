/**
 * Module dependencies.
 */
const fs = require("fs")
const path = require("path")

const command = {
    name: 'module:create',
    description: 'Cria um novo plugin para a CLI',
    run: async toolbox => {
      await toolbox.print.success(`- Adicionando diretório: commands`)
      await toolbox.filesystem.dir('commands')

      await toolbox.print.success(`- Adicionando diretório: docs`)
      await toolbox.filesystem.dir('docs')

      await toolbox.print.success(`- Adicionando diretório: extensions`)
      await toolbox.filesystem.dir('extensions')

      await toolbox.print.success(`- Adicionando diretório: templates`)
      await toolbox.filesystem.dir('templates')

      await toolbox.print.success(`- Adicionando: gitignore`)
      await toolbox.template.generate({
          template: `gitignore`,
          target: `.gitignore`,
      }) 

      await toolbox.print.success(`- Adicionando: license`)
      await toolbox.template.generate({
          template: `LICENSE`,
          target: `LICENSE`,
      }) 

      await toolbox.print.success(`- Adicionando: package.json`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `package.ejs`,
          target: `package.json`,
      }) 

      await toolbox.print.success(`- Adicionando: readme.md`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `readme.ejs`,
          target: `readme.md`,
      }) 

      await toolbox.print.success(`- Adicionando: package.json`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `package.ejs`,
          target: `package.json`,
      }) 

      await toolbox.print.success(`- Adicionando: commands.md`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `docs/commands.ejs`,
          target: `docs/commands.md`,
      }) 

      await toolbox.print.success(`- Adicionando: plugins.md`)
      await toolbox.template.generate({
          props: {name: toolbox.parameters.options.name},
          template: `docs/plugins.ejs`,
          target: `docs/plugins.md`,
      }) 
    }
  }
  
module.exports = command
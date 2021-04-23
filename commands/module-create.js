const command = {
    name: 'module:create',
    description: 'Cria um novo plugin para a CLI',
    run: async toolbox => {
        const name = toolbox.parameters.options.name
        const upperName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`

        await toolbox.print.success(`- Adicionando comando: add:${name}`)
        await toolbox.template.generate({
            props: {name: name, upperName: upperName},
            template: `commands/add-module.ejs`,
            target: `commands/add-${name}.js`,
        }) 

        await toolbox.print.success(`- Adicionando comando: template:${name}`)
        await toolbox.template.generate({
            props: {name: name, upperName: upperName},
            template: `commands/template-module.ejs`,
            target: `commands/template-${name}.js`,
        }) 

        await toolbox.print.success(`- Adicionando diretório: docs`)
        await toolbox.filesystem.dir('docs')

        await toolbox.print.success(`- Adicionando extensão: template.js`)
        await toolbox.template.generate({
            props: {name: name, upperName: upperName},
            template: `extensions/template.ejs`,
            target: `extensions/template.js`,
        }) 

        await toolbox.print.success(`- Adicionando extensão: validate.js`)
        await toolbox.template.generate({
            props: {name: name, upperName: upperName},
            template: `extensions/validate.ejs`,
            target: `extensions/validate.js`,
        }) 

        await toolbox.print.success(`- Adicionando diretório: templates`)
        await toolbox.filesystem.dir('templates/domain')
        await toolbox.template.generate({
            template: `templates/template.json`,
            target: `templates/template.json`,
        }) 

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
            props: {name: name},
            template: `package.ejs`,
            target: `package.json`,
        }) 

        await toolbox.print.success(`- Adicionando: readme.md`)
        await toolbox.template.generate({
            props: {name: name},
            template: `readme.ejs`,
            target: `readme.md`,
        }) 

        await toolbox.print.success(`- Adicionando: package.json`)
        await toolbox.template.generate({
            props: {name: name},
            template: `package.ejs`,
            target: `package.json`,
        }) 

        await toolbox.print.success(`- Adicionando: commands.md`)
        await toolbox.template.generate({
            props: {name: name},
            template: `docs/commands.ejs`,
            target: `docs/commands.md`,
        }) 

        await toolbox.print.success(`- Adicionando: plugins.md`)
        await toolbox.template.generate({
            props: {name: name},
            template: `docs/plugins.ejs`,
            target: `docs/plugins.md`,
        }) 
    }
  }
  
module.exports = command
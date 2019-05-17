import * as fs from 'fs'
import * as yargs from 'yargs'

const argv = yargs
      .alias('f', 'filename')
      .alias('c', 'content')
      .demandOption('filename')
      .demandOption('content')
      .argv

fs.writeFile(argv.f, argv.f, (error)=>{
    if(error) throw error
    console.log(`Arquivo ${argv.f} foi salvo com sucesso.`)
})

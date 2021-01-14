const PuppetBoltYml = require('./puppet-bolt-yml')
const { writeFile, mkdir } = require('fs')
const { join, dirname } = require('path');
  
 
async function createYml(action){
  const results = action.params.results;
  const yml = new PuppetBoltYml(results);

  if (action.params.outputPath){
    
    await Promise.all(yml.plans.map(plan=> new Promise((resolve,reject)=>{
      const yamlString = yml.toString(plan);
      const outputPath = join(action.params.outputPath,'./plans/',`${plan.name}.yaml`)
      
      // Create dirs if not already exists
      mkdir(dirname(outputPath),{recursive:true},(err)=>{
        if (err) return reject(err);

        // Cerate the file
        writeFile(outputPath,yamlString,{encoding:"utf-8"},(err)=>{
          if (err) reject(err);
          resolve();
        });
      })
    })));
  }

  return {success: true};
}

module.exports = {
  createYml
};


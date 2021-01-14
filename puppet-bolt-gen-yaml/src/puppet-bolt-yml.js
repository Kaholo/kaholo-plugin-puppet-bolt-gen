const yaml = require('js-yaml');

class PuppetBoltYml{

  constructor(results){
    this.plans = [];
    this.setPlans(results);
  }

  setPlans(results){
    const self = this;
    
    results.filter(result=>result.type=="plan").forEach(planResult=>{  
      const plan = planResult.data;
      
      plan.options = {
        parameters : {},
        steps: [],
        ...plan.options
      }

      results.filter(result=>result.type=='planParam' && result.data.plan==plan.name).forEach(planParamResult=>{
        const paramName = planParamResult.data.name;
        const paramOptions = planParamResult.data.options;
        plan.options.parameters[paramName] = paramOptions;
      })

      results.filter(result=>result.type=='step' && result.data.plan==plan.name).forEach(stepResult=>{
        plan.options.steps.push(stepResult.data.stepOptions);
      })

      self.plans.push(plan);
    })
  }

  toString(plan){
    const yamlString = 
    `# This is an autogenerated Puppet Bolt YAML
# By Kaholo :)
#
${yaml.safeDump(plan.options,{indent: 2})}
`;
    return yamlString;
  }
}

module.exports = PuppetBoltYml;
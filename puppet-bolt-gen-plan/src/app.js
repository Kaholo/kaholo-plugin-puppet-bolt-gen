const {getParamTypes} = require('./autocomplete')
const parsers = require('./parsers');

async function createPlan(action){
  return {
    type : "plan",
    data :{
      name: action.params.name,
      options : {
        return: action.params.return
      }
    }
  }
}

async function createParam(action){
  return {
    type : "planParam",
    data :{
      plan : action.params.plan,
      name : action.params.name,
      options : {
        type : parsers.autocomplete(action.params.paramType),
        default: action.params.defaultValue,
        description: action.params.description
      }
    }
  }
}

module.exports = {
  createPlan,
  createParam,
  // autocomplete
  getParamTypes
};
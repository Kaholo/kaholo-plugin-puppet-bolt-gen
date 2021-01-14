const parsers = require('./parsers');

async function messageStep(action) {
  const options = {
    message : action.params.message
  }
  return createStep(action,options);  
}

async function commandStep(action) {
  const options = {
    command : action.params.command,
    targets: parsers.text(action.params.targets)
  }
  return createStep(action,options);  
}

async function scriptStep(action) {
  const options = {
    script : action.params.script,
    arguments: parsers.text(action.params.arguments),
    targets: parsers.text(action.params.targets)
  };

  return createStep(action,options);  
}

async function downloadFileStep(action) {
  const options = {
    download : action.params.download,
    destination: action.params.destination,
    targets: parsers.text(action.params.targets),
  };

  return createStep(action,options);  
}

async function uploadFileStep(action) {
  const options = {
    upload : action.params.upload,
    destination: action.params.destination,
    targets: parsers.text(action.params.targets),
  };

  return createStep(action,options);  
}

async function planStep(action) {
  const options = {
    plan : action.params.planToRun,
    parameters: action.params.parameters
  };

  return createStep(action,options);  
}

async function evalStep(action) {
  const options = {
    eval : action.params.eval
  };

  return createStep(action,options);  
}

function createStep(action, options){
  const plan = action.params.plan;
  const stepOptions = {
    name : action.params.name || undefined,
    description: action.params.description || undefined,
    ...options
  }

  if(!plan)
    throw "You must specify plan"
  
  return {
    type : "step",
    data : {
      plan,
      stepOptions: stepOptions
    }
  }
}

module.exports = {
  messageStep,
  commandStep,
  scriptStep,
  downloadFileStep,
  uploadFileStep,
  planStep,
  evalStep
};
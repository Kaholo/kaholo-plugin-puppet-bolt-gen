async function getParamTypes(query) {
  const types = [
    "TargetSpec",
    "String",
    "Boolean",
    "Numeric",
    "Timestamp"
  ];

  return types
    .filter((env) => env.includes(query))
    .map((env) => {
      return { id: env, value: env };
    });
}

module.exports = {
  getParamTypes
};

const path = require('path')

module.exports = (name, paths) => {
  const options = {
    paths: paths
      ? paths
      : [path.dirname(__dirname), process.cwd()]
  }
  try {
    return !!require.resolve(name);
  }
  catch {
    return false
  }
}

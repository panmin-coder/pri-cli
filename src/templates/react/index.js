const { getFilesFormDir } = require('../../utils');

async function invokeReact() {
  const reactTemplate = await getFilesFormDir(__dirname);

  return {
    ...reactTemplate,
    pkg: {
      dependencies: {
        react: '^17.0.2',
        'normalize.css': '^8.0.1',
        'react-dom': '^17.0.2',
        'web-vitals': '^2.1.4',
      },
    },
  };
}

module.exports = invokeReact;

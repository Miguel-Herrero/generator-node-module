module.exports = function () {
  const getAppName = {
    type: 'input',
    name: 'name',
    message: 'Your project name',
    default: this.appname.split(' ').join('-') // Default to current folder name
  };

  const questions = [
    getAppName,
    {
      type: 'input',
      name: 'description',
      message: 'Description (optional)',
      default: null
    },
    {
      type: 'input',
      name: 'version',
      message: 'version',
      default: '0.0.1'
    },
    {
      type: 'input',
      name: 'gitrepository',
      message: 'Git repository (optional)',
      default: null
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author',
      default: 'Maurice Ronet Dominguez'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email',
      default: 'maurice.ronet.dominguez@gmail.com'
    },
    {
      type: 'input',
      name: 'url',
      message: 'Page url',
      default: 'https://github.com/madoos/'
    }
  ];

  return questions;
};


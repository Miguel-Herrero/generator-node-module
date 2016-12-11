'use strict';

const yeoman = require('yeoman-generator');

const generatorName = 'madoos-node-module';
const questions = require('./promptQuestions');
const templatePath = require('path').join(__dirname, './templates');


const yoHelper = require('madoos-yo-helper')(generatorName, questions, templatePath);


module.exports = yeoman.Base.extend({
  prompting: yoHelper.prompts,
  writing: yoHelper.fileWriter,
  install: function () {
    this.installDependencies();
  }
});

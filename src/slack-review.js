const axios = require('axios');
const queryString = require('query-string');
const constasnt = require('./constant.js');

function PostPROnSlack (robot, context) {
  robot.on('pull_request.opened', async context => {
    const {
      html_url: PRLink,
      title: PRName,
      body: description,
      user, state
    } = context.payload.pull_request;
    const {
      login: userName,
      userName: userLink,
      avatar_url: userAvatar
    } = context.payload.pull_request.user;
    const {html_url: repoLink, name} = context.payload.repository;
    const descriptionTitle = Boolean(description) ? 'Description' : '';

    const attachments = [{
      color: '#0576b9',
      pretext: `:new: :octocat: :rocket: a new PR opened by ${user.login} at ${name}.`,
      title: PRName,
      title_link: PRLink,
      author_name: userName,
      author_link: userLink,
      author_icon: userAvatar,
      fields: [{
        title: 'Project',
        value: name,
        short: true
      }, {
        title: 'Title',
        value: PRName,
        short: true
      }, {
        title: descriptionTitle,
        value: description,
        short: false
      }],
      actions: [{
        type: 'button',
        text: 'Start review',
        url: `${PRLink}/files`,
        style: 'primary'
      }]
    }];

    const message = queryString.stringify({
      token: constasnt.SLACK_TOKEN,
      channel: constasnt.SLACK_CHANNEL,
      username: 'Code Review',
      icon_url: 'https://preview.ibb.co/d5vYTS/pr.png',
      attachments: JSON.stringify(attachments)
    });

    axios.post(constasnt.SLACK_MESSAGE_API, message);
  });
}


module.exports = PostPROnSlack;

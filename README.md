# slack-review

> Open Pull request from GitHub and will be automatically posted to slack review channel.

![slack review example](https://i.imgur.com/nTOlGjH.png)

## Setup

 - Setup:

  ```bash
    git clone git@github.com:Muhnad/slack-review.git

    cd slack-review

    npm install
  ```
 - **Generate** [Slack token](https://api.slack.com/custom-integrations/legacy-tokens)
 - **Open** file `src/constant.js`.
 - **Update** the `SLACK_TOKEN` with your token.
 - **Set** the `SLACK_CHANNEL` with your code review channel name. **Note** Must add `#` before channel name.
 - **Create** your own [GitHub app](https://probot.github.io/docs/development/#configure-a-github-app)
 - **Update** the `.env` file.
 - **Run** `npm start`


## Usage
- Install the app on your GitHub Repositories.
- Start Open Pull request from GitHub and will be automatically posted to slack review channel.

**Notes**

 the app by default run on port 3004, if you need to change the port just edit the `.env` file.

 if you need the app run in Background just add `&` at the end `npm start &`


## Deployment

 See [docs](https://probot.github.io/docs/deployment/) for more info.


**NOTE** the icon of the app used from [pluspng](http://pluspng.com/png-75780.html)

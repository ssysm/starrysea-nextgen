const express = require('express');
const fetch = require('node-fetch');
const url = require('url');
const appUri = "https://starrysea.org/";
const renderUri = "https://rendertron.tes-project.xyz/render";

const app = express();


// Generates the URL
function generateUrl(request) {
  return url.format({
    protocol: request.protocol,
    host: appUrl,
    pathname: request.originalUrl
  });
}

function detectBot(userAgent) {
  // List of bots to target, add more if you'd like

  const bots = [
    // crawler bots
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    // link bots
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot',
    'embedly',
    'baiduspider',
    'pinterest',
    'slackbot',
    'vkShare',
    'facebot',
    'outbrain',
    'W3C_Validator'
  ]

  const agent = userAgent.toLowerCase();

  for (const bot of bots) {
    if (agent.indexOf(bot) > -1) {
      console.log('bot detected', bot, agent)
      return true
    }
  }

  console.log('no bots found')
  return false

}


app.get('*', (req, res) => {


  const isBot = detectBot(req.headers['user-agent']);


  if (isBot) {

    const botUrl = generateUrl(req);
    // If Bot, fetch url via rendertron

    fetch(`${renderUri}/${botUrl}`)
      .then(res => res.text() )
      .then(body => {

        // Set the Vary header to cache the user agent, based on code from:
        // https://github.com/justinribeiro/pwa-firebase-functions-botrender
        res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        res.set('Vary', 'User-Agent');

        res.send(body.toString())

      });

  } else {


    // Not a bot, fetch the regular Angular app
    // Possibly faster to serve directly from from the functions directory?
    fetch(`${appUri}`)
      .then(res => res.text())
      .then(body => {
        res.send(body.toString());
      })
  }

});

app.listen(4400);

import boxen from 'boxen';
import lolcatjs from 'lolcatjs';

import figlet from 'figlet';

const cardOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  title: `Maurits Meester - Full Stack Developer`,
  titleAlignment: 'center'
};


figlet('About me', { font: 'Slant' }, function (err, title) {
  if (!err) {

    const content = `${title}

GitHub                https://github.com/mmeester
Twitter               https://twitter.com/mmeester
LinkedIn              https://linkedin.com/in/mauritsmeester
Instagram             https://instagram.com/mmeester

Mastodon @ vue.land   https://vue.land/@mmeester

═══════════════════════════════════════════════════════════════════════════

Companies: 

e-mmer Interactive    https://e-mmer.nl
Brouwerij Victorie    https://brouwerijvictorie.nl

═══════════════════════════════════════════════════════════════════════════

Shopware plugins      https://store.shopware.com/en/e-mmer-interactive.html`

    const card = boxen(content, cardOptions);

    lolcatjs.options.seed = Math.round(Math.random() * 1000);
    lolcatjs.options.spread = 14;
    lolcatjs.fromString(card);

  }
});
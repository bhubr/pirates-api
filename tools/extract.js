// Head to http://www.thewayofthepirates.com/famous-pirates/
// And paste this into the console
(function() {
  const r = document.querySelectorAll('body > div:nth-child(4) > div > div.col-lg-8.col-md-12.col-sm-12.col-12 > div.row')
  const pirates = [];
  const getId = (() => {
    let id = 0;
    return () => ++id;
  })();
  for (let i = 0; i < 26; i++) {
    const el = r[i];
    const img = el.getElementsByTagName('img');
    if(img.length === 0) continue;
    const imageUrl = img[0].src;
    const l = el.getElementsByTagName('a');
    const name = l[1].innerText;
    const p = el.getElementsByTagName('p');
    const shortBio = p[0].innerText;
    pirates.push({ id: getId(), imageUrl, name, shortBio });
  }
  return JSON.stringify(pirates, null, 2);
})();

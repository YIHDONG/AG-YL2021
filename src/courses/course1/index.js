const uuid = require('uuid');
const page1 = require('./page1');
const page2 = require('./page2');

const pagelist = [page1, page2];

for (let i = 0; i < pagelist.length; i += 1) {
  if (i === 0) {
    pagelist[i].next = pagelist[i + 1].id;
  } else if (i === pagelist.length - 1) {
    pagelist[i].previous = pagelist[i - 1].id;
  } else {
    pagelist[i].next = pagelist[i + 1].id;
    pagelist[i].previous = pagelist[i - 1].id;
  }
}

module.exports = {
  name: 'dijkstra',
  id: uuid.v4(),
  pages: pagelist, // pages in order
  firstPage: page1,
};

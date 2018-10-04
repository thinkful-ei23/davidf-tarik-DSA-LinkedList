'use strict';

const { LinkedList } = require('./linked-list-drills');

const LL = new LinkedList();

function main() {
  const SLL = LL;

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('Helo');
  SLL.insertBefore('BeforeTest', 'Husker');
  SLL.insertAfter('AfterTest', 'Husker');
  console.log(JSON.stringify(SLL));
}

main();

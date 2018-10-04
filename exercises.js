'use strict';

const { LinkedList } = require('./linked-list-drills');

const LL = new LinkedList();

function displayList(list) {
  console.log(JSON.stringify(list, null, 2));
}

function displaySize(list) {
  if(!list.head) {
    console.log('The linked list is empty');
    return;
  }

  let count = 1;
  let tempNode = list.head;
  while (tempNode.next !== null) {
    count++;
    tempNode = tempNode.next;
  }
  console.log(`The linked list has '${count}' nodes`);
}

function isEmpty(list) {
  if (!list.head) {
    console.log('The linked list is empty');
  }
  else {
    console.log('The linked list is populated');
  }
}

function findPrevious(list, item) {
  if (!list.head || list.head.value === item) {
    return null;
  }

  let previous = list.head;
  let current = list.head;

  while (current.next !== null && current.value !== item) {
    previous = current;
    current = current.next;
  }

  console.log(previous.value);
}

function main() {
  const SLL = LL;
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  displayList(SLL);
  displaySize(SLL);
  isEmpty(SLL);
  findPrevious(SLL, 'Boomer');
}

main();

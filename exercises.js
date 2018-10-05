'use strict';

const { LinkedList } = require('./linked-list-drills');

function displayList(list) {
  console.log(JSON.stringify(list, null, 2));
}

function displaySize(list) {
  if (!list.head) {
    console.log('The linked list is empty');
    return 0;
  }

  let count = 1;
  let tempNode = list.head;
  while (tempNode.next !== null) {
    count++;
    tempNode = tempNode.next;
  }
  console.log(`The linked list has '${count}' nodes`);
  return count;
}

function isEmpty(list) {
  if (!list.head) {
    console.log('The linked list is empty');
  } else {
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

  return previous;
}

function findLast(list) {
  if (!list.head) {
    return null;
  }

  if (list.head.next === null) {
    return list.head;
  }

  let tempNode = list.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }

  return tempNode;
}

function main() {
  const SLL = new LinkedList();
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
  findLast(SLL);
  // reverseList(SLL);
  displayList(SLL);
  findThirdToLast(SLL);
  findMiddleNode(SLL);

  const CycleList = new LinkedList();
  CycleList.insertFirst('January');
  CycleList.insertLast('February');
  CycleList.insertLast('March');
  CycleList.insertLast('April');
  const last = findLast(CycleList);
  const someNode = CycleList.find('February');
  last.next = someNode;
  isCycledList(CycleList);
  isCycledList(SLL);
}

main();

//MYSTERY PROGRAM: Skips over duplicate values, is Polynomial runtime

function reverseList(list, lastNode = null) {
  if (list.head.next === null) {
    list.head = lastNode;
    displayList(list);
    return list;
  }
  //get to the end probably with WHILE
  let current = findLast(list);
  if (lastNode === null) {
    lastNode = current;
  }
  let previous = findPrevious(list, current);
  //At the end set current.next to previous and previous.next
  //to null and then call the function
  current.next = previous;
  previous.next = null;

  return reverseList(list, lastNode);
}

function findThirdToLast(list) {
  const size = displaySize(list);
  if (size < 4) {
    return null;
  }

  let position = 1;
  let tempNode = list.head;

  while (position !== (size - 3)) {
    tempNode = tempNode.next;
    position++;
  }

  console.log(JSON.stringify(tempNode));
  return tempNode;
}

function findMiddleNode(list) {
  const size = displaySize(list);
  if (size < 3) {
    return null;
  }

  let position = 1;
  let middlePos = Math.floor(size/2);
  let tempNode = list.head;

  while (position !== middlePos) {
    tempNode = tempNode.next;
    position++;
  }

  console.log(JSON.stringify(tempNode));
  return tempNode;
}

function isCycledList(list) {
  let values = [list.head.value];
  let tempNode = list.head.next;
  let isCycled = true;
  while (values.indexOf(tempNode.next.value) === -1) {
    values.push(tempNode.next.value);
    tempNode = tempNode.next;

    if (tempNode.next === null) {
      isCycled = false;
      break;
    }
  }
  console.log('Is the list a cycled list? ' + isCycled);
  return isCycled;
}
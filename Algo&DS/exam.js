//ex1

arr1 = [4, 1, 3, 9, 7];

const bubbleSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
bubbleSort(arr1);
console.log(arr1);

//ex2

const BinarySearch = (arr, searchNb, start, end) => {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == searchNb) return -1;

  if (searchNb > arr[mid]) return BinarySearch(arr, searchNb, mid + 1, end);
  else return BinarySearch(arr, searchNb, start, mid - 1);
};

console.log(BinarySearch([0, 2, 4, 5, 6, 9, 12], 6, 0, 12));

//ex3

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = " ";
      while (curr) {
        listValues += `${curr.value}`;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

const list = new LinkedList();

list.append(2);
list.append(7);
list.append(8);
list.append(9);
list.append(10);

list.print();

class Node {
  constructor(data, child1, child2) {
    this.data = data;
    this.child1 = child1;
    this.child2 = child2;
  }

  printRows() {
    let nodes = [this];
    while (nodes.length > 0) {
      const level = [];
      const children = [];
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        level.push(node.data);
        if (node.child1) {
          children.push(node.child1);
        }
        if (node.child2) {
          children.push(node.child2);
        }
      }
      // After we've collected all the nodes for this level, print
      console.log(level.join(' '));
      // Now let's get the next level
      nodes = children;
    }
  }
}

const node = new Node(
  1, // 1
  new Node(
    2, //    2
    new Node(4), //        3
    new Node(5) //        4
  ),
  new Node(
    3, //    5
    new Node(6), //        6
    new Node(7) //        7
  )
);

node.printRows();

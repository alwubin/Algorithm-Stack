class Tree {
  constructor(value) { // 트리 생성 및 자식 노드 담을 배열 생성
    this.value = value;
    this.childeren = [];
  }
  insertNode(value) { // 자식 노드 생성
    const childNode = new Tree(value);
    this.children.push(childNode);
  }
  contains(value) { // 트리에서 원하는 원소 탐색
    if (this.value === value) { // 현재 노드의 원소와 일치한다면 true 
      return true;
    }
    for (let childNode of this.children) { // 자식 노드에서 원소 탐색
      if (childNode.contains(value)) {
        return true;
      }
    }
    return false; // 없으면 false
  }
}

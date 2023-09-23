// 큐는 연결 리스트로 구현하는 것이 효율적
// 큐 라이브러리 선언
class Queue {
  constructor() { // 큐 생성
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) { // 원소 삽입
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() { // 원소 삭제 
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() { // 헤드에 위치한 원소
    return this.items[this.headIndex];
  }
  getLength() { // 큐 원소의 개수 
    return this.tailIndex - this.headIndex;
  }
}

// 큐 라이브러리 사용하기
queue = new Queue();
// 큐 원소 삽입
queue.enqueue(1);
// 큐 원소 삭제
queue.dequeue();

// 배열 자료형으로 구현하기
let stack = [];

// 원소 삽입
stack.push(1); 

// 원소 삭제 
stack.pop(); 

// stack 출력 (최상위 원소부터 출력)
stack = stack.slice().reverse(); 
console.log(stack);



//연결 리스트로 구현하기 
class Stack {
  constructor() { // 스택 생성
    this.item = {}; //스택을 넣을 값
    this.headIndex = 0; //헤드 인덱스 
  }
  enstack(item) { // 원소 삽입
    this.items[this.headIndex] = item 
    this.headIndex++;
  }
  destack() { // 원소 삭제
    delete this.items[this.headIndex];
    this.headIndex++;
  }
  getStack() { // 최상위 원소부터 출력
    const reversed = stack;
  }
}



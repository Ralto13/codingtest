function solution(s, t){
  let answer=s.split(t).length - 1;
  return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
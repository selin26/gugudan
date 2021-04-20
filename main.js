while (true) {
  let num1 = Math.floor(Math.random() * 9) + 1
  let num2 = Math.floor(Math.random() * 9) + 1
  let result = num1 * num2
  let condition = true;
  while( condition) {
    let answer = prompt(String(num1) + ' 곱하기' + String(num2) + ' 는?')
    if(result === Number(answer)) {
      alert('정답입니다.')
      condition = false
    } else {
      alert('틀렸습니다ㅠㅠ 다시 맞춰보세요!')
    }
  }
}
function isBracketsOk (string) {
  const stack = []
  const ROUND_BRACKET_OPEN = '('
  const ROUND_BRACKET_CLOSE = ')'
  const CURLY_BRACKET_OPEN = '{'
  const CURLY_BRACKET_CLOSE = '}'

  for (const bracket of string) {
    if (bracket == ROUND_BRACKET_OPEN || bracket == CURLY_BRACKET_OPEN) {
      stack.push(bracket)
    } else if (stack.length == 0) {
      // wrong sequence
      return false 
    }
    if (bracket == ROUND_BRACKET_CLOSE || bracket == CURLY_BRACKET_CLOSE) {
      const TOP = stack[stack.length - 1]
      if (TOP == ROUND_BRACKET_OPEN && bracket == ROUND_BRACKET_CLOSE) {
        stack.pop()
      } else if (TOP == CURLY_BRACKET_OPEN && bracket == CURLY_BRACKET_CLOSE) {
        stack.pop()
      } else {
        // wrong sequence
        return false
      }
    }  
  }
  return stack.length == 0
}

console.log('check case - ()(()()) -', isBracketsOk('()(()())'));
console.log('check case - ())(() -', isBracketsOk('())(()'));
console.log('check case - (){}({}()) -', isBracketsOk('(){}({}())'));
console.log('check case - (}({}()) -', isBracketsOk('(}({}())'));
console.log('check case - ((()) -', isBracketsOk('((())'));
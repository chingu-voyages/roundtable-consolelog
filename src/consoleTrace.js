// console.trace
function foo() {
    function bar() {
      console.trace()
    }
    bar()
  }
  foo()
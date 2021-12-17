function receivesAFunction(callBack) {
  callBack();
}

function returnsANamedFunction() {
  return function sayHello() {
    return "Hello";
  };
}

function returnsAnAnonymousFunction() {
  return () => console.log("Hello");
}

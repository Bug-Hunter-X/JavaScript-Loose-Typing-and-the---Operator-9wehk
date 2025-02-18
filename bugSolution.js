function foo(a,b){
  if(typeof a === 'number' && typeof b === 'number'){
    return a+b;
  }else{
    return String(a)+String(b);
  }
}
foo(1,2);
foo(1,'2');
foo('1',2);
foo('1','2');
//Your code here
function justInvoke(cb){
    return cb();
}

function setThisWithCall (cb,thisValue,name){
  return cb.call(thisValue,name)
}

function setThisWithApply(cb, thisValue, args){
  return cb.apply(thisValue,args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  const newFunction = functionToBeCopied.bind(thisValue)
  return newFunction
}

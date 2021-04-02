const getUid = (() => {
    var uid = 0;
    console.log('uid before return', uid)
    console.log('take a break here')
    return () => ++uid;
  })();
  
  console.log(getUid());
  console.log(getUid());
  console.log(getUid());
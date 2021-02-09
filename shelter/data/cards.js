
function createQueueCards(len) {
  let result = [];
  outer: for(let i = 0; i < 48; i++) {
    let tempValue = Math.floor(Math.random() * 8) + 1;

    for(let j = len; 0 <= j;) {
      let tempArr = result.slice(1-len);
      if (tempArr.includes(tempValue)) {
        tempValue = Math.floor(Math.random() * 8) + 1;
      } else {
        result.push(tempValue);
        continue outer;
      }
    }
  }

  return result
}

function formCardsArray(data, queue) {
  return queue.map(elem => {
    for (let obj of data) {
      if(elem == obj.id) return obj;
    }
  });;
}

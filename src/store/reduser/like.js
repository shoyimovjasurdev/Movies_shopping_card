let number = JSON.parse(localStorage.getItem("arre"))
const initialState =number 

function cardReducer(state=initialState,action){
  if(action.type==="addLike"){
    let creatDate = state
    let lekeItem= JSON.parse(localStorage.getItem("arre"))
    lekeItem.push(action.piload)
    creatDate = lekeItem
    let arre = JSON.stringify(lekeItem)
    localStorage.setItem("arre",arre)
    return state = creatDate
  };

  if(action.type==="delItem"){
    let creatDate = state
    let lekeItem= JSON.parse(localStorage.getItem("arre"))
    lekeItem.splice(action.piload,1)
    creatDate = lekeItem
    let arre = JSON.stringify(lekeItem)
    localStorage.setItem("arre",arre)
    return state = creatDate
  };

return state
}
export {cardReducer}


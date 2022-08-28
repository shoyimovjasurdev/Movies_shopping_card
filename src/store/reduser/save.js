let number2 = JSON.parse(localStorage.getItem("arre2"))
const initialState2 =number2 

function saveReduser(state=initialState2,action){
  if(action.type==="addSave"){
    let creatDate = state
    let lekeItem= JSON.parse(localStorage.getItem("arre2"))
    lekeItem.push(action.piload)
    creatDate = lekeItem
    let arre = JSON.stringify(lekeItem)
    localStorage.setItem("arre2",arre)
    return state = creatDate
  };

  if(action.type==="delSave"){
    let creatDate = state
    let lekeItem= JSON.parse(localStorage.getItem("arre2"))
    lekeItem.splice(action.piload,1)
    creatDate = lekeItem
    let arre = JSON.stringify(lekeItem)
    localStorage.setItem("arre2",arre)
    return state = creatDate
  };

return state
}
export {saveReduser}
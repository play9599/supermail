//  防抖/节流
export function debounce(func,delay){
  let time = null
  return function (...args) {
    if (time) clearInterval(time)
    time = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}

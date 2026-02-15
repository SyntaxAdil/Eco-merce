function gonoVote(array) {
    if(!Array.isArray(array)) return "Invalid"
    let [ha,na]=[0,0]
    for(let item of array) {
        if(item.includes("ha")) ha++;
        else if(item.includes("na")) na++;
    }
    if(ha===na)return "equal"; else if(ha<na) return false ;else if(ha>na) return true
    
}
console.log(gonoVote(["na","na","na","na"]))
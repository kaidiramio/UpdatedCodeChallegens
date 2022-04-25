function abbrevName(name){
    const answer = [name[0]]
    for(let i = 0; i < name.length; i++) {
        if(name[i] === " ") {
            answer.push(name[i + 1]);
        }
    }
    return answer.map(el => el.toUpperCase()).join(".")
}
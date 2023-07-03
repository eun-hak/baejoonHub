function solution(people, limit) {
    people = people.sort((a,b) =>a-b)
    count = 0
    while(people.length !==0){
        if(people[0]+people[people.length-1] <=limit){
            count++
            people.shift()
            people.pop()
        }
        else{
            count++
            people.pop()
        }
    }
    return count
}
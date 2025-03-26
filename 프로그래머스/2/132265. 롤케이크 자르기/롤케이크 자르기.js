// function solution(topping) {
//     let answer = 0
//     let slice1  
//     let slice2
//     for (let i =1; i<topping.length ; i++){
//         slice1 = topping.slice(0,i)
//         slice2 = topping.slice(i)
//         let setSlice1 = new Set(slice1)
//         let setSlice2 = new Set(slice2)
//         if(setSlice1.size == setSlice2.size){
//             answer+=1
//         }
        
//     }
    
//     return answer;
// }

function solution(topping) {
    const left = new Map()
    const right = new Map()

    for (const t of topping) {
        right.set(t, (right.get(t) || 0) + 1)
    }

    let answer = 0

    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i]

        // 왼쪽에 토핑 추가
        left.set(t, (left.get(t) || 0) + 1)

        // 오른쪽에서 토핑 제거
        right.set(t, right.get(t) - 1)
        if (right.get(t) === 0) {
            right.delete(t)
        }

        // 종류 수 비교
        if (left.size === right.size) {
            answer += 1
        }
    }

    return answer
}

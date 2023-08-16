// function solution(phone_book) {
//     const hashMap = {}
    
//     for(let phoneNumber of phone_book) {
//         hashMap[phoneNumber] = 1
        
//     }
    
//     for(let phoneNumber of phone_book) {
//         let temp = ""
//         const phoneNumberWithoutSpace = phoneNumber.replace(/\s/g, "")
        
//         for(let number of phoneNumberWithoutSpace) {
//             temp += number
//             console.log(temp)
//             if(hashMap[temp] && temp != phoneNumberWithoutSpace) {
//                 return false
//             }
//         }
//     }
    
//     return true
// }



function solution(phone_book) {
    const hashMap = {}
    
    for (let phoneNumber of phone_book){
        
        hashMap[phoneNumber] = 1
    }
    
    for (let phoneNumber of phone_book){
        
        let temp = ""
        const phonNumberWithoutSpace = phoneNumber.replace(/\s/g,"")
        
        for (let number of phonNumberWithoutSpace){
            temp +=number
            if(hashMap[temp]&& temp !=phonNumberWithoutSpace){
                return false
            }
        }
    }
    
    return true
}
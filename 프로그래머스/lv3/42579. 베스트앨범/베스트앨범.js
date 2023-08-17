// function solution(genres, plays) {
//     let all_genres = {}
//     let answer = []
//     let genres_set = [...new Set(genres)]
//     for(let i of genres_set){
//       all_genres[`${i}`] = {}
//         for (let j=0; j<genres.length ; j++){
//             if(genres[j]==i){
//                 all_genres[`${i}`][j] =plays[j]
//             }
//         }
//     }
//       console.log(all_genres)

    
    
//        const sumByKeys = [];
//     for (const key in all_genres) {
//     const sum = sumObjectValues(all_genres[key]);
//     sumByKeys.push({ key, sum });
//         }
//     sumByKeys.sort((a, b) => b.sum - a.sum);
//     const orderedKeys = sumByKeys.map(item => item.key);
//     console.log('합이 가장 높은 순서대로 key 값 배열:', orderedKeys);
    
     
    
    
//      for (let k of orderedKeys){
//     let sorted = Object.entries(all_genres[k]).sort((a, b) => b[1] - a[1]);
//     var topthree = []

//     answer.push(sorted[0][0])
//     answer.push(sorted[1][0])
//     console.log(sorted)
//      }

    
    
 
//     const answer2 = answer.map(str => parseInt(str));
//     console.log(answer2)
//     return answer2
// }





// function sumObjectValues(obj) {
//   return Object.values(obj).reduce((acc, curr) => acc + curr, 0);
// }



function solution(genres, plays) {
    let answer = [];

    let dict = {};
    for(let i = 0; i < genres.length; i++){
        if(dict[genres[i]] === undefined){
            dict[genres[i]] = [plays[i], [i, plays[i]]];
        }else{
            dict[genres[i]][0]+=plays[i];
            dict[genres[i]].push([i, plays[i]]);
        }   
    }
    let array = []
    for(let key in dict){
        array.push(dict[key]);
    }

    // 내림차순 정렬
    array.sort(function(a, b)  {
        return b[0] - a[0];
    });
    // 맨 앞에꺼 잘라내기
    let array_ = [];
    for(let arr of array){
        array_.push(arr.slice(1))
    }

    // 2차원 배열 정렬하기
    for(let arr of array_){
        arr.sort((a, b) => b[1] - a[1]);
    }

    for(let arr of array_)
        for(let i = 0 ; i < arr.length; i++)
            if(i < 2){ // 2개까지만 담는다.
                answer.push(arr[i][0]);
            }

    return answer;
}


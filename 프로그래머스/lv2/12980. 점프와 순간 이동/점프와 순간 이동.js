function solution(n)
{
    //5까지 가려면 1 jump  2 tel 4 tel 5 jump
    //8까지 가려면 1 jump  2 tel 4 tel 8 tel
    //2500 1250 625 624! 312 156 78 39 38! 19 18! 9 8! 4 2 1 0!
    let count = 0
    while (n!==0){
        if (n%2 !=0){
            n=n-1
            count++
        }
        else{
            n=n/2
        }
    }
    return count
}
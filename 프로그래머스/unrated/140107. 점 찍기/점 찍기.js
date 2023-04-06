function solution(k, d) {

    let total_count = 0;

    for(let x = 0; x <= d; x += k) {
        const max_y = parseInt(Math.sqrt(d ** 2 - x ** 2));
        total_count += parseInt(max_y / k) + 1;
    }

    return total_count;
}

function solution(numbers) {
    // 숫자를 문자열로 변환
    const strNumbers = numbers.map(String);

    // 문자열을 기준으로 정렬
    strNumbers.sort((a, b) => (b + a) - (a + b));

    // 정렬된 숫자를 이어붙임
    const result = strNumbers.join('');

    // 결과가 모두 0으로만 이루어진 경우 처리
    return result.startsWith('0') ? '0' : result;
}

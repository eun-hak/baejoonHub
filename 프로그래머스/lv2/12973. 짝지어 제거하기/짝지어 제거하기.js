function solution(s) {
    const sArray = s.split('');
    const stack = [];
    for (let i = sArray.length - 1; i >= 0; i--)
        if (sArray[i] === stack.at(-1))
            stack.pop();
        else
            stack.push(sArray[i]);
    return stack.length === 0 ? 1 : 0
}
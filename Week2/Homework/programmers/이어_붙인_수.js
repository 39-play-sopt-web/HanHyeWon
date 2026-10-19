function solution(num_list) {
    let odd = "";
    let even = "";

    for (const num of num_list) {
        if (num % 2 === 1) {
            odd += num;
        } else {
            even += num;
        }
    }

    return Number(odd) + Number(even);
}
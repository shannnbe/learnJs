myArray = [4, -2, 0, 5, -2, 1, 6]
function solution(a) {
    let n, i, j = 1, sum = 0;

    for (i = 0; i < n; i++) {
        while (j < i) {
        if (a[i] >= 0) {
            sum += a[i];
            break;
        }
        j++;
        break;
        }
    }

  console.log("\n" + sum);

  return 0;
}

solution(myArray);

// Given an array nums of disnict integers, return all the possible permutations.

function permuteHelper(i, arr, ans, output) {

    if(i === arr.length) {
        output.push([...ans]);
        return;
    }

    for(let j = i; j < arr.length; j++) {

        const tempAns = [...ans];
        
        [arr[i], arr[j]] =[arr[j], arr[i]];

        tempAns.push(arr[i]);

        permuteHelper(i + 1, arr, [...tempAns], output);

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
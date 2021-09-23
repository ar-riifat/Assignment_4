function seerToMon(seer) {
    // 40 seer = 1 mon
    if (seer<0) {
        return "wrong input";
    }
const mon = seer / 40;
return mon;
}

// console.log(seerToMon(100));
// console.log("Negative check", seerToMon(-40));

function totalsales(shirt, pant, shoe) {
    if (shirt < 0 || pant < 0 || shoe < 0) {
        return "Quantity can't be negative.";
    }
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    const total = shirt * shirtPrice + pant * pantPrice + shoe * shoePrice;
    return total;
}
// console.log(totalSales(1, 1, 1));
// console.log(totalSales(1, -1, 1));
// console.log(totalSales(5, 10, 15));
// console.log(totalSales(15, 10, 5));

function delivertCost(num) {
    const first100 = 100;
    const second100 = 80;
    const rest = 50;

    if (num ≥ 0 && num ≤ 100) {
        return num * first100;
    } else if (num > 100 && num ≤ 200);{
        const first100Cost = 100 * first100;
        const restProduct = (num - 100) * second100;
        return first100Cost + restProduct;
    } else if (num > 200) {
        const first100Cost = 100 * first100;
        const second100Cost = 100 * second100;
        const restProduct = (num - 200) * rest;
        return first100Cost + second100Cost + restProduct;
    } else {
        return "Invalid input";
    }
}
console.log(deliveryCost(101));
console.log(deliveryCost(200));
console.log(deliveryCost(201));
console.log(deliveryCost(-1));

function perfectFriend(arr) {
    if (arr.length === 0) {
        return "Please enter a valid array.";
    }
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i];
        if (name.length === 5) {
            return name;
        }
    }
}
const friends = ["abcde", "abcdef", "abc"];

console.log(perfectFriend(["abcdef", "abc", "abc", "abee", "abec"]));
console.log(perfectFriend(["abcdef", "abc", "abec"]));
console.log(perfectFriend(["abcdef", "abc", "abec"]));



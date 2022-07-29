let myarr: any[] = [1, 2, 3, "Hi"];

// for (let i = 0; i < myarr.length; i++) {
//     console.log(myarr[i]);
//     switch (myarr[i]) {
//         case 1:
//             console.log("1");
//             break;
//         case "Hi":
//             console.log("Hi");
//             break;
//         default:
//             break;
//     }

//     if (myarr[i] == "Hi") {
//         myarr.pop();
//         myarr.push("Hello");
//         console.log(myarr);
//     }
// }

enum WorkStatus{
    Task = 1,
    Working,
    Done
}
console.log(WorkStatus.Done);

let employee: [number, string, boolean][]= [[1, "Knot", true],[2, "Mee", false],[3, "Bob", true]];
employee.push([4, "Gosh", false])
// console.log(employee);
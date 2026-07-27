// const divide = (a: number, b: number) => {
//     const p = new Promise<number>(
//         //executor function
//         (resolveFnRef, rejectFnRef) => {
//             let res = a / b
//             if (res === Infinity) {
//                 const error = new Error("divisor should not be zero...")
//                 rejectFnRef(error)
//             }

//             //return res
//             resolveFnRef(res)
//         }
//     )
//     return p
// }

// const add = (a: number, b: number) => a + b

// const divPromise = divide(12, 3)
// divPromise
//     .then(
//         (data) => console.log(data)
//     )
//     .catch(
//         (err) => console.log(err)
//     )


// console.log(add(12, 3));
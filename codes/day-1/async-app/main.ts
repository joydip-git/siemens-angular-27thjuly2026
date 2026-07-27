const divide = async (a: number, b: number) => {
    let res = a / b
    if (res === Infinity) {
        const error = new Error("divisor should not be zero...")
        throw error
        //return Promise.reject('')
    }

    return res
    //return Promise.resolve(res)
}

const add = (a: number, b: number) => a + b

async function call() {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
call()

console.log(add(12, 3));
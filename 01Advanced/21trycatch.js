const converttoRs = (dollar) => {
    if (typeof dollar === 'number')
        return dollar * 64
    else
        throw Error('Amount Needs to be in number')
}




try {
    const myValue = converttoRs('five')

    console.log(myValue);
} catch (error) {
    console.log(error);

}

console.log('I will not run if program crashes');

// try and catch does not freezes the program if there is error.

export const shortenedAddress = ( address ) => {
    return  `${address.slice(0,5)}.....${address.substr(-5)}`
}
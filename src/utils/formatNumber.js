export const formatNumber = function (number) {
    if (number > 999) {
        return (`${number}`.slice(0,`${number}`.length - 3) + '.' + `${number}`.slice(-3) + '.000đ')
    } else {
        return `${number}.000đ`
    }
}
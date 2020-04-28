// 小数转换百分比过滤器
export function percentNum(val) {
    if (val && `${val}`.indexOf('%') < 0) {
        return `${(val * 100).toFixed(2)}%`
    } else if (val && `${val}`.indexOf('%') >= 0) {
        return val
    } else {
        return ''
    }
}

// 日期数字字符串转月日过滤器
export function dateStr(val) {
    if (val) {
        return `${val.substring(4, 6) * 1}月${val.substring(6, 8) * 1}日`
    } else {
        return ''
    }
}
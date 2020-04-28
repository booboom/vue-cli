//地址参数字典
const toDictionary = function () {
    var url = window.location.href
    var str = url.substring(url.lastIndexOf('?') + 1)
    var tmp = {}
    str.replace(/([^?&=\/#]+)=([^?&=\/#]+)/g, function (res, $1, $2) {
        var name = decodeURIComponent($1)
        var val = decodeURIComponent($2)
        tmp[name] = val
    })
    return tmp
}


export default {
    toDictionary,
}
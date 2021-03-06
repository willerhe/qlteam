Date.prototype.Format = function (fmt) {
    var o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        'S': this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
}


let filters = {
    formatTime: function (time, format) {
        var fm = format || 'yyyy-MM-dd hh:mm'
        const d = new Date(time)
        const now = Date.now()

        const diff = (now - d) / 1000
        if (diff < 30 && diff > 0) {
            return '刚才'
        } else if (diff < 3600 && diff > 0) { // less 1 hour
            return Math.ceil(diff / 60) + ' 分钟前'
        } else if (diff < 3600 * 24 && diff > 0) {
            return Math.ceil(diff / 3600) + ' 小时前'
        } else if (diff < 3600 * 24 * 2 && diff > 0) {
            return '昨天'
        }
        return d.Format(fm)
    }


}

export default filters


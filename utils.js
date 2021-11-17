// =================================
const config = require('./config')
const Filter = require('bad-words')

// =================================
module.exports.createId = function (prefix) {
    const chars = config.ids.chars

    let result = ''
    for (let i = 0; i < config.ids.charLength; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return prefix + result
}

// =================================
const wordFilter = new Filter()

module.exports.filterText = function (text) {
    return wordFilter.clean(text)
}

// =================================
const addZeroBefore = function (n) {
    return (n < 10 ? '0' : '') + n
}

module.exports.printLog = function (txt, type, shard = null) {
    const d = new Date()

    let func, pref

    if (type === 'DEBUG') {
        func = console.debug
        pref = shard === null ? '[DEBUG]' : `[DEBUG-${shard}]`
    } else if (type === 'WARN') {
        func = console.warn
        pref = shard === null ? '[WARN ]' : `[WARN-${shard} ]`
    } else if (type === 'ERROR') {
        func = console.error
        pref = shard === null ? '[ERROR]' : `[ERROR-${shard}]`
    } else {
        func = console.info
        pref = shard === null ? '[INFO ]' : `[INFO-${shard} ]`
    }

    func(`${pref} ${addZeroBefore(d.getHours())}:${addZeroBefore(d.getSeconds())} > ${txt}`)
}
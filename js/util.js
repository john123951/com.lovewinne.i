function calcTimeSpan(startTime, endTime) {
    var timeSpan = endTime.getTime() - startTime.getTime();  //时间差的毫秒数

    //计算出相差天数
    var days = Math.floor(timeSpan / (24 * 3600 * 1000));

    //计算出小时数

    var leave1 = timeSpan % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);       //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));

    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);     //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);

    return { days: days, hours: hours, minutes: minutes, seconds: seconds };
}

function ContentPicker(contentList) {
    var me = this;
    var _contentList = contentList;
    var _position = 0;

    var len = _contentList.length;

    var swap = function (a, b) {
        var temp = _contentList[a];
        _contentList[a] = _contentList[b];
        _contentList[b] = temp;
    }

    for (var i = 0; i < len / 2; i++) {
        var index = Math.floor(Math.random() * len);
        swap(index, i);
    }

    me.getNext = function () {
        var result = _contentList[_position++];

        if (_position >= _contentList.length) _position = 0;

        return result;
    }
}
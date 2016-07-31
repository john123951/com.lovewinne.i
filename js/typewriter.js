(function (a) {
    a.fn.typewriter = function (timeout, endCallBack, startCallBack) {
        var arr = this;

        arr.each(function (index, element) {
            var d = a(element), c = d.html(), b = 0;
            d.html("");

            setTimeout(eventHandler, timeout);

            function eventHandler() {
                if (typeof (startCallBack) == "function") { startCallBack(); }

                var e = setInterval(function () {
                    var f = c.substr(b, 1);
                    if (f == "<") {
                        b = c.indexOf(">", b) + 1;
                    } else {
                        b++;
                    }
                    d.html(c.substring(0, b) + (b & 1 ? "_" : ""));
                    if (b >= c.length) {
                        clearInterval(e);
                        if (typeof (endCallBack) == "function") { endCallBack(); }
                    }
                }, 75);
            }
        });
        return this;
    }
})(jQuery);
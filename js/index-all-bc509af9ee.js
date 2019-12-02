$(function () {

    $('#dowebok').fullpage({
        sectionsColor: ['#CE3D3A', '#000000'],
        //loopTop:true,
        // 滚到某一屏之后调用
        afterLoad: function (link, index) {
            // index 当前section的编号
            // current类加给谁 谁就做动画
            $('.section').removeClass('current');
            // 让动画 延迟执行100ms
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            }, 100);
        }

    });

    $("#openSplashActivity").click(function () {
        try {
             var timeMs = new Date().getTime();
               var obj = { time:timeMs,isClick:true };
            var result  = JSON.stringify(obj);
            window.NavActivityInterface.saveNavState(result);
        } catch (e) {
            Toast('欢迎体验',1500);
			console.log(e.toString());
        }

    });

    /**
     * 弹出 Toast
     * @param msg
     * @param duration
     * @constructor
     */
    function Toast(msg, duration) {
        duration = isNaN(duration) ? 3000 : duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(m);
        setTimeout(function () {
            var d = 0.5;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function () {
                document.body.removeChild(m)
            }, d * 1000);
        }, duration);
    }
});
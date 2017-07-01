/**
 * $aScrpits = array('/js/common/count/count.js','20160628','data-token="pc-store,pc-chanpin" id="token"');
 * echo script($aScrpits);

 * <scrpit src="http://himg.china.cn??/js/xx.js,/js/common/count/count.js?t=20160628" data-token="pc-chanpin,pc-chanpinv2" id="token"></script>
 */
var _bdTongjiCode = {
    'pc':{
        'main'		: '066cf190c4bdf8653ad5ea8f496c4a13',	// http://cn.china.cn
        'search'	: '60030dce41abe35fdcca4338a88126a7',	// http://www.china.cn/search
        'chanpin'	: '6633f2c221756b56fb625ded6d946372',	// http://www.china.cn/chanpin
        'gongsi'	: 'd85321decd7916c1a3908fc814d7a410',	// http://www.china.cn/gongsi
        'store'		: '3cfaa114cca90dbeb8cf6908074f92ef',	// http://*.cn.china.cn
        'my'		: '213f8f7908788761a31ca8adec0ee0e6',	// http://my.cn.china.cn
        'fair'		: 'd44d322f15ce53a1a8e588d73e2cba16',	// http://fair.china.cn
        'chanpinv2'	: '12cce192286531bdbf67063cb5f0c37f',	// http://www.china.cn/chanpin-simple, add by hyde, on 2016-06-28
        'error'		: 'eacc334f8eb162234e4fc886d62315dc'	// http://*.china.cn/common/errorpages/
    },
    'mobile':{
        'main'		: '23b0be23f6936148a67fd6d685028b9f',	// http://site.china.cn
        'search'	: '537a3eceb47d03bbd2c0bd5567502944',	// http://site.china.cn/search
        'chanpin'	: 'd79f1d097d941ff320b69a1a184e0419',	// http://site.china.cn/chanpin
        'gongsi'	: '6f9765b4b69ae5c6fd72ae7fbbb31023',	// http://site.china.cn/gongsi
        'weixin'	: '95fc489789bbe3ca29aad6f33d82b850'	// http://weixin.china.cn
    }
};

(function(){
    // var tokens = $('[data-token]').data('token');
    var tokensElement = document.getElementById('token');
    var tokens = tokensElement.getAttribute('data-token');
    // console.log(tokens);
    var token = tokens.split(',');
    // console.log(token);
    var countid;
    for(var i=0;i<token.length;i++){
        countid = eval('_bdTongjiCode.'+token[i].split('-')[0]+'.'+token[i].split('-')[1]);
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?"+countid;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }
})()
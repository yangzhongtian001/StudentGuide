$(function () {
    var config = {
        "直升初一": "https://guidejump.hcc.io/zs-cy",
        "常规初一(张潇文)": "https://guidejump.hcc.io/cg-cy-zxw",
        "常规初一(陈纹珊)": "https://guidejump.hcc.io/cg-cy-cws",
        "直升初二": "https://guidejump.hcc.io/zs-ce",
        "常规初二": "https://guidejump.hcc.io/cg-ce",
        "初三": "https://guidejump.hcc.io/cs",
        "直升高一": "https://guidejump.hcc.io/zs-gy",
        "高一": "https://guidejump.hcc.io/gy",
        "高二": "https://guidejump.hcc.io/ge",
        "高三": "https://guidejump.hcc.io/gs",
        "国际部高一": "https://guidejump.hcc.io/gjb-gy",
        "国际部高二": "https://guidejump.hcc.io/gjb-ge",
        "国际部高三": "https://guidejump.hcc.io/gjb-gs"
    }
    var loadData = function () {
        $(".v-bind").each(function () {
            var url = config[$(this).text()];
            if (url == "") url = 'javascript: swal("错误","该年级数据未导入！","error")';
            $(this).attr("href", url);
        })
    }
    loadData();
});
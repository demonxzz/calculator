/**
 * Created by dyyho on 2016/6/23.
 */

Math.add = function(v1, v2)
{
///<summary>精确计算加法。语法：Math.add(v1, v2)</summary>
///<param name="v1" type="number">操作数。</param>
///<param name="v2" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
    var r1, r2, m;
    try
    {
        r1 = v1.toString().split(".")[1].length;
    }
    catch (e)
    {
        r1 = 0;
    }
    try
    {
        r2 = v2.toString().split(".")[1].length;
    }
    catch (e)
    {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));

    return (v1 * m + v2 * m) / m;
};
Math.sub = function(arg1, arg2)
{
///<summary>精确计算减法。语法：Math.sub(v1, v2)</summary>
///<param name="v1" type="number">操作数。</param>
///<param name="v2" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
   // return Math.add(v1, -v2);
    var r1, r2, m, n;
    try
    {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e)
    {
        r1 = 0;
    }
    try
    {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }

    //m为两数最多到小数点后多少位 如1.254和10.51相减 m=1000
    m = Math.pow(10, Math.max(r1, r2));


    //last modify by deeka
    //动态控制精度长度 以两数中小数点位数最多的为精度长度
    n = (r1 >= r2) ? r1 : r2;

    return ((arg1 * m - arg2 * m) / m).toFixed(n);
};


Math.mul = function(v1, v2)
{
///<summary>精确计算乘法。语法：Math.mul(v1, v2)</summary>
///<param name="v1" type="number">操作数。</param>
///<param name="v2" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
    var m = 0;
    var s1 = v1.toString();
    var s2 = v2.toString();
    try
    {
        m += s1.split(".")[1].length;
    }
    catch (e)
    {
    }
    try
    {
        m += s2.split(".")[1].length;
    }
    catch (e)
    {
    }

    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
};



Math.div = function(v1, v2)
{
///<summary>精确计算除法。语法：Math.div(v1, v2)</summary>
///<param name="v1" type="number">操作数。</param>
///<param name="v2" type="number">操作数。</param>
///<returns type="number">计算结果。</returns>
    var t1 = 0;
    var t2 = 0;
    var r1, r2;
    try
    {
        t1 = v1.toString().split(".")[1].length;
    }
    catch (e)
    {
    }
    try
    {
        t2 = v2.toString().split(".")[1].length;
    }
    catch (e)
    {
    }

    with (Math)
    {
        r1 = Number(v1.toString().replace(".", ""));
        r2 = Number(v2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
};

function money_round(money,len,type)//type 1是四舍五舍 2是四入五入 默认1
{
    if(type==2) {
        return Math.ceil(money*Math.pow(10,len))/Math.pow(10,len);
    }
    else{
        return parseInt(money*Math.pow(10,len))/Math.pow(10,len);//Math.floor(-5.9)=-6;因此不用floor
    }
}
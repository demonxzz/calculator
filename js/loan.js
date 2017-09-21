
var ty_jzll="4.9";//基准利率
 //计算--商代
function jisuan() {

	//车价
	var carPrice = Math.mul($("#zhsydk").val(), 10000);

	//小排量
	var smaller_capacity;

	if($("#xs3").val() == '1.6及以内')
	{
		smaller_capacity = true;
	}else
	{
		smaller_capacity = false;
	}

	//购置税
	var purchase = 0.00;

	if(smaller_capacity)
	{
		purchase = Math.mul(Math.mul(carPrice, 0.08547), 0.75);
	}else{
		purchase = Math.mul(carPrice, 0.08547);
	}

	//console.log(purchase);3

	//保险
	var safety = 0.00;

	//取整
	var pi = money_round(Math.div(carPrice, 10000), 0, 1);

	//console.log(pi);

	//计算保险金额
	if(carPrice < 200000)
	{
		safety = Math.add(4700, Math.mul(Math.sub(pi, 5), 300));
	}else{
		safety = Math.add(9400, Math.mul(Math.sub(pi, 20), 500));
	}

	//融资额
    var financing = Math.mul(Math.add(Math.add(carPrice, purchase), safety), 0.8);

	//首付
	var down_payment = 0.00;

	//月供
	var monthly_payment = 0.00;

	if(financing < 150000)
	{
		down_payment = Math.sub(Math.mul(Math.add(Math.add(carPrice, purchase), safety), 0.2), 0) ;

		//弹性参数 用于计算月供
		var springVar = Math.mul(carPrice, 0.05);

		if(springVar >= 5000)
		{
			monthly_payment = Math.mul(Math.div(Math.add(financing, 5000), 10000), 348.4);
		}else
		{
			monthly_payment = Math.mul(Math.div(Math.add(financing, springVar), 10000), 348.4);
		}
		
	}else{
		down_payment = Math.add(Math.mul(Math.add(Math.add(carPrice, purchase), safety), 0.2), 3000);

		monthly_payment = Math.mul(Math.div(financing, 10000), 347);
	}

	//返利

	var temp_1 = Math.mul(Math.sub(financing, 1000), 0.03);

    var temp_2 = Math.mul(Math.sub(safety, 1100), 0.2);

    var rebate = 0.00;

    if(financing < 150000)
    {
    	rebate = Math.add(temp_1, temp_2);
    }

	$("#carprice").text(carPrice);

	$("#purchase").text(money_round(purchase, 2, 2));

	$("#safety").text(money_round(safety, 2, 2));

	$("#financing").text(money_round(financing, 2, 2));

	$("#down_payment").text(money_round(down_payment, 2, 2));

	$("#monthly_payment").text(money_round(monthly_payment, 2, 2));

	$("#rebate").text(money_round(rebate, 2, 2));
}

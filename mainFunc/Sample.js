function Hello(){
	
	var rply = '你好!';//定義機器人要說啥
	
	return rply;//把要說的送回分析區

}	

function greentea(){
	
	var rply = '是隻鳥!';
	
	return rply;
	
}

module.exports = {
	Hello
};//這個部分是為了讓使用這個.js的程式知道哪些函數能用

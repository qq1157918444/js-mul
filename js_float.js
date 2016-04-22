/*加法*/
/*加法貌似只有0.1+0.2、0.2+0.4、0.3+0.6、0.4+0.8才会出现计算不精准*/
function add(arg1,arg2){
    var r1,r2,m;
    if(parseInt(arg1) == arg1){
        r1 = 0;
    }else{
        r1 = arg1.toString().split(".")[1].length;
    }
    if(parseInt(arg2) == arg2){
        r2 = 0;
    }else{
        r2 = arg2.toString().split(".")[1].length;
    }
    m = Math.pow(10,Math.max(r1,r2));
    var sum = (arg1*m + arg2*m)/m;
    return sum;
}
console.log("******add******");
console.log(add(0.1,0.2));
console.log(add(-0.1,-0.2));
console.log(add(1,2));
console.log(add(-1,-2));
/*减法*/
function sub(arg1,arg2){
    var r1,r2, m,n;
    if(parseInt(arg1) == arg1){
        r1 = 0;
    }else{
        r1 = arg1.toString().split(".")[1].length;
    }
    if(parseInt(arg2) == arg2){
        r2 = 0;
    }else{
        r2 = arg2.toString().split(".")[1].length;
    }
    m = Math.pow(10,Math.max(r1,r2));
    n = (r1 > r2 ) ? r1 : r2;
    var sum = ((arg1*m - arg2*m)/m).toFixed(n);
    return sum;
}
console.log("******sub******");
console.log(sub(0.3243,0.133));
console.log(sub(1,2));
/*乘法*/
function mul(arg1,arg2){
    var r1,r2, m, n,q;
    if(parseInt(arg1) == arg1){
        r1 = 0;
    }else{
        r1 = arg1.toString().split(".")[1].length;
    }
    if(parseInt(arg2) == arg2){
        r2 = 0;
    }else{
        r2 = arg2.toString().split(".")[1].length;
    }
    m = Math.pow(10,r1);
    n = Math.pow(10,r2);
    q = m*n;
    var sum = ((arg1*m * arg2*n)/q);
    return sum;
}
console.log("******mul******");
console.log(mul(1,2));
console.log(mul(0.1,0.2));
console.log(mul(0.1,0.23));
console.log(mul(0.12323,0.23343434));
/*除法*/
function div(arg1,arg2){
    var r1,r2, m, n, q,j;
    if(parseInt(arg1) == arg1){
        r1 = 0;
    }else{
        r1 = arg1.toString().split(".")[1].length;
    }
    if(parseInt(arg2) == arg2){
        r2 = 0;
    }else{
        r2 = arg2.toString().split(".")[1].length;
    }

    q = r1 >= r2 ? r1-r2 : r2-r1;
    m = Math.pow(10,r1);
    n = Math.pow(10,r2);
    j = Math.pow(10,q);

    var sum = r1 >=r2 ? ((arg1*m) / (arg2*n)/j) : ((arg1*m) / (arg2*n)*j);
    return sum;

}
console.log("******div******");
console.log(div(1,2));
console.log(div(10.10,2));
console.log(div(0.1,0.2));
console.log(div(0.1,0.23));
console.log(div(0.12323,0.23343434));
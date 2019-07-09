for(var i=0;i<=20;i++){
    if(i%2==0){
        document.write(i+'是偶数'+'<br>');
    }else{
        document.write(i+'是奇数'+'<br>');
    }
}
for(var i=1;i<=9;i++){
    for(var j=1;j<i+1;j++){
        if(j!=i){
            document.write(i+"*"+j+"="+i*j+ '&nbsp&nbsp&nbsp');
        }else{
            document.write(i+"*"+j+"="+i*j+'<br>');
        }
    }
}
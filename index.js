function addquotes(){
    var names=["Oscar Wilde","Marilyn Monroe","Albert Einstein","Frank Zappa"]
    var text=["“Be yourself; everyone else is already taken.”","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“So many books, so little time.”"]
   var item= Math.floor( Math.random() * names.length );
 document.getElementById("demo").innerHTML=text[item];
 document.getElementById("deno").innerHTML=names[item];
   
}

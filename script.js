let name=prompt("請輸入你的名字:")
document.write("你好!"+name+"歡迎進入網站")

let i=0, imgArr=new Array();
imgArr[0]="https://i.quotev.com/ny2ev4kmxiza.jpg";
imgArr[1]="https://i.pinimg.com/736x/d6/2f/09/d62f09e659669f4616d0c50382b1e82b.jpg";
imgArr[2]="https://favim.com/pd/p/orig/2018/08/31/funny-stray-kids-reactions-Favim.com-6233668.jpg";
imgArr[3]="https://favim.com/pd/s11/orig/7/749/7499/74999/stray-kids-meme-straykids-stray-kids-memes-Favim.com-7499910.jpg";
imgArr[4]="https://pbs.twimg.com/media/EQ_0LUmXkAIwnZp?format=jpg&name=360x360";


function showImg(){
  document.getElementById("ico").src=imgArr[i];
  i=(i+1)%5
}

function show(){
  setInterval(showImg,2000);
}
 function Fortune() {
            const fortunes = ["大吉", "吉", "小吉", "小凶", "凶", "大凶"];
            const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            document.getElementById('result').textContent = name+"的"+ `今日運勢: ${randomFortune}`;
        }
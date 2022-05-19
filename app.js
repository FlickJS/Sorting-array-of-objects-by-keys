let tab = [
{a:2,b:3,c:4,},
{a:1,b:10,c:8,},
{a:2,b:3,c:5,},
{a:2,b:1,c:5,},
{a:0,b:10,c:8,},
];

tab.sort(function(a, b) {
  if(a.a == b.a){
    if(a.b == b.b){
      return a.c - b.c;
    }else{
      return a.b - b.b;
    }
  }else{
    return a.a - b.a;
  }
});

  for(let i=0;i<tab.length;i++){
    console.log(tab[i].b);

};
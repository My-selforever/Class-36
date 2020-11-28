class Player
{
    constructor()
    {

    } 

 Read()
  {
    var PC = database.ref('PlayerC')
    PC.on("value",function(data)
    {
        count = data.val();
    })
  }

 Update(c)
  {
    database.ref('/').update(
        {
           'PlayerC':c
        });
  }

Personlize(n)
  {
      var members = "player"+count
    database.ref(members).set(
        {
           'Name':n
        });    
  }
}

 /* 
function Read(d)
{
   p = d.val()
   console.log(p)
   ball.x = p.X;
   ball.y = p.Y;
} */
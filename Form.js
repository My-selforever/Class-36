class Form

{
constructor()
{

}

display()
{
console.log("hi")
    var title = createElement('h2')
    title.html("WELCOME TO THE RACE GAME!!!")
    title.position(400,400);
    var input = createInput("Enter Your Username")
    input.position(400,375);
    var button = createButton("Submit");
    button.position(400,350);
    button.mousePressed(function()
    {
      input.hide();
      button.hide();
      title.hide();
      var name = input.value()
      count+=1;
      player.Update(count)
      player.Personlize(name);
      var Greet = createElement('h1')
      Greet.html("Welcome "+ name+" To This Race Game c:")
      Greet.position(400,400);
      
    })
}

}
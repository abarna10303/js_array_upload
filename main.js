
var foodsdata=[];

var flenght=prompt("Enter the Array lenght");
for(i=0;i<flenght;i++)
{
     foodsdata[i]=prompt("Enter the Foods");

}
document.write(foodsdata);
document.write("<br>");
function change()
{
    var changeindex=prompt("How much index can you change");
    for(j=0;j<changeindex;j++)
    {
        var changein=prompt("Type the change Index");
        for(i=changein;i<=changein;i++)
        {
            foodsdata[i]=prompt("Enter the change value");
        }   
    }
document.write(foodsdata);
}
change();
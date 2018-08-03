var kolonlar=14;
var sutunlar=14;

var renkler = [];

function Dizi2D()
{
    for(var i=0;i<kolonlar;i++)
    {
        renkler[i]=[];
        for(var j=0;j<sutunlar;j++)
        {
            renkler[i][j]=random(255);
        }
    }
}

function setup() {
    createCanvas(420,420);
    Dizi2D();
}

function draw() {
    background(81);
    for(var i =0;i<kolonlar;i++)
    {
        for(var j=0;j<sutunlar;j++)
        {
            var x=i*30;
            var y=j*30;
            stroke(0);
            fill(renkler[i][j]);
            rect(x,y,30,30);
        }
    }
}
function mousePressed()
{
    Dizi2D();
}
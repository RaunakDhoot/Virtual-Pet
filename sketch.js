var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  dog.loadImage("Dog.png")
  happyDog.loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,40,40)
  dog.addImage(dog)
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDog)
  }


  //add styles here

}

function readStock(data){
  foodS.data = val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}




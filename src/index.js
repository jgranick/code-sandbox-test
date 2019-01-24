import { Bitmap, BitmapData, Sprite, Stage, MouseEvent } from "openfl";

class App extends Sprite {
  constructor() {
    super();
    this.graphics.beginFill(0xff0000);
    this.graphics.drawRect(0, 0, 100, 100);
    this.addEventListener("click", function(e) {
      alert("CLICK");
    });
    // CORS error, need different URL
    BitmapData.loadFromFile("https://www.openfl.org/images/logo.png")
      .onComplete(this.bitmapData_onComplete.bind(this))
      .onError(this.bitmapData_onError);
  }
  bitmapData_onComplete(bitmapData) {
    var bitmap = new Bitmap(bitmapData);
    bitmap.x = (this.stage.stageWidth - bitmap.width) / 2;
    bitmap.y = (this.stage.stageHeight - bitmap.height) / 2;
    var sprite = new Sprite();
    sprite.buttonMode = true;
    sprite.addChild(bitmap);
    sprite.addEventListener(
      MouseEvent.MOUSE_DOWN,
      this.sprite_onMouseDown.bind(this)
    );
    this.addChild(sprite);
  }
  bitmapData_onError(e) {
    console.log(e);
  }
  sprite_onMouseDown(event) {
    alert("CLICK");
  }
}

var stage = new Stage(550, 400, 0xffffff, App);
document.getElementById("app").appendChild(stage.element);

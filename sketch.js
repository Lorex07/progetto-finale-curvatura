
function preload(){
  oldTree = loadAsset("old_tree.glb")
  drevo.glb = loadAsset("derevo.glb")
}
  
function setup() {
  createCanvas3D(windowWidth, windowHeight);
  background3D("#99FFFF");

  environment(SUNSET);
  
  
//ALBERO
var albero = beginGroup();
diffuse("#83E2FA");
capsule(0, 3, 0, 2);
align (TOP);
diffuse("#994C00");
  cylinder(0, 0, 0, 0.5, 1.5);
  endGroup();
  
  //CESPUGLIO
  var cespuglio = beginGroup();
  diffuse("#499200");
  sphere(0, -1, 0, 1.3)
  endGroup();
  
  
  var lato = 110;
  var lato2 = 10;
  var numeroAlberi = 90
  for (var i=0; i<numeroAlberi; i++){
    
    var x = random(-lato/2, lato/2);
    var y = 0;
    var z = random(-lato/2, lato/2);
    
   var nuovoalbero = clone(albero, x, y, z);
    nuovoalbero.setScale(random(1, 2));
    
    var x = random(-lato/2, lato/2);
    var y = 0;
    var z= random(-lato/2, lato/2);
    clone(cespuglio, x, y, z);
    clone(oldTree, i, h, g);
    clone(drevo.glb, a, b, c);
  }
  align(BOTTOM)
  diffuse("#458801");
  box(0,0,0, lato,1, lato)
  
  pushFX(BLOOM, 0.13);
  

}

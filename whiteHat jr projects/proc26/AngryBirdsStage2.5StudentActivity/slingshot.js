class Slingshot{

constructor(bodya,pointb){

var option={
bodyA:bodya,
pointB:pointb,
stiffness:0.04,
length:10



}
   
this.pointb=pointb
this.sling=Constraint.create(option)
World.add(world,this.sling)


}

display(){
 if(this.sling.bodyA){

    var pointa=this.sling.bodyA.position
    var pointb=this.pointb
    strokeWeight(4)
    line(pointa.x,pointa.y,pointb.x,pointb.y)
    


 }   


}

fly(){

this.sling.bodyA=null






}




}
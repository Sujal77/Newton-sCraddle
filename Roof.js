class Roof{
    constructor(x,y,w,h){
        var options={
            'isStatic':true,
            'density' : 1

        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        World.add(world,this.body)
    }
    display(){
        var pos= this.body.position;
        push()
        translate(pos.x,pos.y)
        fill(255,0,0)
        stroke("white")
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        
       
        pop()
    }



}
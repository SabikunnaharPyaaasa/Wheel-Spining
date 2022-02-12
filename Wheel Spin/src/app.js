
var HelloWorldLayer = cc.Layer.extend({
    sprite1:null,
    sprite2:null,
    sprite3:null,
    sprite4:null,
    spriteb: null,
    spritel:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        //Game label
       

        var sprite = new cc.Sprite.create(res.backj_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 0)


        var stand = new cc.Sprite.create(res.stand_png);
        stand.setAnchorPoint(cc.p(0.5, 0.85));
        stand.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(stand, 0)

        
        var sprite1 = new cc.Sprite.create(res.spin_png);
        sprite1.setAnchorPoint(cc.p(0.5, 0.5));
        sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite1, 0)

     

        var sprite2 = new cc.Sprite.create(res.border_png);
        sprite2.setAnchorPoint(cc.p(0.5, 0.24));
        sprite2.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite2, 1)

        var spriteb = new cc.Sprite.create(res.border2_png);
        spriteb.setAnchorPoint(cc.p(0.5, 0.24));
        spriteb.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(spriteb, 1)

        spriteb.setOpacity(0);
        var sprite_action1 = cc.FadeIn.create(0.5);
        var sprite_action22 = cc.FadeOut.create(0.5);
        var sequence_border1 = cc.Repeat.create(cc.Sequence.create(sprite_action1, sprite_action22),5000);
        spriteb.runAction(sequence_border1);
        

        var spritel = new cc.Sprite.create(res.border_light_all_png);
        spritel.setAnchorPoint(cc.p(0.5, 0.24));
        spritel.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(spritel, 1)
 
        spritel.setOpacity(0);
        var sprite_action = cc.FadeIn.create(1.5);
        var sprite_action2 = cc.FadeOut.create(1);
        var sequence_border = cc.Repeat.create(cc.Sequence.create(sprite_action, sprite_action2),5000);
        spritel.runAction(sequence_border);

      


        var sprite3 = new cc.Sprite.create(res.niddle_png);
        sprite3.setAnchorPoint(cc.p(0.5, -2.85));
        sprite3.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite3, 1)

     
        var button = new ccui.Button();
        button.loadTextures(res.GO_png, res.CloseSelected_png);
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);

        var label = new cc.LabelTTF("SPIN TO EARN", "Arial");
        label.setFontSize(50);
        label.setAnchorPoint(cc.p(0.5, -2.7));
        label.setPosition(cc.p(size.width/2,size.height/2));
        label.setColor(cc.color(255,0,0));
        this.addChild(label);

        var dollar = new cc.Sprite.create(res.dollar_png);
        dollar.setAnchorPoint(cc.p(-12, 10));
        dollar.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(dollar, 1);



        // var menu1 = new.cc.MenuItemFont("play", play);
        // var menu2 = new.cc.MenuItemFont("play1", play1);

        // var menu = new cc.Menu(menu1, menu2);
        // menu.aligItemsVerticallyWitPadding(50);
        // this.addChild(menu);


        return true;
    },
    touchEvent: function(sender, type)
    {
        switch(type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.audioEngine.playMusic(res.Main_Music, false);
                this.scheduleOnce(stopMusic,10);
        var size = cc.winSize;
        var sprite1 = new cc.Sprite.create(res.spin_png);
        sprite1.setAnchorPoint(cc.p(0.5, 0.5));
        sprite1.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite1, 0)
      
       // cc.log(block1,block2,block3,block4,block5);

        var rand = Math.random();
        
        //var angle = Math.random()*Math.PI*2;
        var angle = Math.round((Math.floor(Math.random() * (360)) + 1)/15);
        //var angle = 4;
        cc.log(angle);
        if(angle == 20 || angle == 21||angle == 22||angle == 23||angle == 24)
        {
        angle = angle*1.4;
        var sprite_action = cc.Repeat.create(cc.RotateBy.create(0.4, angle),2);
        var sprite_action0 = cc.Repeat.create(cc.RotateBy.create(0.1, angle),25);
        var sprite_action2 = cc.Repeat.create(cc.RotateBy.create(0.2, angle),5);
        var sprite_action22 = cc.Repeat.create(cc.RotateBy.create(0.3, angle),3);
        var sprite_action3 = cc.Repeat.create(cc.RotateBy.create(0.4, angle),3);
        var sprite_action33 = cc.Repeat.create(cc.RotateBy.create(0.5, angle),1);
        var sprite_action4 = cc.Repeat.create(cc.RotateBy.create(0.7, angle),2);
        var sprite_action6 = cc.Repeat.create(cc.RotateBy.create(0.9, angle),1);
        
        var sequence_action = cc.Sequence.create(sprite_action, sprite_action0, sprite_action2, sprite_action22, sprite_action3, sprite_action33,sprite_action4,sprite_action6);
        sprite1.runAction(sequence_action );
        if(angle >= 28 && angle<29)
        {
            this.scheduleOnce(coin250,10);
            this.scheduleOnce(Label250,10);
         cc.log("250");
         
        }
        else if(angle >= 29 && angle<30)
        {
            
            this.scheduleOnce(coin450,10);
            this.scheduleOnce(Label450,10);
         cc.log("450");
         
        }
        else if(angle >= 30 && angle<=31)
        {
            this.scheduleOnce(Labelspin,10);
         cc.log("Spin again");
         
        }
        else if(angle >= 32 && angle<=33)
        {
            this.scheduleOnce(coin500,10);
            this.scheduleOnce(Label500,10);
         cc.log("500");
         
        }
        else if(angle >= 33 && angle<=34)
        {
            this.scheduleOnce(coin250,10);
            this.scheduleOnce(Label250,10);
         cc.log("250");
         
        }
        }


        else if(angle == 15 || angle == 16||angle == 17||angle == 18||angle == 19)
        {
        angle = angle*1.8;
        var sprite_action = cc.Repeat.create(cc.RotateBy.create(0.4, angle),2);
        var sprite_action0 = cc.Repeat.create(cc.RotateBy.create(0.1, angle),25);
        var sprite_action2 = cc.Repeat.create(cc.RotateBy.create(0.2, angle),5);
        var sprite_action22 = cc.Repeat.create(cc.RotateBy.create(0.3, angle),3);
        var sprite_action3 = cc.Repeat.create(cc.RotateBy.create(0.4, angle),3);
        var sprite_action33 = cc.Repeat.create(cc.RotateBy.create(0.5, angle),1);
        var sprite_action4 = cc.Repeat.create(cc.RotateBy.create(0.7, angle),2);
        var sprite_action6 = cc.Repeat.create(cc.RotateBy.create(0.9, angle),1.1);
        
        var sequence_action = cc.Sequence.create(sprite_action, sprite_action0, sprite_action2, sprite_action22, sprite_action3, sprite_action33,sprite_action4,sprite_action6);
        sprite1.runAction(sequence_action );
        if(angle == 27)
        {
            this.scheduleOnce(coin400,10);
            this.scheduleOnce(Label400,10);
         cc.log("400");
         
        }
        else if(angle >=28&&  angle<=29)
        {
            this.scheduleOnce(LabelLose,10);
         cc.log("Lose a turn");
     
        }
        else if(angle >= 30 && angle<=31)
        {
            this.scheduleOnce(Labelspin,10);
         cc.log("Spin again");
        
        }
        else if(angle >=32 && angle<=33)
        {
            this.scheduleOnce(coin100,10);
            this.scheduleOnce(Label100,10);
         cc.log("100");
         
        }
        else if(angle >=34 && angle<=35)
        {
            this.scheduleOnce(Bankrupt,10);
         cc.log("Bankrupt");
        }
        }

        
        else if(angle == 10 || angle == 11||angle == 12||angle == 13||angle == 14)
        {
        angle = angle*2.65;
        cc.log(angle);
        var sprite_action = cc.Repeat.create(cc.RotateBy.create(0.4, angle),2);
        var sprite_action0 = cc.Repeat.create(cc.RotateBy.create(0.1, angle),25);
        var sprite_action2 = cc.Repeat.create(cc.RotateBy.create(0.2, angle),5);
        var sprite_action22 = cc.Repeat.create(cc.RotateBy.create(0.3, angle),3);
        var sprite_action3 = cc.Repeat.create(cc.RotateBy.create(0.4, angle),3);
        var sprite_action33 = cc.Repeat.create(cc.RotateBy.create(0.5, angle),1);
        var sprite_action4 = cc.Repeat.create(cc.RotateBy.create(0.7, angle),2);
        var sprite_action6 = cc.Repeat.create(cc.RotateBy.create(0.9, angle),1.1);
        
        var sequence_action = cc.Sequence.create(sprite_action, sprite_action0, sprite_action2, sprite_action22, sprite_action3, sprite_action33,sprite_action4,sprite_action6);
        sprite1.runAction(sequence_action );
        if(angle>=26 && angle<=27)
        {
            this.scheduleOnce(coin600,10);
            this.scheduleOnce(Label600,10);
         cc.log("600");
        }
        else if(angle>=29 && angle<=30)
        {
            this.scheduleOnce(coin450,10);
            this.scheduleOnce(Label450,10);
         cc.log("450");
        }
        else if(angle>=31 && angle<=32)
        {
            this.scheduleOnce(coin400,10);
            this.scheduleOnce(Label400,10);
         cc.log("400");
        }
        else if(angle>=34 && angle<=35)
        {
            this.scheduleOnce(Bankrupt,10);
         cc.log("Bankrupt");
        }
        else if(angle>=37 && angle<=38)
        {
            this.scheduleOnce(coin400,10);
            this.scheduleOnce(Label400,10);     
         cc.log("400");
        }
        }


        else if(angle == 6||angle == 7||angle == 8||angle == 9)
        {
        angle = angle*4.1;
        cc.log(angle);
        var sprite_action = cc.Repeat.create(cc.RotateBy.create(0.4, angle),2);
        var sprite_action0 = cc.Repeat.create(cc.RotateBy.create(0.1, angle),25);
        var sprite_action2 = cc.Repeat.create(cc.RotateBy.create(0.2, angle),5);
        var sprite_action22 = cc.Repeat.create(cc.RotateBy.create(0.3, angle),3);
        var sprite_action3 = cc.Repeat.create(cc.RotateBy.create(0.4, angle),3);
        var sprite_action33 = cc.Repeat.create(cc.RotateBy.create(0.5, angle),1);
        var sprite_action4 = cc.Repeat.create(cc.RotateBy.create(0.7, angle),2);
        var sprite_action6 = cc.Repeat.create(cc.RotateBy.create(0.9, angle),1.1);
        
        var sequence_action = cc.Sequence.create(sprite_action, sprite_action0, sprite_action2, sprite_action22, sprite_action3, sprite_action33,sprite_action4,sprite_action6);
        sprite1.runAction(sequence_action );
        if(angle>=24 && angle<=25)
        {
            this.scheduleOnce(coin300,10);
            this.scheduleOnce(Label300,10);
         cc.log("300");
        }
        else if(angle>=28 && angle<=29)
        {
         this.scheduleOnce(LabelLose,10);
         cc.log("Lose a Turn");
        }
        else if(angle>=32 && angle<=33)
        {
            this.scheduleOnce(coin200,10);
            this.scheduleOnce(Label200,10);
         cc.log("200");
        }
        else if(angle>=36 && angle<=37)
        {
            var Coin250 = new cc.Sprite.create(res.coin250_png);
            Coin250.setAnchorPoint(cc.p(0.5, 0.5));
            Coin250.setPosition(cc.p(size.width / 2, size.height / 2));
            this.scheduleOnce(coin250,10);
            var label250 = new cc.LabelTTF("250", "Arial");
            label250.setFontSize(20);
            label250.setAnchorPoint(cc.p(0.5, 0.5));
            label250.setPosition(cc.p(size.width/2,size.height/2));
            label250.setColor(cc.color(255,0,0));
            //this.addChild(label400,1);
            this.scheduleOnce(Label250,10);
            
         cc.log("250");
        }
     
        }
        

        else if(angle == 5||angle == 4)
        {
        angle = angle*6.5;
        cc.log(angle);
        cc.log(angle);
        var sprite_action = cc.Repeat.create(cc.RotateBy.create(0.4, angle),2);
        var sprite_action0 = cc.Repeat.create(cc.RotateBy.create(0.1, angle),25);
        var sprite_action2 = cc.Repeat.create(cc.RotateBy.create(0.2, angle),5);
        var sprite_action22 = cc.Repeat.create(cc.RotateBy.create(0.3, angle),3);
        var sprite_action3 = cc.Repeat.create(cc.RotateBy.create(0.4, angle),3);
        var sprite_action33 = cc.Repeat.create(cc.RotateBy.create(0.5, angle),1);
        var sprite_action4 = cc.Repeat.create(cc.RotateBy.create(0.7, angle),2);
        var sprite_action6 = cc.Repeat.create(cc.RotateBy.create(0.9, angle),1.1);
        
        var sequence_action = cc.Sequence.create(sprite_action, sprite_action0, sprite_action2, sprite_action22, sprite_action3, sprite_action33,sprite_action4,sprite_action6);
        sprite1.runAction(sequence_action );
        if(angle>=32 && angle<=33)
        {
            this.scheduleOnce(coin100,10);
            this.scheduleOnce(Label100,10);
         cc.log("100");
        }
        else if(angle>=25 && angle<=27)
        {
            this.scheduleOnce(coin300,10);
            this.scheduleOnce(Label300,10);
         cc.log("300");
        }
        }

        
        else if(angle == 3||angle == 2 ||angle == 1 || angle == 0 )
        {
        angle = 28;
        cc.log(angle);
        cc.log(angle);
        var sprite_action = cc.Repeat.create(cc.RotateBy.create(0.4, angle),2);
        var sprite_action0 = cc.Repeat.create(cc.RotateBy.create(0.1, angle),25);
        var sprite_action2 = cc.Repeat.create(cc.RotateBy.create(0.2, angle),5);
        var sprite_action22 = cc.Repeat.create(cc.RotateBy.create(0.3, angle),3);
        var sprite_action3 = cc.Repeat.create(cc.RotateBy.create(0.4, angle),3);
        var sprite_action33 = cc.Repeat.create(cc.RotateBy.create(0.5, angle),1);
        var sprite_action4 = cc.Repeat.create(cc.RotateBy.create(0.7, angle),2);
        var sprite_action6 = cc.Repeat.create(cc.RotateBy.create(0.9, angle),1.1);
        
        var sequence_action = cc.Sequence.create(sprite_action, sprite_action0, sprite_action2, sprite_action22, sprite_action3, sprite_action33,sprite_action4,sprite_action6);
        sprite1.runAction(sequence_action );
            this.scheduleOnce(coin250,10);
            this.scheduleOnce(Label250,10);
       
         cc.log("250");
        }




  
              
                cc.log("Touch Down");
                break;
        }
    }
  
    
});
var stopMusic = function()
{
    cc.audioEngine.stopMusic();
}
 function coin400()
{
    var size = cc.winSize;
    var Coin400 = new cc.Sprite.create(res.coin400_png);
    Coin400.setAnchorPoint(cc.p(0.5, 0.5));
    Coin400.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(Coin400, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    Coin400.runAction(sequence_label);
}

function coin600()
{
    var size = cc.winSize;
    var Coin600 = new cc.Sprite.create(res.coin600_png);
    Coin600.setAnchorPoint(cc.p(0.5, 0.5));
    Coin600.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(Coin600, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    Coin600.runAction(sequence_label);
}



function coin500()
{
    var size = cc.winSize;
    var Coin500 = new cc.Sprite.create(res.coin500_png);
    Coin500.setAnchorPoint(cc.p(0.5, 0.5));
    Coin500.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(Coin500, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    Coin500.runAction(sequence_label);
}

function coin450()
{
    var size = cc.winSize;
    var Coin450 = new cc.Sprite.create(res.coin450_png);
    Coin450.setAnchorPoint(cc.p(0.5, 0.5));
    Coin450.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(Coin450, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    Coin450.runAction(sequence_label);
}

function coin300()
{
    var size = cc.winSize;
    var Coin300 = new cc.Sprite.create(res.coin300_png);
    Coin300.setAnchorPoint(cc.p(0.5, 0.5));
    Coin300.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(Coin300, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    Coin300.runAction(sequence_label);
}

function coin250()
{
    var size = cc.winSize;
    var Coin250 = new cc.Sprite.create(res.coin250_png);
    Coin250.setAnchorPoint(cc.p(0.5, 0.5));
    Coin250.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(Coin250, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    Coin250.runAction(sequence_label);
}

function coin200()
{
    var size = cc.winSize;
    var Coin200 = new cc.Sprite.create(res.coin200_png);
    Coin200.setAnchorPoint(cc.p(0.5, 0.5));
    Coin200.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(Coin200, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    Coin200.runAction(sequence_label);
}

function coin100()
{
    var size = cc.winSize;
    var Coin100 = new cc.Sprite.create(res.coin100_png);
    Coin100.setAnchorPoint(cc.p(0.5, 0.5));
    Coin100.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(Coin100, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    Coin100.runAction(sequence_label);
}

function Bankrupt()
{
    var size = cc.winSize;
    var bankrupt = new cc.Sprite.create(res.bankrupt_png);
    bankrupt.setAnchorPoint(cc.p(0.5, 0.5));
    bankrupt.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(bankrupt, 1)
    var label_action3 = cc.Repeat.create(cc.RotateBy.create(0.5, 20),10);
    var label_action2 = cc.FadeOut.create(5);
    var sequence_label = cc.Sequence.create(label_action3,label_action2);
    bankrupt.runAction(sequence_label);
}

function Label600()
{
    var size = cc.winSize;

    var label600 = new cc.LabelTTF("600", "Arial");
    label600.setFontSize(20);
    label600.setAnchorPoint(cc.p(-6.5, 7.3));
    label600.setPosition(cc.p(size.width/2,size.height/2));
    label600.setColor(cc.color(255,0,0));
    this.addChild(label600,1);
    var label600_action = cc.FadeOut.create(8);
    label600.runAction(label600_action );
}

function Label500()
{
    var size = cc.winSize;

    var label500 = new cc.LabelTTF("500", "Arial");
    label500.setFontSize(20);
    label500.setAnchorPoint(cc.p(-6.5, 7.3));
    label500.setPosition(cc.p(size.width/2,size.height/2));
    label500.setColor(cc.color(255,0,0));
    this.addChild(label500,1);
    var label500_action = cc.FadeOut.create(8);
    label500.runAction(label500_action );
}

function Label400()
{
    var size = cc.winSize;

    var label400 = new cc.LabelTTF("400", "Arial");
    label400.setFontSize(20);
    label400.setAnchorPoint(cc.p(-6.5, 7.3));
    label400.setPosition(cc.p(size.width/2,size.height/2));
    label400.setColor(cc.color(255,0,0));
    this.addChild(label400,1);
    var label400_action = cc.FadeOut.create(8);
    //var sequence_label400 = cc.Sequence.create(label_action3,label_action2);
    label400.runAction(label400_action );
}

function Label300()
{
    var size = cc.winSize;

    var label300 = new cc.LabelTTF("300", "Arial");
    label300.setFontSize(20);
    label300.setAnchorPoint(cc.p(-6.5, 7.3));
    label300.setPosition(cc.p(size.width/2,size.height/2));
    label300.setColor(cc.color(255,0,0));
    this.addChild(label300,1);
    var label300_action = cc.FadeOut.create(8);
    label300.runAction(label300_action );
}
function Label450()
{
    var size = cc.winSize;

    var label450 = new cc.LabelTTF("450", "Arial");
    label450.setFontSize(20);
    label450.setAnchorPoint(cc.p(-6.5, 7.3));
    label450.setPosition(cc.p(size.width/2,size.height/2));
    label450.setColor(cc.color(255,0,0));
    this.addChild(label450,1);
    var label450_action = cc.FadeOut.create(8);
    //var sequence_label400 = cc.Sequence.create(label_action3,label_action2);
    label450.runAction(label450_action );
}

function Label250()
{
    var size = cc.winSize;

    var label250 = new cc.LabelTTF("250", "Arial");
    label250.setFontSize(20);
    label250.setAnchorPoint(cc.p(-6.5, 7.3));
    label250.setPosition(cc.p(size.width/2,size.height/2));
    label250.setColor(cc.color(255,0,0));
    this.addChild(label250,1);
    var label250_action = cc.FadeOut.create(8);
    label250.runAction(label250_action );
}

function Label100()
{
    var size = cc.winSize;

    var label100 = new cc.LabelTTF("100", "Arial");
    label100.setFontSize(20);
    label100.setAnchorPoint(cc.p(-6.5, 7.3));
    label100.setPosition(cc.p(size.width/2,size.height/2));
    label100.setColor(cc.color(255,0,0));
    this.addChild(label100,1);
    var label100_action = cc.FadeOut.create(8);
    label100.runAction(label100_action );
}

function Label200()
{
    var size = cc.winSize;

    var label200 = new cc.LabelTTF("200", "Arial");
    label200.setFontSize(20);
    label200.setAnchorPoint(cc.p(-6.5, 7.3));
    label200.setPosition(cc.p(size.width/2,size.height/2));
    label200.setColor(cc.color(255,0,0));
    this.addChild(label200,1);
    var label200_action = cc.FadeOut.create(8);
    label200.runAction(label200_action );
}

function Labelspin()
{
    var size = cc.winSize;

    var labelspin = new cc.LabelTTF("Free Spin!!!! Please try again", "Arial");
    labelspin.setFontSize(40);
    labelspin.setAnchorPoint(cc.p(0.5, 4));
    labelspin.setPosition(cc.p(size.width/2,size.height/2));
    labelspin.setColor(cc.color(255,255,255));
    this.addChild(labelspin,1);
    var labelspin_action = cc.FadeOut.create(8);
    labelspin.runAction(labelspin_action );
}

function LabelLose()
{
    var size = cc.winSize;

    var labelLose = new cc.LabelTTF("You Have Losed your turn!!!! Please try again", "Arial");
    labelLose.setFontSize(30);
    labelLose.setAnchorPoint(cc.p(0.5, 4));
    labelLose.setPosition(cc.p(size.width/2,size.height/2));
    labelLose.setColor(cc.color(255,255,255));
    this.addChild(labelLose,1);
    var labelspin_action = cc.FadeOut.create(8);
    labelLose.runAction(labelspin_action );
}




var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


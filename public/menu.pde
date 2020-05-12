class Menu {
    var activo;
    PImage[] img;

    Menu() {
<<<<<<< HEAD
<<<<<<< HEAD
        this.img = new PImage[7];
        //Default menu
        this.img[0] = loadImage("src/menu/default.png");
        this.img[1] = loadImage("src/menu/continuar.png");
        this.img[2] = loadImage("src/menu/salir.png");
        this.img[3] = loadImage("src/menu/ayuda.png");
        this.img[4] = loadImage("src/menu/replayDef.png");
        this.img[5] = loadImage("src/menu/replay.png");
        this.img[6] = loadImage("src/menu/rp.png");
        this.activo = false;
    }

    void mostrar(x, y, mensaje) {
       if((x>350 && x<507)&& (y>478&&y<634)){
           textSize(50);
           if(mensaje == "Has perdido"){
            image(img[5],0,0);
           }
           else
            image(img[1],0,0);

       }else if((x>555 && x<709)&& (y>478&&y<634)){
           if(mensaje == "Has perdido"){
             image(img[2],0,0);
             image(img[6],0,0);
            }else{
               image(img[2],0,0); 
            }
          
       }else if((x>751&&x<911)&&(y>478&&y<634)){
           if(mensaje == "Has perdido"){
             image(img[3],0,0);
             image(img[6],0,0);
            }else{
               image(img[3],0,0); 
            }
       }else{
           if(mensaje == "Has perdido")
            image(img[4],0,0);
           else
            image(img[0],0,0);
       }
        textAlign(CENTER);
        if(mensaje.length<10)
            textSize(105);
        else
            textSize(95);

        fill(150);
        text(mensaje,635,405);
        fill(0);
        text(mensaje,630,400);
=======
        this.img = new PImage[10];
=======
        this.img = new PImage[7];
>>>>>>> 1ef13cdd4b15fcdd45e4a5d1692f0e774893a036
        //Default menu
        this.img[0] = loadImage("src/menu/default.png");
        this.img[1] = loadImage("src/menu/continuar.png");
        this.img[2] = loadImage("src/menu/salir.png");
        this.img[3] = loadImage("src/menu/ayuda.png");
        this.img[4] = loadImage("src/menu/replayDef.png");
        this.img[5] = loadImage("src/menu/replay.png");
        this.img[6] = loadImage("src/menu/rp.png");
        this.activo = false;
    }

<<<<<<< HEAD
    void mostrar(x, y, tipo) {
        if (tipo == 'pause') {
            if ((x > 418 && x < 901) && (y > 386 && y < 459))
                image(img[0], 0, 0);
            else if ((x > 418 && x < 773) && (y > 528 && y < 602))
                image(img[1], 0, 0);
            else if((x>433 && x<888) && (y>831 && y<879))
                image(img[9], 0, 0);
            else
                image(img[2], 0, 0);
        } else if (tipo == 'ganar') {
            if ((x > 418 && x < 901) && (y > 386 && y < 459))
                image(img[4], 0, 0);
            else if ((x > 418 && x < 773) && (y > 528 && y < 602))
                image(img[5], 0, 0);
            else
                image(img[3], 0, 0);
        } else {
            if ((x > 418 && x < 901) && (y > 386 && y < 459))
                image(img[7], 0, 0);
            else if ((x > 418 && x < 773) && (y > 528 && y < 602))
                image(img[8], 0, 0);
            else
                image(img[6], 0, 0);
        }
>>>>>>> b9d92d26c7931ba5acf3ea4655c22b1235d3cccb
=======
    void mostrar(x, y, mensaje) {
       if((x>350 && x<507)&& (y>478&&y<634)){
           textSize(50);
           if(mensaje == "Has perdido"){
            image(img[5],0,0);
           }
           else
            image(img[1],0,0);

       }else if((x>555 && x<709)&& (y>478&&y<634)){
           if(mensaje == "Has perdido"){
             image(img[2],0,0);
             image(img[6],0,0);
            }else{
               image(img[2],0,0); 
            }
          
       }else if((x>751&&x<911)&&(y>478&&y<634)){
           if(mensaje == "Has perdido"){
             image(img[3],0,0);
             image(img[6],0,0);
            }else{
               image(img[3],0,0); 
            }
       }else{
           if(mensaje == "Has perdido")
            image(img[4],0,0);
           else
            image(img[0],0,0);
       }
        textAlign(CENTER);
        if(mensaje.length<10)
            textSize(105);
        else
            textSize(95);

        fill(150);
        text(mensaje,635,405);
        fill(0);
        text(mensaje,630,400);
>>>>>>> 1ef13cdd4b15fcdd45e4a5d1692f0e774893a036
    }

    int opcion(x, y) {
         if((x>350 && x<507)&& (y>478&&y<634))
            return 0;
        else if((x>555 && x<709)&& (y>478&&y<634))
            return 1;
<<<<<<< HEAD
<<<<<<< HEAD
        else if((x>751&&x<911)&&(y>478&&y<634))
=======
        else if((x>433 && x<888) && (y>831 && y<879))
>>>>>>> b9d92d26c7931ba5acf3ea4655c22b1235d3cccb
=======
        else if((x>751&&x<911)&&(y>478&&y<634))
>>>>>>> 1ef13cdd4b15fcdd45e4a5d1692f0e774893a036
            return 2;
        else 
            return -1;
    }

}
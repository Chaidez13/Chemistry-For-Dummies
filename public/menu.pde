class Menu{
	var activo;
	PImage[] img;

	Menu(){
		this.img = new PImage[9];
		//Default menu
		this.img[0] = loadImage("src/1.png");
		this.img[1] = loadImage("src/2.png");
		this.img[2] = loadImage("src/3.png");
		//Ganar menu
		this.img[3] = loadImage("src/ganar/default.png");
		this.img[4] = loadImage("src/ganar/continuar.png");
		this.img[5] = loadImage("src/ganar/salir.png");
		//Perder menu
		this.img[6] = loadImage("src/perder/default.png");
		this.img[7] = loadImage("src/perder/continuar.png");
		this.img[8] = loadImage("src/perder/salir.png");

		this.activo = false;
	}

	void mostrar(x,y,tipo){
		if(tipo=='pause'){
			if((x>=400 && x<=800)&&(y>350 && y<440))	
				image(img[0],0,0);
			else if((x>=531 && x<=738)&&(y>484 && y<552))	
				image(img[1],0,0);
			else
				image(img[2],0,0);
		}else if(tipo=='ganar'){
			if((x>=400 && x<=800)&&(y>350 && y<440))	
				image(img[4],0,0);
			else if((x>=531 && x<=738)&&(y>484 && y<552))	
				image(img[5],0,0);
			else
				image(img[3],0,0);
		}else{
			if((x>=400 && x<=800)&&(y>350 && y<440))	
				image(img[7],0,0);
			else if((x>=531 && x<=738)&&(y>484 && y<552))	
				image(img[8],0,0);
			else
				image(img[6],0,0);
		}
	}

	int opcion(x,y){
		if((x>=400 && x<=800)&&(y>350 && y<440))	
			return 0;
		else if((x>=531 && x<=738)&&(y>484 && y<552))	
			return 1;
		else
			return -1;
	}

}
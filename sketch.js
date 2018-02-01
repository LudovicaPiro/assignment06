
var myData;

var img;

var disegna=1;

var astronauts = []; //questa variabile è una lista vuota

function preload(){		img=loadImage("./assets/piccioneC.png");
						myData = loadJSON('./assets/peopleinspace.json');
					}

function setup(){ 	createCanvas(500,500);
                     imageMode(CENTER);
					//frameRate(1);

					for (var i = 0; i < myData.people.length; i++) 
					{	var astroData=myData.people[i];
						var newAstronauts = new Icona(astroData.name, astroData.launchdate, astroData.careerdays, (width/myData.people.length)*i+40,astroData.careerdays);
						astronauts.push(newAstronauts);
					}

				}


function draw(){	
                if(frameCount==disegna*13) { background("#004250");
                    disegna+=3;
                    for (var i = 0; i < 80; i++) {  noStroke();
													fill("#f0e130");
													var c=random(100);
													var cy=random(50);
													ellipse(20*i+c, 16*i+cy, 7+(i/3));
												} }
					
                
					noStroke();
                    fill("#536878");
                    ellipse(240,450, 800, 300);
					fill("#cadcdd");
					ellipse(250,500, 800, 300);
                     

    for (var i = 0; i < astronauts.length; i++) {
												    var astro = astronauts[i];
												    astro.ingrandisci();
												    astro.display();
												}
					
					
				}

function Icona ( nome, date, careerdays, x,carriera) {	this.name=nome;
                                                this.careerdays=carriera;
										
									this.launchDate=date;
									var daysInSpace=(Date.now()-Date.parse(this.launchDate))/1000/60/60/24;
									
								
									this.inc=careerdays/10
									
									this.x=x;

				this.display=function() {
											 
										} 

	this.ingrandisci=function() {
								if(mouseX>=this.x && mouseX<=this.x+40 && mouseY<height-30 && mouseY>250){
                                                    
								
								fill(0,0,0);
								textFont("Merriweather");
                                textSize(10);
                   	            
                                text(this.name,this.x-35, 460);
                                    
                                text("Career days:"+" "+this.careerdays,this.x-35, 485);
                                    
                                image(img, this.x,390,26.3+(this.inc*0.7)*5,35.7+this.inc*5);
												}
								else{
                                     image(img, this.x,390,26.3*3, 35.7*3);}; 
											}
			
									}

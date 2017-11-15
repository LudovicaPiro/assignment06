var myData;

var img;

var astronauts = []; //questa variabile è una lista vuota

function preload(){		img=loadImage("./assets/piccione.png");
						myData = loadJSON('assets/peopleinspace.json');
					}

function setup(){ 	createCanvas(500,500);
					frameRate(1);

					for (var i = 0; i < myData.people.length; i++) 
					{	var astroData=myData.people[i];
						var newAstronauts = new Icona(astroData.name, astroData.launchdate, astroData.careerdays);
						astronauts.push(newAstronauts);
					}

		/*			//da commentare
					 image(img, 0,280,170,170);
					                     textFont("Merriweather");
                    textSize(18);
                    //textAlign(CENTER);
                    text("my text",175, 155);
        */



				}


function draw(){	background("#004250");
					for (var i = 0; i < 80; i++) {  noStroke();
													fill("#f0e130");
													var c=random(100);
													var cy=random(50);
													ellipse(20*i+c, 16*i+cy, 7+(i/3));
												}
					noStroke();
					fill("#cadcdd");
					ellipse(250,500, 800, 300);

					for (var i = 0; i < astronauts.length; i++) {	var x=80
																	translate(x,0)
																	var astro = astronauts[i];
																	astro.ingrandisci();
																	astro.display();
																}
					
					
				}

function Icona ( nome, date, careerdays) {	this.name=nome;
										
								//	this.country=palette; //il nome del paese sarà la variabile per una sfumatura con cui saranno colorati i caschi dei piccioni spaziali
									this.launchDate=date;
									var daysInSpace=(Date.now()-Date.parse(this.launchDate))/1000/60/60/24;
									
									this.tempo=daysInSpace;
									inc=careerdays/10
									pos=-90;
									this.x=pos;

				this.display=function() {
											 image(img, this.x,280,130+inc,130+inc);
										}

				this.ingrandisci=function() {
												/*if(mouseX>=this.x && mouseX<=){
													this.size +=this.tempo
													fill(0,0,0);
													 textFont("Merriweather");
                 									 textSize(12);
                   									 text(this.name,0, 450);
												}
												else(this.size=careerdays+50); */

												if( mouseX>200 && mouseX<400) {fill(0,0,0);
													 textFont("Merriweather");
                 									 textSize(10);
                 									 textAlign(CENTER);
                   									 text(this.name,-40, 450);}
											}
			
									}
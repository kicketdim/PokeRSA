//worst poker game ever v0001
    
    let tapisJoueur = 100 ;
    let tapisIA = 100;
    let pot = 2;

    let paye = pot; 
    let relance = paye + pot;

  
    let btn = document.getElementById('btn');
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');
    let variablePot = document.getElementById('taillePot');
    let cartesCommunesFlop = document.getElementById('flop');

    let raise = document.getElementById('raise');
    let stackIA = document.getElementById('tapisIA');
    let stackJoueur = document.getElementById('tapisJoueur');

    let fold = document.getElementById('fold');
    let call = document.getElementById('call');

    let turnID = document.getElementById('turn');
    let riverID = document.getElementById('river');
    


    btn.addEventListener('click', retourneCartesJoueur);



    raise.addEventListener('click', function IARaise(){
        let paye = pot;
    tapisIA -= paye*2;
    pot += paye*2;
        console.log(pot);
    variablePot.innerHTML = 'POT ' + pot;
    stackIA.innerHTML = 'TAPIS IA ' + tapisIA;
    } 
    );

    call.addEventListener('click', function joueurCall (){
          let paye = pot;
        tapisJoueur = tapisJoueur - paye
        pot = pot + paye
    variablePot.innerHTML = pot;
    stackJoueur.innerHTML = tapisJoueur;

    });

    fold.addEventListener('click', function IAGagne(){
        let paye = pot
        tapisIA +=  pot ;
        tapisJoueur -= pot;
        variablePot.innerHTML = pot;
        stackIA.innerHTML = tapisIA;
        stackJoueur.innerHTML = tapisJoueur;
    alert("t'es une merde")        
    } );


    //mouvements d'argent

    function joueurFold(){
        IAGagne();
    }

    function IAFold(){
        joueurGagne();
    }

    function joueurCall(){
          let paye = pot;
        tapisJoueur = tapisJoueur - paye
        pot = pot + paye
    variablePot.innerHTML = pot;
    stackJoueur.innerHTML = tapisJoueur;
    };

    function IACall(){
          let paye = pot;
        tapisIA = tapisIA - paye
        pot = pot + paye
    variablePot.innerHTML = pot;
    stackIA.innerHTML = tapisIA;
    };

    function joueurRaise(){
      let paye = pot;
    tapisJoueur = tapisJoueur - paye*2;
    pot = pot + paye*2;
    variablePot.innerHTML = pot;
    stackJoueur.innerHTML = tapisJoueur;
    } 

    function IARaise(){
        let paye = pot;
    tapisIA = tapisIA - paye*2;
    pot = pot + paye*2;
    variablePot.innerHTML = pot;
    stackIA.innerHTML = tapisIA;
    } 

    function joueurCheck (){


    }

      function IAGagne(){
        let paye = pot
        tapisIA +=  pot ;
        variablePot.innerHTML = pot;
        stackIA.innerHTML = tapisIA;
    alert("t'es une merde")
    }

      function joueurGagne(){
        let paye = pot
        tapisJoueur +=  pot ;
        variablePot.innerHTML = pot;
        stackJoueur.innerHTML = tapisJoueur;
    alert("baltringue")
    }


    let jeuDeCartes =[
                 [0,1,2,3,4,5,6,7,8,9,10,11,12], /*pique*/
                 [0,1,2,3,4,5,6,7,8,9,10,11,12], /*coeur*/
                 [0,1,2,3,4,5,6,7,8,9,10,11,12], /*trefle*/
                 [0,1,2,3,4,5,6,7,8,9,10,11,12]  /*carreau*/
                 ];

 //Main joueur

    let signeJoueur1Main1 = Math.round(Math.random()*3);
    let signeJoueur1String = signeJoueur1Main1.toString();

    let carte1Joueur1 = Math.round(Math.random()*12); 
    let carte1Joueur1String = carte1Joueur1.toString();


    let main1Joueur1 = signeJoueur1String + carte1Joueur1String ;


    let signeJoueur1Main2 = Math.round(Math.random()*3);
    let signeJoueur1String2 = signeJoueur1Main2.toString();

    let carte2Joueur1 = Math.round(Math.random()*12); 
    let carte2Joueur1String = carte2Joueur1.toString();


    let main2Joueur1 = signeJoueur1String2 + carte2Joueur1String ;

    let mainsJoueur1 = main1Joueur1 + main2Joueur1 ;



//Main IA

    let signeIAMain1 = Math.round(Math.random()*3);
    let signeIAString = signeIAMain1.toString();

    let carte1IA = Math.round(Math.random()*12); 
    let carte1IAString = carte1IA.toString();


    let main1IA = signeIAString + carte1IAString ;


    let signeIAMain2 = Math.round(Math.random()*3);
    let signeIAString2 = signeIAMain2.toString();

    let carte2IA = Math.round(Math.random()*12); 
    let carte2IAString = carte2IA.toString();


    let main2IA = signeIAString2 + carte2IAString ;

    let mainsIA = main1IA + main2IA ;


    //flop

    let signeflop1 = Math.round(Math.random()*3);
    let signeflop1String = signeflop1.toString();

    let flopChiffre1 = Math.round(Math.random()*12); 
    let flopChiffre1String = flopChiffre1.toString();


    let flop1 = signeflop1String + flopChiffre1String ;

    let signeFlop2 = Math.round(Math.random()*3);
    let signeflop2String = signeFlop2.toString();

    let flopChiffre2 = Math.round(Math.random()*12); 
    let flopChiffre2String = flopChiffre2.toString();


    let flop2 = signeflop2String + flopChiffre2String ;



    let signeFlop3 = Math.round(Math.random()*3);
    let signeflop3String = signeFlop3.toString();

    let flopChiffre3 = Math.round(Math.random()*12); 
    let flopChiffre3String = flopChiffre3.toString();

    let flop3 = signeflop3String + flopChiffre3String ;


        //turn

    let signeTurn = Math.round(Math.random()*3);
    let signeTurnString = signeTurn.toString();

    let chiffreTurn = Math.round(Math.random()*12); 
    let chiffreTurnString = chiffreTurn.toString();

    let turn = signeTurnString + chiffreTurnString ;


        //river

    let signeRiver = Math.round(Math.random()*3);
    let signeRiverString = signeRiver.toString();

    let chiffreRiver = Math.round(Math.random()*12); 
    let chiffreRiverString = chiffreRiver.toString();

    let river = signeRiverString + chiffreRiverString ;

    console.log(river);

        //flip cartes
    function retourneCartesJoueur(){
    image1.setAttribute('src', main1Joueur1 + '.png');
    image2.setAttribute('src', main2Joueur1 + '.png');
    }

    function flopFonction(){
    image5.setAttribute('src', flop1 + '.png')
    image6.setAttribute('src', flop2 + '.png')
    image7.setAttribute('src', flop3 + '.png')    
    }

    function turnFonction(){
    image8.setAttribute('src', turn + '.png')    

    }

    function riverFonction(){
    image9.setAttribute('src', river + '.png')    
    }

/*   DEROULE DU JEU
    do{
        IARaise();
    
//preflop
        if(fold.click){
            IAGagne();
        }else if(raise.click){
            joueurRaise();
            IACall();
            flopFonction();
        }else if(call.click){
        IACall();    
        flopFonction();

//flop 
        if(check.click){
            turnFonction();
        }   
        else if(raise.click){
            joueurCall();
        IACall();
        turnFonction();
        }

//turn
         if(check.click){
        riverFonction();
        }   
        else if(raise.click){
        joueurCall();    
        IACall();
        riverFonction();
        }

//river
     if(check.click){
        abattage();
        }   
        else if(raise.click){
        joueurCall();    
        IACall();
        abattage();
      
        }        
    }

*/

/*
while(tapisJoueur || tapisIA >0)

    if(tapisJoueur <=0){
        alert("Je t'ai bien baisé et pourtant j'ai été codé avec le cul!")
    }else if (tapisIA<=0){
        alert("t'as eu de la chance chattard!")
    };
*/

/*
        function quinteFlush(){
            //5 sur 7 doivent se suivre meme si pas dans l'ordre et avoir le meme premier nombre du tableau
        }

        function carre(){
            //4 cartes sur 7 de mem valeur dc  meme cle?        
        }

        function fullHouse(){
            //5 cartes 3 cartes +2 meme cles
        }

        function flush(){
            // 5 cartes du meme tableau
        }

        function straight(){

            // 5 cartes qui se suivent mais pas dans l ordre
        }

        function brelan(){
            // 3 cartes meme indice
        }

        function doublePaire(){
            // 2 fois 2 de meme indice
        }

        function paire(){
            //1 fois 2 de meme indice
        }

        function carteHaute(){
            //?
        }
        
    let mainAbattageJoueur = mainsJoueur1 + flop1 + flop2 + flop3 + turn + river;
    console.log(mainAbattageJoueur);

    let mainAbattageIA = mainsIA + flop1 + flop2 + flop3 + turn + river;
    console.log(mainAbattageIA);

        function quiGagne(joueur, IA){
        joueur = mainAbattageJoueur
        IA = mainAbattageIA

        if(function quinteFlush(mainAbattageJoueur) == true){
            function JoueurGagne()
        }

        if(function carre(mainAbattageJoueur) == true && (function quinteFlush(mainAbattageIA) || function carre(mainAbattageIA) != true){
         JoueurGagne()
        }

        if(function fullHouse(mainAbattageJoueur)  == true && (function quinteFlush(mainAbattageIA) || function carre(mainAbattageIA) || function fullHouse (mainAbattageIA) != true){
          JoueurGagne()
        }
        
        if(function flush(mainAbattageJoueur) ==true && (function quinteFlush(mainAbattageIA) || function carre(mainAbattageIA) || function fullHouse() || function flush() != true){ 
          joueurGagne()    
        }  
        if(function straight(mainAbattageJoueur) ==true && (function quinteFlush(mainAbattageIA) || function carre(mainAbattageIA) || function fullHouse() || function flush() || function straight() != true){ 
          joueurGagne()    
        }
        if(function brelan(mainAbattageJoueur) ==true && ((function quinteFlush(mainAbattageIA) || function carre(mainAbattageIA) || function fullHouse() || function flush() || function straight() || function brelan()) != true){ 
          joueurGagne()    
        }    
        if(function doublePaire(mainAbattageJoueur) ==true && ((function quinteFlush(mainAbattageIA) || function carre(mainAbattageIA) || function fullHouse() || function flush() || function straight() || function brelan() || function doublePaire()) != true){ 
          joueurGagne()    
        }
        if(function paire(mainAbattageJoueur) ==true && ((function quinteFlush(mainAbattageIA) || function carre(mainAbattageIA) || function fullHouse() || function flush() || function straight() || function brelan() || function doublePaire() || function paire()) != true){ 
          joueurGagne()    
        }
        if(function carteHaute(mainAbattageJoueur) ==true && ((function quinteFlush(mainAbattageIA) || function carre(mainAbattageIA) || function fullHouse() || function flush() || function straight() || function brelan() || function doublePaire() function paire()) != true){ 
          joueurGagne()    
        }   
        }

    //faire la boucle et mettre une condition si tapis ia ou tapis joueur<0 alors appel fonction quiGagne

while(tapisIA || tapisJoueur > 0)
*/


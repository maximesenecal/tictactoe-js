var statut_croix = false;
var score_croix=0;
var score_ronds=0;
var statut_rond = false;
var tour = "croix";
var fin_de_partie=false;
var array = new Array(8);
var victoire;

function valide_nom(elemID){
    var d = document.getElementById(elemID);
    if(d.value == ""){
        alert("Veuillez remplir le nom");
    }
    else{
        console.log("Nom renseigné: "+d.value);
        d.setAttribute("style","color:grey;");
        var link = d.setAttribute("disabled", "disabled");
        /*alert("Nom enregistre : " + d.value);*/
        if(elemID=="nom_croix"){
        	statut_croix = true;
        }
        if(elemID=="nom_ronds"){
        	statut_rond = true;
        }
    }
}

function clic_case(elemID){
    var d = document.getElementById(elemID);
    if(fin_de_partie==false){
    	if(statut_rond==false || statut_croix==false){
    		alert("Veuillez remplir et valider le/les nom(s)");
    	}
    	else{
	        if(d.getAttribute("case_ronds")==undefined || d.getAttribute("case_croix")==undefined){
	            /*alert("Case joue "+tour);*/
	           	if(tour=="ronds"){
	           		d.setAttribute("class","case case_ronds");
	           		switch (elemID){
	           			case 'A1':
	           			array[0]="ronds"; break;
	           			case 'A2':
	           			array[1]="ronds"; break;
	           			case 'A3':
	           			array[2]="ronds"; break;
	           			case 'B1':
	           			array[3]="ronds"; break;
	           			case 'B2':
	           			array[4]="ronds"; break;
	           			case 'B3':
	           			array[5]="ronds"; break;
	           			case 'C1':
	           			array[6]="ronds"; break;
	           			case 'C2':
	           			array[7]="ronds"; break;
	           			case 'C3':
	           			array[8]="ronds"; break;
	           			default:;
	           		}
		        	joueur_verif_victoire(array,tour);
		        	tour = "croix";
		        }
		        else if(tour=="croix"){
		        	d.setAttribute("class","case case_croix");
		        	switch (elemID){
	           			case 'A1':
	           			array[0]="croix"; break;
	           			case 'A2':
	           			array[1]="croix"; break;
	           			case 'A3':
	           			array[2]="croix"; break;
	           			case 'B1':
	           			array[3]="croix"; break;
	           			case 'B2':
	           			array[4]="croix"; break;
	           			case 'B3':
	           			array[5]="croix"; break;
	           			case 'C1':
	           			array[6]="croix"; break;
	           			case 'C2':
	           			array[7]="croix"; break;
	           			case 'C3':
	           			array[8]="croix"; break;
	           			default:;
	           		}
		           	joueur_verif_victoire(array,tour);
		           	tour = "ronds";
		        }
		    }
		}
	}
}



function joueur_verif_victoire(array,tour){
	var i=0;
	var j=0;
	var gagner=false;
	for (i=0;i<3;i++)
	{
		if(array[j]==tour && array[j+1]==tour && array[j+2]==tour)
		{
			gagner=true;
		}
		if(array[i]==tour && array[i+3]==tour && array[i+6]==tour)
		{
			gagner=true;
		}
		j=j+3;
	}
	if(array[0]==tour && array[4]==tour && array[8]==tour || array[2]==tour && array[4]==tour && array[6]==tour)
	{
		gagner=true;
	}
	if(gagner == true)
	{
		var db = document.getElementById("background");
		if(tour=="croix")
		{
			db.setAttribute("class","background background_croix");
			var str1 = document.getElementById("nom_croix").value;
			var str2 = "Victoire de "+str1;
			document.getElementById("victoire").innerHTML=str2;
			score_croix++;
		}
		else if(tour=="ronds")
		{
			db.setAttribute("class","background background_ronds");
			var str1 = document.getElementById("nom_ronds").value;
			var str2 = "Victoire de "+str1;
			document.getElementById("victoire").innerHTML=str2;
			score_ronds++;
		}
		fin_de_partie=true;
		document.getElementById("score1").innerHTML=score_croix;
		document.getElementById("score2").innerHTML=score_ronds;
	}
}

function partie_suivante(){
        document.getElementById('A1').setAttribute("class","case");
        document.getElementById('A2').setAttribute("class","case");
        document.getElementById('A3').setAttribute("class","case");
        document.getElementById('B1').setAttribute("class","case");
        document.getElementById('B2').setAttribute("class","case");
        document.getElementById('B3').setAttribute("class","case");
        document.getElementById('C1').setAttribute("class","case");
        document.getElementById('C2').setAttribute("class","case");
        document.getElementById('C3').setAttribute("class","case");
    	for(i=0;i<9;i++){
    		array[i]="";
    	}
        document.getElementById("background").setAttribute("class","background_normal");
        document.getElementById("victoire").innerHTML="";
        fin_de_partie = false;
}

function nouveau_tournoi(){
	var forceGet = true;
	location.reload(forceGet);
}

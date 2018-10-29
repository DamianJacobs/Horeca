var Bier = 2.75;
var Wijn = 3.5;
var sinas = 2.2;
var cola = 2.2;
var cola_light = 2.2;
var sprite = 2.2;
var icetea = 2.2;
var Bitter1 = 1.5;
var Bitter2 = 2.5;
var Burger = 2.0;


var BierA = 0;
var WijnA = 0;
var sinasA = 0;
var colaA = 0;
var cola_lightA = 0;
var spriteA = 0;
var iceteaA = 0;
var Bitter1A = 0;
var Bitter2A = 0;
var BurgerA = 0;

einde = false;


while(einde === false){
var bestelling = prompt("Wat wilt u hebben?");

switch(bestelling) {
    //switch betekent dat als je  iets invult dan checkt hij voor je antwoord als jij bijvoorbeeld cola wilt(en intypt) dan checkt hij cola.
    // als hij cola checkt vraagt hij hoeveel je wilt en gebruikt break om de prompt te stoppen zodat je alleen cola krijgt.
    case "wijn":
        WijnA = prompt("hoeveel wijn wilt u Hebben?",);
        break;
    case "cola":
        colaA = prompt("hoeveel cola wilt u Hebben?",);
        break;
    case "bier":
        BierA = prompt("hoeveel bier wilt u Hebben?",);
        break;
    case "fris":
        WijnA = prompt("hoeveel fris wilt u Hebben?",);
        break;
    case "icetea":
        Cola_lightA = prompt("hoeveel icetea wilt u Hebben?",);
        break;
    case "sinas":
        sinasA = prompt("hoeveel sinas wilt u Hebben?",);
        break;
    case "sprite":
        spriteA = prompt("hoeveel sprite wilt u Hebben?",);
        break;
    case "snacks":
        Bitter = prompt("hoeveel stuks wilt u hebben 8 of 16");
        switch (Bitter) {
            case "8":
                Bitter1A = prompt("hoeveel porties van 8?",);
                break;
            case "16":
                Bitter2A = prompt("hoeveel porties van 16?",);
                break;
            default:
                alert("dit hebben wij helaas niet");
                break;
        }
        break;
    case "hamburger":
        BurgerA = prompt("hoeveel hamburgers wilt u Hebben?",);
        break;
    case "stop":
        einde = true;
        break;


    default:
        alert("dit hebben wij helaas niet");
        break;
}
}

var BierT = Bier * BierA;
var WijnT = Wijn * WijnA;
var sinasT = sinas * sinasA;
var colaT = cola * colaA;
var cola_lightT = cola_light * cola_lightA;
var spriteT = sprite * spriteA;
var iceteaT = icetea * iceteaA;
var BurgerT = Burger * BurgerA;
var Bitter1T = Bitter1 * Bitter1A;
var Bitter2T = Bitter2 * Bitter2A;

var Bon = [BierT + WijnT + sinasT + colaT + cola_lightT + spriteT + iceteaT + Bitter1T + Bitter2T + BurgerT];
document.getElementById("bonnetje").innerHTML = "De prijs Van Uw Bestelling is  $" + Bon;




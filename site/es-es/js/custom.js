function getLetter(block){
    switch(block.type){
        case "craft_moveForward":
            return "A";
        case "craft_turn":
            return block.getTitleValue("DIR")=="left" ? "B" : "C";
        case "craft_destroyBlock":
            return "D";
        case "craft_shear":
            return "E";
        case "craft_whileBlockAhead":
            return "F";
        case "craft_ifBlockAhead":
            return "G";
        case "craft_ifLavaAhead":
            return "H";
        case "craft_placeBlock":
            return "I";
        case "craft_placeTorch":
            return "J";
        case "craft_plantCrop":
            return "K";
        case "craft_tillSoil":
            return "L";
        case "craft_placeBlockAhead":
            return "M";
        case "controls_repeat_dropdown":
            return "N";
        default: //when_run
            return "";
    }
}


function generarCadena(){

    blocks = Blockly.mainBlockSpace.getAllBlocks();

    cadena = "";

    blocks.forEach(function(block){
        cadena += getLetter(block);
    });

    return cadena;
}
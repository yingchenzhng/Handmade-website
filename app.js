//Generate salutations
//t - top, l - left, c - colour, s - font-size, z - z-index, id - class
function sals(t, l, c, s, z, id){
    var sal = document.getElementsByClassName(id);
    sal[0].style.top = t;
    sal[0].style.left = l;
    sal[0].style.color = c;
    sal[0].style.fontSize = s;
    sal[0].style.zindex = z;
    }
    sals('67%', '51%', '#FFFFFF', '125px', '11', "PC");
    sals('47%', '11%', '#BC7060', '120px', '10', "BH");
sals('27%', '31%', '#BC7060', '185px', '9', "AF");

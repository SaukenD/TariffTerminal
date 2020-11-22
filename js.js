function getnumber(v) {

    if(v == '+7777' || v == '+7776' || v == '+7771' || v == '+7705'){

        beeline.style.display = 'block';
        tele2.style.display = 'none';
        activ.style.display = 'none';

        tarif='b';
    }

    if(v == '+7707' || v == '+7747' ){
        beeline.style.display = 'none';
        tele2.style.display = 'block';
        activ.style.display = 'none';

        tarif='t';

    }

    if(v == '+7701' || v == '+7702' || v == '+7775' || v == '+7778'){
        beeline.style.display = 'none';
        tele2.style.display = 'none';
        activ.style.display = 'block';

        tarif='ac';
    }
    if(v==null){
        beeline.style.display = 'none';
        tele2.style.display = 'none';
        activ.style.display = 'none';


    }



}
function aqsha() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;

    if (x < 1390) {
        tele2_1.style.display = 'none';
        tele2_2.style.display = 'none';
        tele2_3.style.display = 'none';
        activ_1.style.display = 'none';
        activ_2.style.display = 'none';
        activ_3.style.display = 'none';
        beeline_1.style.display = 'none';
        beeline_2.style.display = 'none';
        beeline_3.style.display = 'none';




    }
    if (1390 <= x && x <= 1890) {
        tele2_1.style.display = 'block';
        tele2_2.style.display = 'none';
        tele2_3.style.display = 'none';
        activ_1.style.display = 'block';
        activ_2.style.display = 'none';
        activ_3.style.display = 'none';
        beeline_1.style.display = 'block';
        beeline_2.style.display = 'none';
        beeline_3.style.display = 'none';



    }
    if (1890 <= x && x <= 2590) {
        tele2_1.style.display = 'block';
        tele2_2.style.display = 'block';
        tele2_3.style.display = 'none';
        activ_1.style.display = 'block';
        activ_2.style.display = 'block';
        activ_3.style.display = 'none';
        beeline_1.style.display = 'block';
        beeline_2.style.display = 'block';
        beeline_3.style.display = 'none';


    }
    if (2590 <= x ) {
        tele2_1.style.display = 'block';
        tele2_2.style.display = 'block';
        tele2_3.style.display = 'block';
        activ_1.style.display = 'block';
        activ_2.style.display = 'block';
        activ_3.style.display = 'block';
        beeline_1.style.display = 'block';
        beeline_2.style.display = 'block';
        beeline_3.style.display = 'block';


    }
    rush.style.display='none';
}
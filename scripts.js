

//elder scrolls

$('#ref1').on('click', () => {$('body').animate({ scrollTop: 0 }, 1000);});
$('#ref2').on('click', () => {$('body').animate({ scrollTop: ($('#zakladka1').offset().top) }, 1000);});
$('#ref3').on('click', () => {$('body').animate({ scrollTop: ($('#zakladka2').offset().top) }, 1000);});
$('#ref4').on('click', () => {$('body').animate({ scrollTop: ($('#zakladka3').offset().top) }, 1000);});
$('#ref5').on('click', () => {$('body').animate({ scrollTop: ($('#zakladka4').offset().top) }, 1000);;});
$('#ref6').on('click', () => {$('body').animate({ scrollTop: ($('#feet').offset().top) }, 1000);});

 //date and time


var time = 0,
month = 0,
date = new Date();

window.addEventListener('load',function(){
    switch(date.getMonth()){
        case 0 : month="Jan";break;
        case 1 : month="Feb";break;
        case 2 : month="Mar";break;
        case 3 : month="Apr";break;
        case 4 : month="May";break;
        case 5 : month="Jun";break;
        case 6 : month="Jul";break;
        case 7 : month="Aug";break;
        case 8 : month="Sept";break;
        case 9 : month="Oct";break;
        case 10 : month="Nov";break;
        case 11 : month="Dec";break;        
    }
});

function updateTime(a){
    let hours;
    let minutes;
    date = new Date();

    if ((a.getHours()).toString().length == 1) { hours = `0${a.getHours()}`; } else { hours =  a.getHours(); }
    if ((a.getMinutes()).toString().length == 1) { minutes = `0${a.getMinutes()}`; } else { minutes =  a.getMinutes(); }

    time = `${hours}:${minutes}  ${a.getDate()} ${month} ${a.getFullYear()}`;

    $('#date').text(time);
    
}

window.addEventListener('load',function(){
    updateTime(date);
    setInterval(() => { updateTime(date); },10000);
});



//slideshow hover

$('#hitbox,#sscontent,#left_arr,#right_arr').each(function(){   
    $(this).on({
        mousemove: () => {$('.ssimg').css("box-shadow", "0px 0px 30px 5px #000000");},
        mouseleave: () => {$('.ssimg').css("box-shadow", "0px 0px 30px 1px #00000050");}   
})})

//slajd szo??
var a = [1,2,3,4],
i = 0;

window.addEventListener('load', () => {$('#slideshowimg').attr("src", "imgs/slideshow/1.jpg");})

function slideshowchange(){
    if (i<0) { i = a.length-1; }
    if (i>=a.length) { i=0; }
    $('#slideshowimg').attr("src", "imgs/slideshow/" + a[i] + ".jpg");
}
$('#left_arr').on('click',() => { i--; slideshowchange();})
$('#right_arr').on('click',() => { i++; slideshowchange();})

//rickroll

$('#logoimg,#date').each(function(){$(this).on('click',() => {window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";})})
  
//slideshow 3d rot

let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile==true){
    alert("open on computer/tablet!!!!!! Not workin on phones");
    setTimeout(()=>{

    },2000);
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
var rotX, rotY,
hitbox = $('#hitbox'),
rotationMultiplier = 4;

if(isMobile==false){
    $('#hitbox,#sscontent').on('mousemove',(e) => {

        dX = e.pageX - (hitbox.offset().left + (hitbox.width() / 2));
        dY = -1 * (e.pageY - (hitbox.offset().top + (hitbox.height() / 2)));
        $('#sscontent').css({ 'transform': `rotateX(${dY / hitbox.height() * rotationMultiplier}deg)rotateY(${dX / hitbox.width() * rotationMultiplier}deg)` });
    })
    $(window).on('mousemove',(e) => {
        if ($(e.target).parents('#center').length == 0) {
            $('#sscontent').css({ 'transform': `rotate3d(${0},${0},${0},${0}deg)`});
        }
    })
}



//zakladka

//img generatr

//wiedzmak

//function params:  length, base num(of img), speed, direcion (bool) (true/false), Element to append, image class name

function ElderScrolls(len,a,speed,direction,b,imgclass){
    for(let i = 1; i <= len; i++){ $(b).append(`<img class=${imgclass} src='pictures/1/${i+a-1}.JPG'/>`); }

    let img_arr_default = Array.from(document.querySelectorAll('.' + imgclass)),
    img_arr = Array.from(document.querySelectorAll('.' + imgclass)),
    slidenum,
    shift = 0,
    c = 1,
    scrollspeed = speed;

    $(document).ready(() => {
        function UpdateArray(){img_arr = Array.from(document.querySelectorAll('.' + imgclass));}
        function DeleteUneccessery(){
            for(let i = 0; i <= img_arr.length-1; i++){
                if(direction == true){
                    if($(img_arr[i]).offset().left > window.screen.width + $(img_arr[i]).width()){
                        $(img_arr[i]).remove();
                        UpdateArray();
                    }
                }else{
                    if($(img_arr[i]).offset().left < 0 - $(img_arr[0]).width()){
                        $(img_arr[i]).remove();
                        UpdateArray();
                        shift++;
                    }
                }
            }   
        }        
        function AddFirst(){
            if(direction == true){
                if($(img_arr[0]).offset().left <= 0 && $(img_arr[0]).offset().left >= -1*scrollspeed){ 
                    if(img_arr[0].src == img_arr_default[0].src) { slidenum = img_arr_default.length-1; } else { slidenum-=1;}
                    $(b).prepend(`<img class=${imgclass} src='pictures/1/${slidenum+a}.JPG'/>`);
                    UpdateArray();
                    shift++;             
                }
            }else{               
                if($(img_arr[img_arr.length-1]).offset().left <= window.screen.width && $(img_arr[img_arr.length-1]).offset().left >= window.screen.width - scrollspeed){ 
                    if(img_arr[img_arr.length-1].src == img_arr_default[len-1].src){ slidenum = 1; } else { slidenum+=1; }
                    $(b).append(`<img class=${imgclass} src='pictures/1/${slidenum+a-1}.JPG'/>`);
                    UpdateArray();                  
                }
            }
        } 
        function sidescroll(){
            AddFirst();
            DeleteUneccessery();
            if(direction == true){ $(img_arr).css({'left':`${c*scrollspeed - shift * $(img_arr[0]).width()}px`}); }
            else{ $(img_arr).css({'left':`${-1*c*scrollspeed + shift * $(img_arr[0]).width() }px`}); }
            c++;
            window.requestAnimationFrame(sidescroll);
        }
        window.requestAnimationFrame(sidescroll);
    })    
}

//random img displacment params: imgclass, stength

function randimgdisplace(a,str){if(isMobile==false){
    document.querySelectorAll('.'+a).forEach(function(e){$(e).css({'margin-top':`${Math.random()*str}%`});})
}}


let isfullscreen = false;
   
$('body').on('click',function(e){
    
    if(isfullscreen==false && e.target.classList.contains("zakimg3") ||  e.target.classList.contains("zakimg2") ||  e.target.classList.contains("zakimg") ){            
        $('body').prepend(`<img class="overlayimg" src='${e.target.src}'/>`);
        $('body').prepend(`<div class="overlaybg"/>`);
        $('.overlayimg').css({'left':`${50-($('.overlayimg').width()/window.screen.width)*50}%`});
        isfullscreen=true;
    }else{
        $('.overlayimg,.overlaybg').remove();
        isfullscreen=false;
    }
    
})
let tekstol;

$('body').on('click',function(e){

   
    
    if(isfullscreen==false &&  e.target.classList.contains("twojastara1") || e.target.classList.contains("twojastara2") || e.target.classList.contains("zakimg4")){   
        
        //julia

        if(e.target.src.includes("stowarzyszenie.jpg")){tekstol = "Stowarzyszenie Umar??ych Poet??w <br> Autor: Nancy H. Kleinbaum <br> Opis: Napisana na podstawie filmu, chyba moja ulubiona ksi????ka. O nauczycielu i jego uczniach.";}  
        if(e.target.src.includes("13powodow.jpg")){tekstol = "13 powod??w <br> Autor: Jay Asher <br> Opis: Ksi????ka dla starszych czytelnik??w. Porusza wa??ne tematy.";}
        if(e.target.src.includes("ania.jpg")){tekstol = "Ania z Zielonego Wzg??rza <br> Autor: Lucy Maud Montgomery <br> Opis: Jedna z moich ulubionych lektur szkolnych. Pierwsza ksi????ka z cyklu.";}
        if(e.target.src.includes("cien.jpg")){tekstol = "Cie?? i ko???? <br> Autor: Leigh Bardugo <br> Opis: Ciekawa fantastyka. Pierwsza ksi????ka z trylogii.";}
        if(e.target.src.includes("felix.jpg")){tekstol = "Felix, Net i Nika oraz Pa??ac Sn??w <br> Autor: Rafa?? Kosik <br> Opis: Ksi????ka raczej dla m??odszych czytelnik??w. Trzeci tom z serii. Bohaterami jest tr??jka przyjaci????, kt??rzy prze??ywaj?? coraz to nowe przygody.";}
        if(e.target.src.includes("folwark.jpg")){tekstol = "Folwark zwierz??cy <br> Autor: George Orwell <br> Opis: Ksi????ka, z kt??rej mo??na si?? du??o nauczy?? o rz??dzeniu.";}
        if(e.target.src.includes("harry.jpg")){tekstol = "Harry Potter i Ksi?????? P????krwi <br> Autor: J.K. Rowling <br> Opis: Czysty klasyk, ale dalej dobry. Chyba nie trzeba m??wi??, o czym opowiada.";}
        if(e.target.src.includes("listy.jpg")){tekstol = "Listy do m??odego matematyka <br> Autor: Ian Stewart <br> Opis: Dobre wprowadzenie w ??wiat matematyki.";}
        if(e.target.src.includes("malala.jpg")){tekstol = "Kt??ra to Malala? <br> Autor: Renata Pi??tkowska <br> Opis: Ksi????ka zawieraj??ca histori?? laureatki Pokojowej Nagrody Nobla.";}
        if(e.target.src.includes("przygody.jpg")){tekstol = "Alex w krainie liczb <br> Autor: Alex Bellos <br> Opis: Dla zainteresowanych matematyk??, a tak??e dla tych kt??rzy musz?? si?? jeszcze do niej przekona??.";}
        if(e.target.src.includes("sekretne.jpg")){tekstol = "Sekretne ??ycie drzew <br> Autor: Peter Wohlleben <br> Opis: Pokazuje ??wiat z innej strony.";}
        if(e.target.src.includes("series.jpg")){tekstol = "???Akademia antypatii??? <br> Autor: Daniel Handler <br> Opis: Ksi????ka zdecydowanie dla m??odszych os??b, na zdj??ciu w angielskim wydaniu. Tom 5 ???Serii niefortunnych zdarze?????.";}
        if(e.target.src.includes("wojna.jpg")){tekstol = "Wojna makowa <br> Autor: Rebecca F. Kuang <br> Opis: Tom pierwszy trylogii Wojen Makowych. Do???? gruba, ale bardzo ciekawa fantastyka. Raczej dla starszych.";}
        if(e.target.src.includes("zagadki.jpg")){tekstol = "Czy wiesz? Zagadki fizyczne <br> Autor: Stanis??aw Werner <br> Opis: Dla wszystkich, kt??rzy chc?? uporz??dkowa?? swoj?? wiedz?? albo da?? drug?? szans?? fizyce.";}
        
        //ania

        if(e.target.src.includes("1.png")){tekstol = "???Dzieci getta??? Magdy ??ucyan - Za ma??o, ??eby ??y??";}  
        if(e.target.src.includes("2.png")){tekstol = "???Duch 44??? Stanis??awa Zasady - Si??a ponad s??abo??ci??";}
        if(e.target.src.includes("3.png")){tekstol = "???Kamienie na szaniec??? Aleksandra Kami??skiego - Byli jak kamienie???";}
        if(e.target.src.includes("4.png")){tekstol = "???Wira z powstania??? George???a Szlachetko, Danuty Szlachetko - ";}
        if(e.target.src.includes("5.png")){tekstol = "???Zo??ka i Parasol??? Aleksandra Kami??skiego - Pa??acyk Michla ??ytnia Wola..";}
        if(e.target.src.includes("6.png")){tekstol = "???????CZNICZKI Wspomnienia z powstania warszawskiego??? Marii Fredro-Bonieckiej, Wiktora Krajewskiego";}
        if(e.target.src.includes("7.png")){tekstol = "???POWSTANIE ???44 Zachowali si?? jak trzeba??? Mateusza Wyrwicha";}
        if(e.target.src.includes("8.png")){tekstol = "???Rudy, Alek, Zo??ka??? Barbary Wachowicz";}
        if(e.target.src.includes("9.png")){tekstol = "???HOLOKAUST Prawdziwe historie ocalonych??? Lyn Smith";}
        if(e.target.src.includes("10.png")){tekstol = "???Teraz???44 Historie??? Marcina Dziedzica, Micha??a W??jcika";}
        if(e.target.src.includes("11.png")){tekstol = "???Mi??o???? 44??? Agnieszki Cuba??y";}
        if(e.target.src.includes("12.png")){tekstol = "???Tatua??ysta z Auschwitz??? Heather Morris";}
        if(e.target.src.includes("13.png")){tekstol = "???Epilog do Kamieni na szaniec??? Grzegorza Nowika";}
        if(e.target.src.includes("14.png")){tekstol = "???POLSKA WALCZ??CA Akcja pod Arsena??em??? Miko??aja Morzyckiego-Markowskiego";}
        if(e.target.src.includes("15.png")){tekstol = "???POLSKA WALCZ??CA Szare Szeregi??? Piotra Rozwadowskiego";}



        $('body').prepend(`<img class="overlayimg2" src='${e.target.src}'/>`);
        $('body').prepend(`<div class="overlaybg"/>`);
        $('body').prepend(`<div class="overlaytext">${tekstol}<div/>`);
        $('.overlayimg2').css({'left':`${50-($('.overlayimg2').width()/window.screen.width)*50}%`});
        isfullscreen=true;
    }else{
        $('.overlayimg2,.overlaybg,.overlaytext').remove();
        isfullscreen=false;
    }
    
})

//displace imgs

let gowno = Array.from(document.querySelectorAll('.twojastara1')),
displacment = [Math.random(),Math.random(),Math.random(),Math.random()];
let row = 1;
for(let i = 0; i <= 11; i++){
    $(gowno[i]).css({
        'bottom':`${displacment[(i+1)%4]*500}px`
        
    })
    if((i+1)%4){
        row++;
    }
}

gowno = Array.from(document.querySelectorAll('.twojastara2'));

for(let i = 1; i <= 2; i++){
    $(gowno[i]).css({
        'bottom':`${displacment[(i+1)%4]*500}px`
    })
}
gowno = Array.from(document.querySelectorAll('.twojastara2,.twojastara'))








$(document).ready(()=>{
    
    ElderScrolls(7,1,4,false,'#Wiedzmak','zakimg');
    ElderScrolls(8,8,4,true,'#Got','zakimg2');
    randimgdisplace('zakimg3',30);

    
})

      //create photos            
      $(window).on('load',function() {
        let line = 0;
        for(let i = 1; i <= 15; i++){
            $('#photos').append(`<img class="zakimg4 line${line}" src="pictures/4/zdjecia/${i}.png"/>`);
            
            switch (i){
                case 5 : $('#photos').append(`<br/>`);line++;break;
                case 9 : $('#photos').append(`<br/>`);line++;break;
                default : break;
            }
            
        }
        let line123 = Array.from(document.querySelectorAll('.zakimg4'));
        let line1 = Array.from(document.querySelectorAll('.line0'));
        let line2 = Array.from(document.querySelectorAll('.line1'));
        let line3 = Array.from(document.querySelectorAll('.line2'));
        let hght = $(line1[0]).height();
        $(line1[0]).css({'height':`${hght *2}`});
        $(line2[2]).css({'height':`${hght *2}`});
        $(line2[3]).css({'height':`${hght *2}`});
        for(let i = 1; i<=6;i++){
            $(line123[i]).css({'transform':`translateY(${-1*$(line123[i]).height()/2}px)`}); 
        }
        $(line2[2]).css({'transform':`translateY(${-1*$(line2[2]).height()/2}px)`});
        $(line2[3]).css({'transform':`translateY(${-1*$(line2[2]).height()/2}px)`});
        for(let i = 0; i<=6;i++){
            $(line3[i]).css({'transform':`translateY(${-1*$(line3[i]).height()}px)`}); 
        }                
    })



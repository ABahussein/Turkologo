let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let turk=document.querySelector('.turk');
let whatsappIcon = document.getElementById('whatsapp-icon')

window.onscroll=function(){
    let value=scrollY;
    stars.style.left=value+'px';
    moon.style.top=value*1+'px';
    mountains3.style.top=value*2+'px';
    mountains4.style.top=value *1.5 + 'px';
    river.style.top=value  + 'px';
    boat.style.left=value  + 'px';
    turk.style.fontSize=value  + 'px';
    if(scrollY>=100){
        turk.style.fontSize=100  + 'px';
        turk.style.position='fixed';
    
        if(scrollY>=400){
         turk.style.display='none';
        }else{
            turk.style.display='block';

        }
        if(scrollY>=300){
            document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';
            
        }


    }
    if(scrollY===4436){
        whatsappIcon.style.display='none';
       }else{
           whatsappIcon.style.display='block';
       
       }

}


//nums section

// let nums =document.querySelectorAll(".nums .num");
// let section =document.querySelector(".numSection");
// let started =false;//function Started ? No
// window.onscroll=function(){
//     if(window.scrollY>=section.offsetTop){
//         if(!started){
//             nums.forEach((num)=>startCount(num));

//         }
//         started=true;

//     }
// };

// function startCount(el){
//     let goal =el.dataset.goal;
//     let count=setInterval(() => {
//         el.textContent++;
//         if(el.textContent==goal){
//             clearInterval(count);
//         }
//     }, 2000/goal);
// } 



const Forward = document.querySelectorAll(".ForwardButton")
const Back = document.querySelectorAll(".BackButton")
const slider1 = document.querySelectorAll(".slider1")
const slider2 = document.querySelectorAll(".slider2")
const viewImages = document.querySelectorAll(".viewImage")
const blackBackground = document.querySelector(".blackBackground")
const sobre = document.querySelector("#sobre")
const portfolio = document.querySelector("#portfolio")
const whatsapp = document.querySelector(".whatsapp")
const body= document.querySelector('*')
const closeWhats= document.querySelector('.closeWhatsapp')




let closeWhatboolean=false;

function doSlider(slider,slider2,button,button2){
    button.addEventListener('click',()=>{
        slider.style.display='none';
        slider2.style.display='flex';
        slider2.style.justifyContent='space-around';
        button.style.visibility='hidden'
        button2.style.visibility='visible'
    })
}

function seeImage(clicker,body,about,portfolio){
    clicker.addEventListener('click',()=>{
        clicker.style.position='absolute';
	    clicker.style.top='80%';
	    clicker.style.left='50%';
        clicker.style.transform='translate(-50%,-50%)';
	    clicker.style.width='60%';
	    clicker.style.height='auto';
        clicker.style.outline='1000vh solid rgba(0, 0, 0, 0.738)';
        clicker.style.border='0px';
        about.style.display='none';
        portfolio.style.display='none';
        body.addEventListener('dblclick',()=>{
            location.reload();
        })
    })
    
        
    
    }

whatsapp.addEventListener('mouseover',()=>{
    whatsapp.style.transform='rotate(360deg)'
})

whatsapp.addEventListener('click',()=>{
    window.location.href='https://api.whatsapp.com/send/?phone=5515991604132&text=Ol%C3%A1%2C+vim+pelo+seu+site+e+gostaria+de+fazer+um+or%C3%A7amento%21&type=phone_number&app_absent=0'
})

closeWhats.addEventListener('click',()=>{
    closeWhatboolean=!closeWhatboolean

    if(closeWhatboolean==true){
        whatsapp.style.display='none';
        closeWhats.style.backgroundColor= 'rgb(34, 23, 129)'
        closeWhats.style.color='rgb(36, 108, 175)'
    }
    else{
        whatsapp.style.display='block';
        closeWhats.style.backgroundColor= 'rgb(53, 99, 223)'
        closeWhats.style.color='black'
    }
})


for(let i=0;i<40;i++){
    seeImage(viewImages[i],body,sobre,portfolio)
}



for(let i=0;i<4;i++){
doSlider(slider1[i],slider2[i],Forward[i],Back[i])
doSlider(slider2[i],slider1[i],Back[i],Forward[i])
}


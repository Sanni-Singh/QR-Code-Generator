const text = document.getElementById('text');
const sizes = document.getElementById('sizes');
const container = document.getElementById('box2');
const generator = document.getElementById('generate');
const download = document.getElementById('download');

let size = sizes.value;

generator.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

download.addEventListener('click' ,()=>{
    let img  = document.querySelector('.box2 img');
    if(img !== null){
        let imgArtt = img.getAttribute('src');
        download.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`) 
    }
    else {
        download.setAttribute("href" , `${document.querySelector('canvas').toDataURL()}`)
    }
});
function isEmptyInput(){
    text.value.length > 0 ? generateQr():alert("Enter the text or URL to generate the QR code");

}

function generateQr(){
    container.innerHTML = "";
    new QRCode(container , {
        text:"http://jindo.dev.naver.com/collie",
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}
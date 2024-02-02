window.addEventListener('load', function() {
    setBodyLoaded();
    setGoodsBlockLoaded();
});

function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setGoodsBlockLoaded() {
    let reached = false;
    const GOODS_BLOCK_OFFSET = 300;
    const goodsBlock = document.getElementById('goodsBlock');
    const goodsBlockOffset = goodsBlock.offsetTop;
    const windowHeight = window.innerHeight;
    
    window.addEventListener('scroll', function() {
        let scrolled = window.pageYOffset;
        if (scrolled + windowHeight > goodsBlockOffset + GOODS_BLOCK_OFFSET) {
            if (!reached) {
                goodsBlock.classList.add('goods_block_loaded');
                reached = true;
            }
        }
        
    })

}

const btn = document.querySelector('.material-symbols-outlined');
const men = document.querySelector('.menu');


btn.addEventListener('click', () =>{
    men.classList.add("toggle");

    if(btn.textContent === 'menu'){
        setMenu('open', 'close');
    }else{
        setMenu('close', 'menu');
    }
    

});
men.classList.remove("toggle");


function setMenu(menuAction, btnAction){
    men.style.animationName = menuAction;
    btn.textContent = btnAction;
}



    




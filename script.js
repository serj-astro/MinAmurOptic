$(document).ready(function() {
    $(document).on('click', '#slide11', copyOne);
    $(document).on('click', '#slide22', copyTwo);
    $(document).on('click', '#slide33', copyTry);

    function copyOne(event){
        var firstDivContent = document.getElementById('header__txtZ');
        var secondDivContent = document.getElementById('header__txt');
        secondDivContent.innerHTML = firstDivContent.innerHTML;
    }
    function copyTwo(event){
        var firstDivContent = document.getElementById('header__txtZZ');
        var secondDivContent = document.getElementById('header__txt');
        secondDivContent.innerHTML = firstDivContent.innerHTML;
    }
    function copyTry(event){
        var firstDivContent = document.getElementById('header__txtZZZ');
        var secondDivContent = document.getElementById('header__txt');
        secondDivContent.innerHTML = firstDivContent.innerHTML;
    }
});
$(document).ready(function() {
    $(document).on('click', '.fixed__feedback', openMen);
    $(document).on('click', '.main-menu__btn', openMen);
    $(document).on('click', '.modal-dialog__close', closeMen);
    function openMen(event) {
        $('.modal').addClass('modal--active');
    }
    function closeMen(event) {
        $('.modal').removeClass('modal--active');
    }
});
$(document).ready(function() {
    $(document).on('click', '.fixed__menu', openMenu);
    $(document).on('click', '.main-menu__close', closeMenu);
    $(document).on('click', '.main-menu__btn', closeMenu);
    function openMenu(event) {
        $('.main-menu').addClass('main-menu--active');
    }
    function closeMenu(event) {
        $('.main-menu').removeClass('main-menu--active');
    }
});


document.getElementById('happy').onchange = function() {
    if(this.checked==true | happy3.checked==true){
        document.getElementById("happy3").disabled=true;
        document.getElementById("order_recip").disabled=false;
        document.getElementById("order_adr").disabled=false;
        document.getElementById("order_adr").focus();
    }
    else{
        document.getElementById("happy3").disabled=false;
        document.getElementById("order_recip").disabled=true;
        document.getElementById("order_adr").disabled=true;
    }
};

document.getElementById('happy3').onchange = function() {
    if(this.checked==true | happy.checked==true){
        document.getElementById("happy").disabled=true;
        document.getElementById("order_recip").disabled=false;
        document.getElementById("order_adr").disabled=false;
        document.getElementById("order_adr").focus();
    }
    else{
        document.getElementById("happy").disabled=false;
        document.getElementById("order_recip").disabled=true;
        document.getElementById("order_adr").disabled=true;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const calculate_total = () => {

        const type = document.querySelector('input[name="type"]:checked'),
            prezent = document.querySelector('input[name="prezent"]:checked'),
            bistro = document.querySelector('input[name="bistro"]:checked'),
            post_nal = document.querySelector('input[name="post_nal"]:checked'),
            summ = document.querySelector('input[name="summ"]'),
            discountInput = document.querySelector('input[name="discount"]'),
            discountDescr = document.querySelector('.discount');

        let total = 0,
            total_order = 0;

        let error = 0;

        let cyr_regexp = /[^а-яёА-ЯЁ\-\. ]/g;

        if(type.value == "pers") {
            const pers_name = document.querySelector('*[name="pers_name"]'),
                pers_birthday = document.querySelector('*[name="pers_birthday"]'),
                pers_time = document.querySelector('*[name="pers_time"]'),
                pers_location = document.querySelector('*[name="pers_location"]');

            if((cyr_regexp.test(pers_name.value) || pers_name.value.length < 2) || pers_birthday.value.length != 10 || pers_time.value.length != 5 || (cyr_regexp.test(pers_location.value) || pers_location.value.length < 2)) {
                error = 1;
            }
        }

        if(type.value == "group") {
            const group_first_name = document.querySelector('*[name="group_first_name"]'),
                group_first_birthday = document.querySelector('*[name="group_first_birthday"]'),
                group_first_time = document.querySelector('*[name="group_first_time"]'),
                group_first_location = document.querySelector('*[name="group_first_location"]'),
                group_second_name = document.querySelector('*[name="group_second_name"]'),
                group_second_birthday = document.querySelector('*[name="group_second_birthday"]'),
                group_second_time = document.querySelector('*[name="group_second_time"]'),
                group_second_location = document.querySelector('*[name="group_second_location"]');

            if((cyr_regexp.test(group_first_name.value) || group_first_name.value.length < 2) || group_first_birthday.value.length != 10 || group_first_time.value.length != 5 || (cyr_regexp.test(group_first_location.value) || group_first_location.value.length < 2) || (cyr_regexp.test(group_second_name.value) || group_second_name.value.length < 2) || group_second_birthday.value.length != 10 || group_second_time.value.length != 5 || (cyr_regexp.test(group_second_location.value) || group_second_location.value.length < 2)) {
                error = 1;
            }
        }

        if(type.value == "biz") {
            const biz_name = document.querySelector('*[name="biz_name"]'),
                biz_birthday = document.querySelector('*[name="biz_birthday"]'),
                biz_time = document.querySelector('*[name="biz_time"]'),
                biz_location = document.querySelector('*[name="biz_location"]'),
                biz_event_name = document.querySelector('*[name="biz_event_name"]'),
                biz_event_date = document.querySelector('*[name="biz_event_date"]'),
                biz_event_time = document.querySelector('*[name="biz_event_time"]'),
                biz_event_location = document.querySelector('*[name="biz_event_location"]');

            if((cyr_regexp.test(biz_name.value) || biz_name.value.length < 2) || biz_birthday.value.length != 10 || biz_time.value.length != 5 || (cyr_regexp.test(biz_location.value) || biz_location.value.length < 2) || (cyr_regexp.test(biz_event_name.value) || biz_event_name.value.length < 2) || biz_event_date.value.length != 10 || biz_event_time.value.length != 5 || (cyr_regexp.test(biz_event_location.value) || biz_event_location.value.length < 2)) {
                error = 1;
            }
        }

        if(error == 0) {
            let discount = 0;

            if(type.value == "pers") {
                const birthdayInput = document.querySelector('input[name="pers_birthday"]');

                if(birthdayInput.value != '') {
                    const birthdayDate = new Date(birthdayInput.value);
                    const currentDate = new Date();
                    const birthdayCurrentDate = new Date((birthdayDate.getMonth() + 1) + '/' + birthdayDate.getDate() + '/' + currentDate.getFullYear());

                    const diff = birthdayCurrentDate.getTime() - currentDate.getTime();
                    const daysToBirthDay = Math.ceil(diff / (1000 * 3600 * 24));

                    if(daysToBirthDay <= 10 && daysToBirthDay > 0 && discountInput && discountInput.value > 0) {
                        discount = discountInput.value;
                    }
                }
            }

            if(type.value == "group") {
                const firstBirthdayInput = document.querySelector('input[name="group_first_birthday"]'),
                    secondBirthdayInput = document.querySelector('input[name="group_second_birthday"]');

                if(firstBirthdayInput.value != '') {
                    const birthdayDate = new Date(firstBirthdayInput.value);
                    const currentDate = new Date();
                    const birthdayCurrentDate = new Date((birthdayDate.getMonth() + 1) + '/' + birthdayDate.getDate() + '/' + currentDate.getFullYear());

                    const diff = birthdayCurrentDate.getTime() - currentDate.getTime();
                    const daysToBirthDay = Math.ceil(diff / (1000 * 3600 * 24));

                    if(daysToBirthDay <= 10 && daysToBirthDay > 0 && discountInput && discountInput.value > 0) {
                        discount = discountInput.value;
                    }
                }

                if(secondBirthdayInput.value != '') {
                    const birthdayDate = new Date(secondBirthdayInput.value);
                    const currentDate = new Date();
                    const birthdayCurrentDate = new Date((birthdayDate.getMonth() + 1) + '/' + birthdayDate.getDate() + '/' + currentDate.getFullYear());

                    const diff = birthdayCurrentDate.getTime() - currentDate.getTime();
                    const daysToBirthDay = Math.ceil(diff / (1000 * 3600 * 24));

                    if(daysToBirthDay <= 10 && daysToBirthDay > 0 && discountInput && discountInput.value > 0) {
                        discount = discountInput.value;
                    }
                }
            }

            if(type.value == "biz") {
                const birthdayInput = document.querySelector('input[name="biz_birthday"]');

                if(birthdayInput.value != '') {
                    const birthdayDate = new Date(birthdayInput.value);
                    const currentDate = new Date();
                    const birthdayCurrentDate = new Date((birthdayDate.getMonth() + 1) + '/' + birthdayDate.getDate() + '/' + currentDate.getFullYear());

                    const diff = birthdayCurrentDate.getTime() - currentDate.getTime();
                    const daysToBirthDay = Math.ceil(diff / (1000 * 3600 * 24));

                    if(daysToBirthDay <= 10 && daysToBirthDay > 0 && discountInput && discountInput.value > 0) {
                        discount = discountInput.value;
                    }
                }
            }

            if(type) {
                let price_with_discount = parseInt(type.dataset.price);
                if(discount > 0) {
                    price_with_discount = price_with_discount - ((price_with_discount / 100) * discount);
                }

                total += price_with_discount;
                total_order += parseInt(type.dataset.price);
            }

            if(prezent && bistro && !post_nal) {
                total += parseInt(prezent.dataset.price) + parseInt(bistro.dataset.price);
            } else if(!prezent && !bistro && post_nal) {
                total = parseInt(post_nal.dataset.price);
            } else if(bistro && post_nal && !prezent) {
                total = parseInt(post_nal.dataset.price) + ((parseInt(bistro.dataset.price) / 100) * 70);
            } else if(bistro && !post_nal && !prezent) {
                total += ((parseInt(bistro.dataset.price) / 100) * 50);
            } else if(prezent && !bistro && !post_nal) {
                total += parseInt(prezent.dataset.price);
            }

            console.log(total_order);
            console.log(total);
            console.log("");

            if(discount > 0) {
                let descr = "";
                if(post_nal) {
                    descr = "Сумма к оплате на почте " + ((total_order - ((total_order / 100) * discount))) + " руб.<br>";
                    descr = descr + 'Скидка в День рождения ' + discount + '%.<br>Полная стоимость без скидки ' + (total + total_order) + ' руб.';
                } else {
                    descr = descr + 'Скидка в День рождения ' + discount + '%.<br>Полная стоимость без скидки ' + total_order + ' руб.';
                }

                discountDescr.innerHTML = descr;
            } else {
                discountDescr.innerHTML = '';
                if(post_nal) {
                    discountDescr.innerHTML = "Сумма к оплате на почте " + (total_order) + " руб.";
                }
            }
        }

        summ.value = total;
    }

    const typeChangeHandler = (e) => {
        e.preventDefault();

        const type = e.target;

        const type_block = document.querySelector('.tab__content-show');
        if(type_block) {
            type_block.classList.remove('tab__content-show');
        }

        const current_type_block = document.getElementById(type.value);
        if(current_type_block) {
            current_type_block.classList.add('tab__content-show');
        }

        calculate_total();
    }

    calculate_total();

    const types = document.querySelectorAll('input[name="type"]');

    types.forEach((type) => {
        type.addEventListener('change', typeChangeHandler);
    });

    const inputs = document.querySelectorAll('#eform input');
    inputs.forEach((inp) => {
        inp.addEventListener('keyup', calculate_total);
    });

    document.querySelector('input[name="type"]').addEventListener('change', calculate_total);
    document.querySelector('input[name="prezent"]').addEventListener('change', calculate_total);
    document.querySelector('input[name="bistro"]').addEventListener('change', calculate_total);
    document.querySelector('input[name="post_nal"]').addEventListener('change', calculate_total);
});

document.addEventListener('DOMContentLoaded', () => {
    const onEFormSubmit = (e) => {
        e.preventDefault();

        let data = new FormData(e.target);
        const submitBtn = e.target.querySelector('button[type="submit"]');

        const el_blocks = document.getElementsByClassName('header__pers');
        for (let i = 0; i < el_blocks.length; ++i) {
            el_blocks[i].classList.remove('error');
            let error_el = el_blocks[i].querySelector('span');
            if(error_el) {
                error_el.innerHTML = '';
            }
        }


        let request = new XMLHttpRequest();

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Подождите...';

        request.open("POST", "/pay.php");
        request.send(data);

        request.onload = function() {
            if (request.status == 200) {
                let response = JSON.parse(request.response);
				console.log(response);
				console.log(request.response);
				
                if(!response.success) {
                    if(response.errors) {
                        Object.keys(response.errors).forEach(key => {
							console.log(key);
                            const el = document.querySelector('*[name="' + key + '"]'),
                                el_error = el.parentNode.querySelector('span');

                            if (el) {
                                el.parentNode.classList.add('error');
                            }
                            if (el_error) {
                                el_error.innerHTML = response.errors[key];
                            }
                        });
                    } else {
                        alert(response.error);
                    }
                } else {
                    if(typeof response.link !== "undefined") {
                        location.href = response.link;
                    }
                }
            } else {
                alert("Возникла ошибка при запросе.");
            }

            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Оплатить';
        }

    }

    const eform = document.getElementById('eform');

    if(eform) {
        eform.addEventListener("submit", onEFormSubmit);
    }

});
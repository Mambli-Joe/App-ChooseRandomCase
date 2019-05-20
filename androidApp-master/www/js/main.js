//VARIABLES----------------------------------------------------------------------------------
var $inputVal = $('#inputVal');
var $addItem = $('#addItem');
var $listAll = $('#allCases');
var $listChosen = $('#chosenCase');
var $delItem = $('.fa-minus-circle');
var $choose = $('#choose');

//HANDLERS----------------------------------------------------------------------------------
$addItem.click(addItem);
$listAll.on('click', 'li i', delItem);

$choose.on('click', function () {

    if ($('#allCases li').length > 1) {

        var str = $('#allCases li').text();
        var arr = str.split('.');
        arr.splice(arr.length - 1, 1);
        console.log(arr);

        var random = randomInteger(0, arr.length-1);
        console.log('Array Length:', arr.length);

        console.log('RANDOM Index:', random);

        var txt = arr[random];

        console.log('MY Val:', txt);
        
        $listChosen.append('<li> <strong> О, Великий Антонис советует тебе<strong><br> ' + txt + '</li>');

    } else {
        alert('Тут не из чего выбирать!');
    }
    $listAll.children().slideToggle().remove();

    setTimeout(function () {
        $listChosen.children().remove();

    }, 3000);

})

$inputVal.on('keydown', function (e) {
    var value = this.value;
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
        addItem(value);

    }
});
//FUNCTIONS----------------------------------------------------------------------------------

function addItem() {
    if ($inputVal.val()) {
        $listAll.prepend('<li>' + $inputVal.val() + '.<i class="fas fa-minus-circle"></i></li>').hide().slideToggle('fast');
    }
    $inputVal.val('');
   
}

function delItem() {

    $(this).parent().animate({
        height: "-=100px",
        opacity: 0
    }, 500, function () {
        $(this).parent().remove;
    });
    
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
    
}
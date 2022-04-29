let $input = document.getElementById('text');
let $button = document.getElementById('send');

$button.addEventListener('click', function(){
    let content = $input.value;
    alert(content);
});

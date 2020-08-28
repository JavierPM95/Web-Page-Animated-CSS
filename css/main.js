var inputText = document.getElementsByClassName('input-text');
var inputMessage = document.getElementsByClassName('input-message');

for (var i = 0; i < inputText.length; i++) {
    inputText[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('set-text');
        } else {
            this.nextElementSibling.classList.remove('set-text');
        }
    });
}

for (var i = 0; i < inputMessage.length; i++) {
    inputMessage[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('set-message');
        } else {
            this.nextElementSibling.classList.remove('set-message');
        }
    });
}
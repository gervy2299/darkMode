const checkbox = document.querySelector('#checkbox');

if(window.matchMedia('(prefers-color-scheme: dark)'.matches)){
    checkbox.setAttribute('checked',true);
    document.body.classList.add('is-dark-mode'); 
}

// document.body.style.setProperty('--cardGray', 'red');
checkbox.addEventListener('change', function (event) {
        if(this.checked){
            document.body.classList.add('is-dark-mode'); 
        } else {
            document.body.classList.remove('is-dark-mode'); 
        }
})

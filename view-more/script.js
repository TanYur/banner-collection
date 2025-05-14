(() => {
    const containerForBtn = document.querySelector(
            '[class^=wrapper-01] [class^=wrapper-02] [role=presentation]')
        .parentNode;
    const btnDescription = document.createElement('button');
    btnDescription.classList.add('btn-description');
    btnDescription.textContent = 'Read more';
    containerForBtn.appendChild(btnDescription);

    const content = document.querySelector(
        '[class^=wrapper-01] [class^=wrapper-02] [role=presentation]'
    );
    btnDescription.addEventListener('click', () => {
        
        content.classList.toggle('opened');
        let height = content.scrollHeight;            
        
        if (content.classList.contains('opened')) {
            btnDescription.textContent = 'Show less';
            content.style.maxHeight = height + 'px';
        } else {
            btnDescription.textContent = 'Read more';
            content.style.maxHeight = 125 + 'px';
            
        };
    })

})();
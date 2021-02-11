function changeView(key) {
    const sections = document.querySelectorAll('section');

    if(key == 'down') {
        for(let i = 0; i < sections.length; i++) {
            if(sections[i].style.display != 'none') {
                sections[i].style.display = 'none';
                sections[i + 1].style.display = '';
                arrowActive();
                return false;
            }
        }
    }
    else if(key == 'up') {
        for(let i = 0; i < sections.length; i++) {
            if(sections[i].style.display != 'none') {
                sections[i].style.display = 'none';
                sections[i - 1].style.display = '';
                arrowActive();
                return false;
            }
        }
    }
    
}

function focusing(focusId) {
    const sections = document.querySelectorAll('section');
    for(let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(focusId).style.display = '';
    arrowActive();
}

function arrowActive() {
    const sections = document.querySelectorAll('section');

    for(let i = 0; i < sections.length; i++) {
        if(sections[i].style.display != 'none') {
            switch(i + 1) {
                case 1:
                    document.getElementById('upper-arrow').style.display = 'none';
                    document.getElementById('down-arrow').style.display = '';
                    break;
                case 2: case 3:
                    document.getElementById('upper-arrow').style.display = '';
                    document.getElementById('down-arrow').style.display = '';
                    break;
                 case 4:
                    document.getElementById('upper-arrow').style.display = '';
                    document.getElementById('down-arrow').style.display = 'none';
                    break;
            }
        }
    }
}
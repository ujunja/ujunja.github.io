var menubar = document.getElementById('menubar');
menubar.addEventListener('click', function() {
    if(this.className == 'menubar') {
        this.className = 'activebar';
        const bars = this.querySelectorAll('div');
        for(let i = 0; i < bars.length; i++) {
            bars[i].className = 'bar' + (i + 1);
        }
        document.getElementById('whitecover').style.width = '0%';
    }
    else {
        this.className = 'menubar';
        const bars = this.querySelectorAll('div');
        for(let i = 0; i < bars.length; i++) {
            bars[i].className = 'bar';
        }
        document.getElementById('whitecover').style.width = '700px';
    }
});

document.getElementById('home-icon').addEventListener('click', function() {
   location.href = 'index.html';
});

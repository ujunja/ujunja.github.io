

        function aboutContents(aboutkey) {
            let contentDivs = document.querySelectorAll('.page2-c-right-content .right-centent')
            
            switch(aboutkey) {
                case 'Front-End': case 'Back-End': case 'Etc':
                    document.querySelector('#technique').style.display = '';
                    document.querySelector('#technique h1').innerHTML = aboutkey;
                    document.querySelector('#career_awards').style.display = 'none';

                    for(let i = 0; i < contentDivs.length; i++) {
                        contentDivs[i].style.display = 'none';
                    }
                    document.querySelector('#' + aboutkey).style.display = '';
                    break;
                case 'career_awards':
                    document.querySelector('#technique').style.display = 'none';

                    document.querySelector('#career_awards').style.display = '';
                    break;
            }
        }
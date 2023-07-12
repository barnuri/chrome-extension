var styles: any = { };

const githubModify = () => {
    window.addEventListener("DOMContentLoaded", (event) => {
        var currentUser = (document.querySelector('.AppHeader-user .text-bold') as HTMLAnchorElement)!.innerText.trim();
        styles[currentUser] = 'color: green; font-weight: 500; font-size: 16px;';
    
        [...document.querySelectorAll('.opened-by a')].forEach(obj => {
            const a = obj as HTMLAnchorElement;
            var user = a.title.split('by')[1].trim();
            if (!styles[user]) {
                var randomColor = `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
                styles[user] = `color: ${randomColor};`;
            }
            a.innerHTML = `<span style='${styles[user]}'>${a.innerText}</span>`
        });
    
        [...document.querySelectorAll('[data-hovercard-type=repository]')].forEach(obj => {
            const a = obj as HTMLAnchorElement;
            var repo = a.innerText.trim();
            if (!styles[repo]) {
                var randomColor = `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
                styles[repo] = `color: ${randomColor};`;
            }
            a.innerHTML = `<span style='${styles[repo]}'>${a.innerText}</span>`
        })
    });
};

export default githubModify;

import log from "../logger";

var styles: any = { };
const className = 'github-modify';

const getStyle = (key: string) => {
    if (!styles[key]) {
        var randomColor = `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
        styles[key] = `color: ${randomColor};`;
    }
    return styles[key];
}

const highlightRepos = () => {
    const repos = [...document.querySelectorAll('[data-hovercard-type=repository]')];
    repos.forEach(obj => {
        const a = obj as HTMLAnchorElement;
        var repo = a.innerText.trim();
        a.innerHTML = `<span class='${className}' style='${getStyle(repo)}'>${a.innerText}</span>`
    })
    if (repos.length > 0) {
        log(`modify ${repos.length} github repos`);
    }
};

const highlightUser = () => {
    var currentUser = (document.querySelector('.AppHeader-user .text-bold') as HTMLAnchorElement)!.innerText.trim();
    styles[currentUser] = 'color: green; font-weight: 500; font-size: 16px;';
    const userAHref = [...document.querySelectorAll('.opened-by a')];
    userAHref.forEach(obj => {
        const a = obj as HTMLAnchorElement;
        var user = a.title.split('by')[1].trim();
        a.innerHTML = `<span class='${className}' style='${getStyle(user)}'>${a.innerText}</span>`
    });
    if (userAHref.length > 0) {
        log(`modify ${userAHref.length} github users`);
    }
}

const highlights = () => {
    if ([...document.querySelectorAll(`.${className}`)].length > 0) {
        return;
    }
    log('modify github html');
    highlightUser();
    highlightRepos();
};

const githubModify = () => {
    if (document.location.host !== 'github.com') {
        return;
    }
    window.addEventListener("DOMContentLoaded", (event) => {
        highlights();
    });
        
    setInterval(() => highlights(), 1000);
};

export default githubModify;

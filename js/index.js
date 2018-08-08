window.onload = function () {
    let keyCon = document.querySelector('.keyCon');
    let flag = document.querySelector('#flag');
    let bgmusic = document.querySelector('#bgmusic');
    let life = document.querySelector('.life');
    let jf = document.querySelector('.jf');
    let death = document.querySelector('.death');
    let replay = document.querySelector('.replay');
    let key = document.querySelector('.key');
    let audio = document.querySelector('#audio');
    let flg = true;

    keyCon.ontouchstart = function (e) {
        if (flg == false) {
            return;
        }
        if (e.target.className == 'btn') {
            e.target.style.transform = 'scale(0.8)';
            gameobj.delS(e.target.innerText);
        }
    }

    keyCon.ontouchend = function (e) {
        if (e.target.className == 'btn') {
            e.target.style.transform = 'scale(1)';
        }
    }

    flag.ontouchstart = function () {
        if (flag.className == 'start') {
            flag.className = 'end';
            clearInterval(gameobj.t)
            flg = false;
            key.style.opacity = 1;
        } else {
            flag.className = 'start';
            gameobj.run();
            flg = true;
        }
    }

    bgmusic.ontouchstart = function () {
        if (bgmusic.className == 'Astart') {
            bgmusic.className = 'Aend';
            audio.pause();
        } else {
            bgmusic.className = 'Astart';
            audio.play();
        }
    }

    replay.ontouchstart = function () {
        death.style.display = 'none';
        gameobj.init();
        gameobj.createLetter(5);
        key.style.opacity = 1;
    }

    let gameobj = new game();
    gameobj.screen = document.querySelector('.screen');
    gameobj.createLetter(5);
    gameobj.flag = flag;
    gameobj.bgmusic = bgmusic;
    gameobj.life = life;
    gameobj.death = death;
    gameobj.jf = jf;
    gameobj.key = key;
}
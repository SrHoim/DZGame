class game {
    constructor() {
        this.screen = '';
        this.key = '';
        this.flag = '';
        this.bgmusic = '';
        this.life = '';
        this.jf = '';
        this.arr = [];
        this.jfNum = 0;
        this.lifeNum = 10;
        this.death = '';
    }
    createLetter(num) {
        //创建字母
        for (let i = 0; i < num; i++) {
            let obj = {};
            let str = '';
            do {
                let asc = Math.floor(Math.random() * 26 + 65);
                str = String.fromCharCode(asc);
            } while (this.isHasc(str))
            let div = document.createElement('div');
            div.className = 'letter';
            div.style.backgroundImage = `url('img/A_Z/${str}.png')`;
            let left = '';
            do {
                left = Math.random() * 5.7 + 0.6;
                div.style.left = left + 'rem';
            } while (this.isCd(left))
            this.screen.appendChild(div);

            obj.left = left;
            obj.top = 0.9;
            obj.node = div;
            obj.name = str;
            this.arr.push(obj);
        }
    }
    init() {
        //初始化
        this.life.innerText = 10;
        this.jf.innerText = 0;
        this.lifeNum = 10;
        this.jfNum = 0;
        this.flag.className = 'end';
        this.bgmusic.className = 'Astart';
        this.screen.innerText = '';
        this.arr = [];
        clearInterval(this.t);
    }
    isHasc(name) {
        //解决字母重复
        for (let item of this.arr) {
            if (name == item.name) {
                return true;
            }
        }
        return false;
    }
    isCd(lf) {
        //解决字母重叠
        for (let item of this.arr) {
            if (Math.abs(lf - item.left) < 0.53) {
                return true;
            }
        }
        return false;
    }
    run() {
        //字母下落
        this.key.style.opacity = 0.3;
        this.t = setInterval(() => {
            this.arr.forEach((elements, index) => {
                elements.top += this.jfNum / 100 + 0.1;
                if (elements.top > 6.1) {
                    this.screen.removeChild(elements.node);
                    this.arr.splice(index, 1);
                    this.createLetter(1);
                    this.addlife();
                    if (this.lifeNum == 0) {
                        this.death.style.display = 'block';
                        this.death.childNodes[1].childNodes[1].innerText = this.jfNum;
                        this.init();
                    }
                }
                elements.node.style.top = elements.top + 'rem'
            })
        }, 100)
    }
    delS(name) {
        //消除字母
        this.arr.forEach((el, index) => {
            if (name == el.name) {
                this.screen.removeChild(el.node);
                this.arr.splice(index, 1);
                this.createLetter(1);
                this.jfNum++;
                this.addjf();
            }
        })
    }
    addjf() {
        //修改积分
        this.jf.innerText = this.jfNum;
    }
    addlife() {
        //修改生命值
        this.lifeNum--;
        this.life.innerText = this.lifeNum;
    }
}
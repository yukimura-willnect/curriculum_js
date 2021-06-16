class Taiyaki {
    constructor(taste1,taste2,taste3){
        this.taste1 = taste1;
        this.taste2 = taste2;
        this.taste3 = taste3;
    }

    Annko() {
        console.log(`中身は${this.taste1}です`);
    }

    cream() {
        console.log(`中身は${this.taste2}です`);
    }

    cheese() {
        console.log(`中身は${this.taste3}です`);
    }

}

let tasteInfo = new Taiyaki ('あんこ','クリーム','チーズ');

tasteInfo.Annko();
tasteInfo.cream();
tasteInfo.cheese();

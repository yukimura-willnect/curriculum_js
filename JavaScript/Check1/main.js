//問1:isEven関数を実行して、以下の配列から偶数だけが出力されるように実装してください。

let numbers = [2, 5, 12, 13, 15, 18, 22];
function isEven(numbers) {
    for (let i = 0;i<=numbers.length;i++){
        if(numbers[i]%2 ===0){
            console.log(numbers[i] + 'は偶数です');
        }
    }
}

isEven(numbers);

//問2 （文章略）
class Car {
    constructor(gas,carNum){
        this.gas = gas;
        this.carNum = carNum;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gas}です。ナンバーは${this.carNum}です`);
    }

}

let gtr = new Car('〇〇','△△');
gtr.getNumGas();

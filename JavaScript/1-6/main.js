//問1：10、15、20、25を含む配列の変数scoresを用意して、画像のように偶数だけを出力してください。
let scores = [10,15,20,25];
console.log(scores[0]+'は偶数です');
console.log(scores[2]+'は偶数です');

//問2：ガソリンとナンバーのプロパティを持った「carオブジェクト」を作成して、
//ガソリンとナンバーを出力してください。
let carInfo = {
    gass:20.5,
    num:1234
};

console.log('ガソリンは' + carInfo.gass + 'です');
console.log('ナンバーは' + carInfo.num + 'です');

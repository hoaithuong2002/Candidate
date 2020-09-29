class Candidate {
    constructor(ID, name, brithday) {
        this.id = ID;
        this.name = name;
        this.brithday = brithday;
        this.score = [];
    }

    showInfo() {
        return 'Ma thi sinh; ' + this.id + 'ten thi sinh: ' + this.name + 'ngay sinh; ' + this.brithday;
        let a= "";
        a+= this.name;
    }

    setScore(a, b, c) {
        this.score.push(a, b, c);
    }

    getAverageScore() {
        return (this.score[0] + this.score[1] + this.score[2]) / 3;
        console.log( (this.score[0] + this.score[1] + this.score[2]) / 3 );

    }
}

let Candidate1 = new Candidate('TS001', 'Tran Thi Tuyet', '25/7/2002');
let Candidate4 = new Candidate('TS002', 'Nguyen Thi Thu Uyen', '18/7/2002');
let Candidate2 = new Candidate('TS003', 'Nguyen Thu Hang', '01/8/2002');
Candidate1.setScore(6, 8, 9);
 Candidate4.setScore(5,9,6);
 Candidate2.setScore(4,8,9);
let Averagescore1 = Candidate1.getAverageScore();

alert(Candidate1.showInfo()  +'diem trung binh la: ' + Candidate1.getAverageScore())
let Averagescore4 = Candidate4.getAverageScore();
alert(Candidate4.showInfo()  +'diem trung binh la: ' + Candidate4.getAverageScore())
let Averagescore2 = Candidate2.getAverageScore();
alert(Candidate2.showInfo()  +'diem trung binh la: ' + Candidate2.getAverageScore())






// function checkScoreZezo() {
    // for (let i = 0; i < this.score.length; i++) {
    //     if(score ===0){
    //         alert('bi diem liet')
    //     }
    //
    // }
    // checkScoreZezo();
// }





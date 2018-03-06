var game = {
    score: 0,
    questions: [ 
        ["Who is considered the First Emperor of China?", 'Qin Shi Huang-di', 'Mao Zedong', 'Guan Yu', 'Qianlong Huang-di', '1'],
        ["Who was the Last person to be deemed Emperor of China?", "Empress Cixi", "Emperor Puyi", "Emperor Tangzhi", "Emperor Qin Shi", '2'],
        ["What was the first currency used by the ancient Chinese?", "Bronze coins","Percious Gems","Alcohol", "Cowery Shells", "4"],
        ["When did the First Emperor 'unify' China?","220 BC","220 AD","440 BC","1 AD", "1"],
        ["Who wrote the Art of War?","Sima Chien","Liu Bei","Sun Yat Sen","Sun Tzu", "4"],
        ["What common item used around the ancient world did China never discover/invent?","Forged Iron","Glass","Paper","the Wheel", "2"],
        []
                ],
    curQuestion: "",
    displayQuestion: function () {

        if (this.questions.length === 0) {
            console.log("you answered them all. congrats");
        } else {
            this.curQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
            $("#current-question").text(this.curQuestion[0]);
            this.removeFromArray();
            for (var i = 1; i < this.curQuestion.length - 1; i++) {

                $("#ans" + i).text(this.curQuestion[i]);


            }
        }
    },
    removeFromArray: function () {
        var x = this.questions.indexOf(this.curQuestion)
        if (x > -1) {
            this.questions.splice(x, 1);
        }
    },
    correctAnswer: function () {
        $('.btn').on('click', function () {
            if (this.value === game.curQuestion[5]) {
                console.log("right answer");
                game.score++;
                game.displayQuestion();
            } else {
                console.log("wrong answer");
                game.displayQuestion()
            }
        })
    },
    timer: function () {
        
    }
}

$(document).ready(function () {

    game.displayQuestion();
    game.correctAnswer()
    console.log(game.questions);

});
var game = {
    score: 0,
    questions: [["what is kale?", 'fruit', 'veg', 'rock', 'lizard', '2'], ["otherstuff"]],
    curQuestion: "",
    displayQuestion: function () {

        this.curQuestion = this.questions[Math.floor(Math.random() * this.questions.length)];
        
        $("#current-question").text(this.curQuestion[0]);
        this.removeFromArray();
        for (var i = 1; i < this.curQuestion.length - 1; i++) {

            $("#ans" + i).text(this.curQuestion[i]);

        }

        console.log(this.curQuestion);

    },
    removeFromArray: function(){
        var x = this.questions.indexOf(this.curQuestion)
        if(x > -1){
            this.questions.splice(x, 1);
        }
    }

}

$(document).ready(function () {

    game.displayQuestion();

    console.log(game.questions);

});
(function(){

function Question (question, answers, correct){
	this.question = question;
	this.answers = answers;
	this.correct = correct;
}

Question.prototype.displayQuestion = function(){
	console.log(
		'%c' + this.question, 
		'background: #424242; color: #fafafa;'
		);

	for(var i = 0; i < this.answers.length; i++){
		console.log(i + '. ' + this.answers[i]);
	}
};

Question.prototype.checkAnswer = function(answer, callback){
	var innerScore;
	if(answer === this.correct){
		console.log('%c Правильный ответ!', 'background: #66bb6a; color: #fafafa;');
		innerScore = callback(true);
	}else{
		console.log('%c Неверный ответ. Попробуйте ещё раз!', 'background: #ef5350; color: #fafafa;');
		innerScore = callback(false);
	}

	this.displayScore(innerScore);
};

Question.prototype.displayScore = function(score){
	console.log('%c Вас счет равен: ' + score, 'background: #fb8c00; color: #fafafa;');
};

var q1 = new Question(
	'Какой из приведённых вариантов не является допустимым значением свойства border-style?', 
	['dotted', 'inset', 'glazed', 'groove', 'solid'],
	2
	);

var q2 = new Question(
	'Что из перечисленного не является допустимым значением длины?', 
	['cm', 'dm', 'em', 'mm'],
	1
	);

var q3 = new Question(
	'В CSS есть 16 основных названий для цвета. Какое из перечисленных названий к ним не принадлежит?', 
	['olive', 'fuchsia', 'cyan', 'aqua', 'maroon'],
	2
	);

var q4 = new Question(
	'Какое из следующих свойств не влияет на модель box?', 
	['content', 'padding', 'margin', 'outline', 'border'],
	3
	);

var q5 = new Question(
	'Какой из перечисленных медиа типов не является допустимым для использования в media queries?', 
	['tv', 'all', 'voice', 'print', 'braille','tty','embossed'],
	2
	);

var question = [q1, q2, q3, q4, q5];

function score(){
	scoreValue = 0;
	return function(correct){
		if(correct){
			scoreValue++;
		}
		return scoreValue;
	}
}

var keepScore = score();

function nextQuestion(){
	var random = Math.floor(Math.random() * question.length);

	question[random].displayQuestion();

	var answer = prompt('Введите номер верного ответа:');

	question[random].checkAnswer(parseInt(answer), keepScore);

	if(answer !== "exit" && answer !== null){
		nextQuestion();
	}
}

nextQuestion();

})();


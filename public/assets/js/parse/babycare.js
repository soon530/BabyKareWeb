
function initBabyCare() {
	Parse.initialize("NJFvH3uzP9EHAKydw7iSIICBBU4AfAHvhJzuTawu", "L9gqTgUKlTofouW2wLG0EDAsdfR1f16Dk89VtLXI");
}

function sendMail() {

	var name = $('#name').val();
	var email = $('#email').val();
	var message = $('#message').val();

	var err = '';
	if (name == '') {
		err = err + '姓名, ';
	} 
	if (email == '') {
		err = err + '聯絡方式, ';
	} 
	if (message == '') {
		err = err + '問題與建議';
	}


	if (err == '') {
		alert('感謝您的問題與建議，我們將會儘快回履!');
	} else {
		alert("請輸入：" + err);
	}

}

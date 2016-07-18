/**
 * http://usejsdoc.org/
 */



var trainer={
		tnrName:'Nag',
		doTeach:function(){
			console.log(this.tnrName +" teaching JS");
		}
};



var teachBtn=document.getElementById('teachBtn');
//teachBtn.addEventListener('click',function(){
//	trainer.doTeach();
//});

teachBtn.addEventListener('click',trainer.doTeach.bind(trainer));
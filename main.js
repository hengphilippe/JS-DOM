// delete list 

const btnDel = document.querySelectorAll(".delete");
// for(let i=0; i<btnDel.length;i++){
// 	console.log(btnDel[i]);
// 

for(let btn of btnDel) {
	btn.addEventListener('click', (e) => {
		let rec = e.target.parentNode;
		let allRec = rec.parentNode;

		allRec.removeChild(rec);
	})
};
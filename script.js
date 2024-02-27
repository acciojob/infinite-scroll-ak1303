//your code here!
let arr=['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 8','Item 9', 'Item 10'];
const list = document.querySelector('ol');
arr.forEach(val=>{
	let liElement = document.createElement('li');
	list.append(liElement);
	liElement.innerHTML=`${val}`; 
})
let count=10;
function add2Element(count) {
	for(let i=count;i<=count+1;i++){
		let liElement = document.createElement('li');
		list.append(liElement);
		liElement.innerHTML=`Item ${i}`;
	}
}
list.addEventListener('scroll',()=>{
	if(list.scrollHeight-list.scrollTop === list.clientHeight){
		add2Element(count+1);
		count+=2;
	}
})     
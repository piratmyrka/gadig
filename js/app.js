let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
		task.classList.add('task');
		task.innerHTML = this.value;
		task.addEventListener('dblclick', function() {
			let text = this.innerHTML;
			this.innerHTML = '';
			
			let edit = document.createElement('input');
			edit.value = text;
			this.appendChild(edit);
			
			let self = this;
			edit.addEventListener('keypress', function(event) {
				if (event.key == 'Enter') {
					self.innerHTML = this.value;
				}
			});
		});
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.innerHTML = 'удалить';
		remove.classList.add('remove');
		remove.addEventListener('click', function() {
			this.parentElement.parentElement.removeChild(this.parentElement);
		});
		li.appendChild(remove);
		
		let mark = document.createElement('span');
		mark.innerHTML = 'сделано';
		mark.classList.add('mark');
		mark.addEventListener('click', function() {
			this.parentElement.classList.add('done');
		});
		li.appendChild(mark);
		
		list.appendChild(li);
		
		this.value = '';
	}
});

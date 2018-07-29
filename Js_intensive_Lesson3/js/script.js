window.addEventListener('DOMContentLoaded', function(){
// Получаем информацию для работы
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName('button'),
		open = document.getElementsByClassName('open')[0],
		main = document.querySelector('.main'),
		shop = document.querySelector('.shop');

// Функция для создания корзины 
		function createCart() { 
		// Создаем элементы корзины
			let cart = document.createElement('div'),
				field = document.createElement('div'),
				heading = document.createElement('h2'),
				close = document.createElement('button');
		
		// Добавили классы элементам
			cart.classList.add('cart');
			field.classList.add('cart-field');
			close.classList.add('close');
		// Добавили текст к элементам 
			close.textContent = 'Закрыть';
			heading.textContent = 'В нашей корзине: ';
		// Добавили элементы на страницу
			document.body.appendChild(cart);
			cart.appendChild(heading);
			cart.appendChild(field);
			cart.appendChild(close); 
		}
	createCart();
 

	let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close');

		for(let i = 0; i < buttons.length-1; i++) {
			// Вешаем обработчик события клик на каждую из кнопок
			buttons[i].addEventListener('click', function() { 
				// Создали копию карточки товара
				let item = products[i].cloneNode(true), 
						btn = item.querySelector('button'); 
						btn.textContent = 'Убрать из корзины';
					field.appendChild(item);
					products[i].remove(); 
// При клике на кнопку "Убрать из корзины" карточка товара удаляется из корзины и добавляется на главную страницу
					btn.addEventListener('click', function() {
						item.remove(); 
				 shop.appendChild(products[i]);
			 });

		});				  
}

		function openCart() {
			cart.style.display = 'block';
		}
		function closeCart() { 
			cart.style.display = 'none';
		}	

		open.addEventListener('click', openCart); 
		close.addEventListener('click', closeCart);  

});
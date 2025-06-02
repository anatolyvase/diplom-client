document.addEventListener('DOMContentLoaded', function() {
    initOrderSystem();
});

function initOrderSystem() {
    const orderBtn = document.getElementById('orderBtn');
    if (!orderBtn) return;
    
    orderBtn.addEventListener('click', function() {
        createOrderModal();
    });
    
    // Создаем модальное окно для оформления заказа
    function createOrderModal() {
        // Проверяем, не открыто ли уже модальное окно
        if (document.getElementById('orderModal')) return;
        
        // Создаем элементы модального окна
        const modal = document.createElement('div');
        modal.id = 'orderModal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
        modal.style.zIndex = '1000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        
        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.padding = '30px';
        modalContent.style.borderRadius = '5px';
        modalContent.style.width = '80%';
        modalContent.style.maxWidth = '500px';
        modalContent.style.position = 'relative';
        
        // Кнопка закрытия
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.right = '15px';
        closeBtn.style.fontSize = '24px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.addEventListener('click', () => document.body.removeChild(modal)); 
        
        // Форма для ввода данных клиента
        modalContent.innerHTML = `
            <h2 style="margin-bottom: 20px; text-align: center;">Оформление заказа</h2>
            <form id="orderForm">
                <div class="form-group" style="margin-bottom: 15px;">
                    <label for="clientName" style="display: block; margin-bottom: 5px; font-weight: bold;">Ваше имя:</label>
                    <input type="text" id="clientName" class="form-control" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label for="clientPhone" style="display: block; margin-bottom: 5px; font-weight: bold;">Телефон:</label>
                    <input type="tel" id="clientPhone" class="form-control" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label for="clientEmail" style="display: block; margin-bottom: 5px; font-weight: bold;">Email:</label>
                    <input type="email" id="clientEmail" class="form-control" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label for="selectedCar" style="display: block; margin-bottom: 5px; font-weight: bold;">Выбранная одежа:</label>
                    <select id="selectedCar" class="form-control" required style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                        <option value="">Выберите нужную вам одежу</option>
                        <option value="Свидшот белый">Свидшот белый</option>
                        <option value="Комплект брюки & куртка">Комплект брюки & куртка</option>
                        <option value="Костюм влагозащитный">Костюм влагозащитный</option>
                        <option value="Футболка черная">Футболка черная</option>
                        <option value="Кепка OFF-WHITE">Кепка OFF-WHITE</option>
                        <option value="Толстовка Vintage Vibes">Толстовка Vintage Vibes</option>
                        <option value="Комплект брюки & куртка">Комплект брюки & куртка</option>
                        <option value="Спортивный костюм">Спортивный костюм</option>
                        <option value="Футболка Oversize белая">Футболка Oversize белая</option>
                        <option value="Кружевное платье Dior">Кружевное платье Dior</option>
                        <option value="Классический костюм Prada">Классический костюм Prada</option>
                        <option value="Черные спортивные шорты">Черные спортивные шорты</option>
                        <option value="Стеганая куртка Knox">Стеганая куртка Knox</option>
                        <option value="Футболка Oversize 705">Футболка Oversize 705</option>
                        <option value="Готландская черная куртка">Готландская черная куртка</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 15px;">
                    <label for="orderComments" style="display: block; margin-bottom: 5px; font-weight: bold;">Комментарий к заказу:</label>
                    <textarea id="orderComments" class="form-control" rows="3" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;"></textarea>
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button type="submit" class="welcome-btn" style="width: 200px; padding: 10px; background:rgb(0, 0, 0); color: white; border: none; border-radius: 4px; cursor: pointer;">Подтвердить</button>
                    <button type="button" id="cancelOrder" class="welcome-btn" style="width: 200px; margin-left: 10px; padding: 10px; background: #ccc; color: #333; border: none; border-radius: 4px; cursor: pointer;">Отмена</button>
                </div>
            </form>
        `;
        
        modalContent.prepend(closeBtn);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Обработчик отправки формы
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            processOrderForm();
        });
        
        // Обработчик кнопки отмены
        document.getElementById('cancelOrder').addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        // Закрытие по клику вне модального окна
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
    
    // Обработка формы заказа
    function processOrderForm() {
        // Валидация данных
        if (!validateOrderForm()) return;
        
        // Собираем данные формы
        const orderData = {
            name: document.getElementById('clientName').value.trim(),
            phone: document.getElementById('clientPhone').value.trim(),
            email: document.getElementById('clientEmail').value.trim(),
            car: document.getElementById('selectedCar').value,
            comments: document.getElementById('orderComments').value.trim(),
            orderDate: new Date().toISOString()
        };
        
        // Отправляем данные на сервер
        saveOrderToDatabase(orderData);
    }
    
    // Валидация формы заказа
    function validateOrderForm() {
        const name = document.getElementById('clientName').value.trim();
        const phone = document.getElementById('clientPhone').value.trim();
        const email = document.getElementById('clientEmail').value.trim();
        const car = document.getElementById('selectedCar').value;
        
        if (!name) {
            showError('Пожалуйста, введите ваше имя');
            return false;
        }
        
        if (!phone) {
            showError('Пожалуйста, введите ваш телефон');
            return false;
        }
        
        if (!email) {
            showError('Пожалуйста, введите ваш email');
            return false;
        } else if (!validateEmail(email)) {
            showError('Пожалуйста, введите корректный email');
            return false;
        }
        
        if (!car) {
            showError('Пожалуйста, выберите автомобиль');
            return false;
        }
        
        return true;
    }
    
    // Валидация email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Показать сообщение об ошибке
    function showError(message) {
        // Удаляем предыдущее сообщение об ошибке, если есть
        const existingError = document.querySelector('.order-error-message');
        if (existingError) existingError.remove();
        
        // Создаем элемент для сообщения об ошибке
        const errorDiv = document.createElement('div');
        errorDiv.className = 'order-error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.marginBottom = '15px';
        errorDiv.style.textAlign = 'center';
        errorDiv.textContent = message;
        
        // Вставляем сообщение перед формой
        const form = document.getElementById('orderForm');
        form.prepend(errorDiv);
    }
    
    
    function saveOrderToDatabase(orderData) {
        const submitBtn = document.querySelector('#orderForm button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
        
        // Измененный endpoint для SQL Server
        fetch('api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData)
        })
        .then(response => {
            if (!response.ok) throw new Error('Ошибка сети');
            return response.json();
        })
        .then(data => {
            if (data.success) {
                showOrderSuccess();
                const modal = document.getElementById('orderModal');
                if (modal) document.body.removeChild(modal);
            } else {
                throw new Error(data.message || 'Ошибка при сохранении заказа');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            showError(error.message || 'Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте позже.');
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        });
    }
    
    // Показать сообщение об успешном оформлении заказа
    function showOrderSuccess() {
        const messageDiv = document.getElementById('orderMessage');
        if (!messageDiv) return;
        
        messageDiv.style.display = 'block';
        messageDiv.style.color = 'green';
        messageDiv.style.marginTop = '20px';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.padding = '10px';
        messageDiv.style.backgroundColor = '#f0fff0';
        messageDiv.style.borderRadius = '4px';
        messageDiv.innerHTML = '<strong>Ваш заказ успешно оформлен!</strong><br>Мы свяжемся с вами в ближайшее время.';
        
        // Скрываем сообщение через 5 секунд
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
};
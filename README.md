1. Создайте отдельную ветку для этой задачи из предыдущей задачи ветки.
2. Повторная интеграция
    - Интегрируйте Redux в свое приложение. Вам нужно будет настроить хранилище Redux и редукторы с помощью Redux Toolkit.
3. Подключите компоненты. Подключите соответствующие компоненты к хранилищу Redux. Компоненты должны иметь возможность доступа к следующим данным и изменять их:
    - Сохраните значение поиска при нажатии кнопки CTA (Призыв к действию).
    - Сохраняйте элементы на странице.
    - Реализация RTK-запроса: Используйте запрос Redux Toolkit (RTK Query) для выполнения вызовов API и кэширования результатов. Это изменит вашу предыдущую реализацию вызова API.
4. Загружаемые флаги
    - Внедрите отдельные флаги загрузки в хранилище Redux для главной страницы и страницы сведений. Эти флаги должны указывать, загружаются ли данные.
5. Обновления тестов
    - Обновите свои тесты, чтобы учесть изменения, внесенные Redux и RTK Query.
    - Протестируйте функциональность, связанную с состоянием Redux и вызовами API.




Ученик может получить 100 баллов:
- Redux интегрирован в приложение с помощью Redux Toolkit - 30 баллов
- Поиск сохранен в хранилище - 5 баллов
- Количество элементов на странице сохраняется в хранилище - 5 баллов
- Отображаются индикаторы загрузки, флаги загрузки сохраняются в хранилище, - 10 баллов
- При изменении поиска или элементов на странице приложение выполняет новый вызов, используя RTK-запрос для извлечения данных - 25 баллов
- Тесты были изменены для проверки функциональности с использованием Redux и RTK-запроса - 25 баллов

Штрафы:
- Машинопись не используется: -95 баллов
- Использование любых: -20 баллов за каждое
- Использование ts-ignore: -20 баллов за каждое
- Прямые манипуляции с DOM внутри компонентов React: -50 баллов за каждый
- Наличие запахов кода (Божественный объект, куски дублирующегося кода), разделы кода с комментариями: -10 баллов за каждый
- Использование библиотек компонентов, например, Material UI, Ant Design: -100 баллов
- Охват тестированием составляет менее 80%: -30 баллов
- Выполнение после крайнего срока: -40 баллов

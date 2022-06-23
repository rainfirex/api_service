<template>
    <div>
        <h2 class="mt-3 mb-4 text-center">{{ title }}</h2>
        <div class="col-6 offset-3">
            <h3>Backend</h3>
            <div>
                <p class="ml-2">Необходимо реализовать REST API интерфейс для работы с сущностью «оборудование».</p>
                <table class="table">
                    <thead>
                    <tr>
                        <td>#</td>
                        <td>Роут</td>
                        <td>Действие</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>GET:/api/equipment</td>
                        <td>Вывод пагинированного списка оборудования с возможностью поиска путем указания query параметров советующим ключам ответа</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>GET:/api/equipment/{id}</td>
                        <td>Запрос данных по id</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>POST:/api/equipment</td>
                        <td>Создание новой(ых) записи(ей)</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>PUT:/api/equipment/{id}</td>
                        <td>Редактирование записи</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>DELETE:/api/equipment/{id}</td>
                        <td>Удаление записи</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>GET:/api/equipment-type</td>
                        <td>Вывод пагинированного списка типов оборудования с возможностью поиска путем указания query параметров советующим ключам ответа</td>
                    </tr>
                    </tbody>
                </table>

                <p>Для хранения информации об оборудовании используется 2 таблицы в базе данных (использовать MySQL):</p>
                <ol>
                    <li>«Тип оборудования» поля: код, наименование типа, маска серийного номера.</li>
                    <li>«Оборудование» поля: код, код типа оборудования, серийный номер (уникальное поле), примечание.</li>
                </ol>
                <p>При создании новых записей в поле «серийный номер» интерфейс принимает массив номеров каждый из которых валидируется на соответствие маске и отсутствие в таблице «оборудование» в качестве уникального ключа. Создание может быть как по одному объекту, так и коллекция (на входе json-массив).</p>
                <p>Если «серийный номер» не проходит валидацию, по нему формируется соответствующие сообщение, которое возвращает интерфейс, после обработки всего массива номеров.</p>

                <table class="table">
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>Тип оборудования</td>
                        <td>Маска SN</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>TP-Link TL-WR74</td>
                        <td>XXAAAAAXAA</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>D-Link DIR-300</td>
                        <td>NXXAAXZXaa</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>D-Link DIR-300 S</td>
                        <td>NXXAAXZXXX</td>
                    </tr>
                    </tbody>
                </table>

                <p>Где:</p>
                <ul>
                    <li>N – цифра от 0 до 9;</li>
                    <li>A – прописная буква латинского алфавита;</li>
                    <li>a – строчная буква латинского алфавита;</li>
                    <li>X – прописная буква латинского алфавита либо цифра от 0 до 9;</li>
                    <li>Z –символ из списка: “-“, “_”, “@”.</li>
                </ul>

                <h2>Обязательные требования:</h2>
                <ol>
                    <li>использование фреймворка Laravel v.8+.</li>
                    <li>наличие PHPDoc для всех методов</li>
                    <li>использование Form Request Validation</li>
                    <li>все запросы API должны быть авторизованы (проверка Bearer Authentication)</li>
                    <li>все ответы API должны использовать API Resources & Resource Collections</li>
                    <li>вся бизнес-логика манипуляции с данными должна быть инкапсулирована в моделях и сервисном слое приложения (контроллеры должны быть плоскими)</li>
                </ol>

                <h2>Материалы для решения задачи:</h2>
                <ul>
                    <li><a href="https://www.php.net/" target="_blank">PHP: https://www.php.net/</a></li>
                    <li><a href="https://laravel.com/" target="_blank">Laravel https://laravel.com/</a></li>
                    <li><a href="http://www.mysql.com/downloads/mysql/" target="_blank">MySQL Server (http://www.mysql.com/downloads/mysql/)</a></li>
                    <li><a href="https://regex101.com/" target="_blank">regex101 (https://regex101.com/)</a></li>
                </ul>
            </div>


            <h3>Frontend</h3>
            <div>
                <p>Для отображения сделать минимальное SPA-приложение с использованием Vue.js, работающее с разработанным API.</p>

                <h2>Форма добавления записей, содержащая:</h2>
                <ol>
                    <li>Список «Тип оборудования» (id типа) select.</li>
                    <li>Поле «Серийные номера» input-text/textarea.</li>
                    <li>Поле «Примечание» textarea</li>
                    <li>Кнопка «Добавить».</li>
                </ol>

                <h2>Форма поиска, редактирования и удаления записей:</h2>
                <ol>
                    <li>Поисковая строка input-text, для поиск по серийному номеру/примечанию.</li>
                    <li>Поле «Код оборудования» (id) — input-text.</li>
                    <li>Поле «Тип оборудования» (наименование) — input-text/select.</li>
                    <li>Поле «Серийный номер» — input-text.</li>
                    <li>Поле «Примечание» — input-text/textarea.</li>
                    <li>Кнопки редактировать/сохранить/удалить в зависимости от выдранного режима (просмотр/редактирование).</li>
                </ol>

                <p class="mb-0">В качестве ui kit можно использовать любой готовый фреймворк/библиотеку.</p>
                <p class="mb-0">Редактирование может быть реализовано как в целом всех полей, так и отдельными полями.</p>
                <p class="mb-0">Для всех форм обязательно наличие минимальной валидации данных на стороне клиента.</p>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from "../../components/Header";
    export default {
        name: "About",
        components: {Header},
        setup: () => ({
            title: 'О приложении'
        }),
    }
</script>

<style lang="scss" scoped>
    p{
        text-indent: 30px;
    }
</style>
# Проект auto-complect-service

## Netlify
https://auto-complect-service.netlify.app/


### Правила работы в репозитории

- __main__ -> prodaction branch
- __dev__ -> develpmnet branch
              - __task-1-olya__
              - __task-1-marina__


- __main__ - главная production ветка. В неё мержится готовый продукт и протестированный продукт только из ветки -dev. Мержить и делать ПР в эту ветку из других веток запрещено.

- __dev__ - основная ветка разработки. Содержит актуальный код на данный момент вариант от всех разработчиков. При старте разработки нового функционала клонироваться нужно от этой ветки.

Перед каждым продолжением работы__ необходимо делать
			__git pull__
поскольку вы работаете не одни и возможно кто-то другой уже что-то запушил(залил в гит) и репозиторий обновился.

Для работы над какой-то фичей вы должны __из ветки - dev сделать свою собственную ветку__ командой

			__git checkout -b <название ветки>__ Например: git checkout -b test-5-anton

 Назвать ветку можно следующим образом:

 			__task-1-olya__

 это будет означать что работа ведётся ответственным разработчиком Олей, над страницей 1.
 
 После того как закончили разработку, __протестируйте её__ и создавайте __Pool Request в ветку -dev__.

 __Внимание!__ На данном этапе предлагаю сделать демо на созвоне своего варианта работы.

 А __ПОСЛЕ__ созвона - __замержить в ветку - dev__.


 СПРАВОЧНО:

Как создать/перейти в ветку

- git status -> выясняем в какой ветке мы находимся
- git checkout -b task-77 -> __создаём__ и переходи в ветку task-77
- git checkot task-77 -> просто переходим в ветку, __ЕСЛИ ОНА УЖЕ СУЩЕСТВУЕТ__

 Как пушить в ветку:
 Работа в терминале:

 - git status ->  получаем инфо отекщем состоянии
 - git add . -> включаем в коммит все свои файлы
 - git commit -m "fix: terrible bug" -> создаем описание коммита
 - git push -> отправляем в гит


### Правила создания коммитов

#### Требования к именам коммитов

Названия коммитов должны быть согласно [гайдлайну](https://www.conventionalcommits.org/en/v1.0.0/)
Должен использоваться __present tense__ ("add feature" not "added feature")
Должен использоваться __imperative mood__ ("move cursor to..." not "moves cursor to...")

#### Примеры имен коммитов

__init: - используется для начала проекта/таска.__

Примеры:

init: start youtube-task
init: start mentor-dashboard task

__feat: - это реализованная новая функциональность из технического задания (добавил поддержку зумирования, добавил footer, добавил карточку продукта).__

Примеры:

feat: add basic page layout
feat: implement search box
feat: implement request to youtube API
feat: implement swipe for horizontal list
feat: add additional navigation button
feat: add banner
feat: add social links
feat: add physical security section
feat: add real social icons

__fix: - исправил ошибку в ранее реализованной функциональности.__

Примеры:

fix: implement correct loading data from youtube
fix: change layout for video items to fix bugs
fix: relayout header for firefox
fix: adjust social links for mobile

__refactor: - новой функциональности не добавлял / поведения не менял. Файлы в другие места положил, удалил, добавил. Изменил форматирование кода (
white-space, formatting, missing semi-colons, etc). Улучшил алгоритм, без изменения функциональности.__

Примеры:

refactor: change structure of the project
refactor: rename vars for better readability
refactor: apply eslint
refactor: apply prettier

__docs: - используется при работе с документацией/readme проекта.__

Примеры:

docs: update readme with additional information
docs: update description of run() method

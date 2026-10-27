'use strict';

const categories = [
  {id:'boards',name:'Листовые материалы',image:1,note:'Фанера, OSB, ДСП и ЦСП'},
  {id:'wood',name:'Пиломатериалы',image:2,note:'Доска, брус и вагонка'},
  {id:'insulation',name:'Теплоизоляция',image:3,note:'Для тепла и тишины'},
  {id:'drywall',name:'Гипсокартон и профили',image:4,note:'Для ровных стен'},
  {id:'roof',name:'Кровельные материалы',image:5,note:'Надёжно над головой'},
  {id:'metal',name:'Металлопрокат',image:6,note:'Прочность в деталях'},
  {id:'fasteners',name:'Крепёж и метизы',image:7,note:'Соединяем надёжно'},
  {id:'films',name:'Плёнки и гидроизоляция',image:8,note:'Защищаем от влаги'},
  {id:'other',name:'Сопутствующие материалы',image:9,note:'Полезные мелочи для стройки'}
];
const products = [
  {id:1,cat:'boards',name:'Плита OSB-3 Калевала 9 мм',spec:'2500 × 1250 × 9 мм',price:790,old:890,unit:'лист',image:'category-1',tag:'Выгодно',details:'Влагостойкая ориентированно-стружечная плита для обшивки, настилов и каркасных конструкций.',specs:[['Толщина','9 мм'],['Размер','2500 × 1250 мм'],['Тип','OSB-3']]},
  {id:2,cat:'boards',name:'Фанера берёзовая ФК 12 мм',spec:'1525 × 1525 мм · сорт IV/IV',price:1090,unit:'лист',image:'product-2',tag:'Популярное',details:'Листовая берёзовая фанера для внутренних работ, настилов и изготовления конструкций.',specs:[['Толщина','12 мм'],['Размер','1525 × 1525 мм'],['Марка','ФК']]},
  {id:3,cat:'wood',name:'Доска сухая строганая 20 × 140 мм',spec:'Длина 3 м · хвоя · сорт АВ',price:415,unit:'шт.',image:'category-2',tag:'Для ремонта',details:'Строганая доска для отделки и столярных работ. Пример товарной карточки пиломатериалов.',specs:[['Сечение','20 × 140 мм'],['Длина','3 м'],['Порода','Хвоя']]},
  {id:4,cat:'insulation',name:'Утеплитель ТЕХНОНИКОЛЬ XPS 50 мм',spec:'1180 × 580 мм · 8 плит',price:1890,old:2090,unit:'уп.',image:'category-3',tag:'Выгодно',details:'Экструзионный пенополистирол. Подходящий материал подбирается с учётом назначения конструкции и технических требований.',specs:[['Толщина','50 мм'],['Размер плиты','1180 × 580 мм'],['Упаковка','8 плит']]},
  {id:5,cat:'boards',name:'Цементно-стружечная плита ЦСП 12 мм',spec:'3200 × 1200 × 12 мм',price:1670,unit:'лист',image:'product-1',tag:'Для стройки',details:'Цементно-стружечная плита для строительных и отделочных конструкций.',specs:[['Толщина','12 мм'],['Размер','3200 × 1200 мм'],['Материал','ЦСП']]},
  {id:6,cat:'drywall',name:'Гипсокартон КНАУФ 12,5 мм',spec:'2500 × 1200 мм · стандартный',price:445,unit:'лист',image:'category-4',tag:'Популярное',details:'Гипсокартонный лист для стен и перегородок в помещениях с нормальным режимом влажности.',specs:[['Толщина','12,5 мм'],['Размер','2500 × 1200 мм'],['Назначение','Внутренние работы']]},
  {id:7,cat:'roof',name:'Профнастил С8 оцинкованный',spec:'1200 × 2000 мм · 0,4 мм',price:1190,unit:'лист',image:'category-5',tag:'Для стройки',details:'Профилированный стальной лист. Размеры и назначение этой позиции приведены для демонстрации каталога.',specs:[['Профиль','С8'],['Толщина','0,4 мм'],['Покрытие','Цинк']]},
  {id:8,cat:'fasteners',name:'Саморезы по дереву 3,5 × 45 мм',spec:'Чёрный фосфат · 200 шт.',price:249,old:290,unit:'уп.',image:'category-7',tag:'Выгодно',details:'Крепёж для соединения деревянных деталей. Подбирайте длину и тип крепежа под вашу задачу.',specs:[['Диаметр','3,5 мм'],['Длина','45 мм'],['Упаковка','200 шт.']]},
  {id:9,cat:'wood',name:'Брусок сухой строганый 40 × 50 мм',spec:'Длина 3 м · хвоя',price:215,unit:'шт.',image:'category-2',tag:'Для ремонта',details:'Сухой строганый брусок для обрешётки и вспомогательных конструкций.',specs:[['Сечение','40 × 50 мм'],['Длина','3 м'],['Обработка','Строганая']]},
  {id:10,cat:'films',name:'Пароизоляция Изоспан B',spec:'Рулон 70 м²',price:2390,unit:'рулон',image:'category-8',tag:'Популярное',details:'Пароизоляционный материал. Монтаж выполняется по инструкции производителя и проекту конструкции.',specs:[['Площадь','70 м²'],['Тип','Пароизоляция'],['Формат','Рулон']]},
  {id:11,cat:'metal',name:'Арматура рифлёная А500С 12 мм',spec:'Длина 6 м',price:590,unit:'шт.',image:'category-6',tag:'Для стройки',details:'Арматурный прокат для строительных конструкций. Применение определяется проектом.',specs:[['Диаметр','12 мм'],['Длина','6 м'],['Класс','А500С']]},
  {id:12,cat:'insulation',name:'Минеральная вата 100 мм',spec:'1200 × 600 мм · упаковка',price:1590,unit:'уп.',image:'category-3',tag:'Для ремонта',details:'Пример позиции теплоизоляционных плит. Характеристики и ассортимент заменяются на данные магазина.',specs:[['Толщина','100 мм'],['Размер','1200 × 600 мм'],['Форма','Плиты']]},
  {id:13,cat:'boards',name:'Плита OSB-3 12 мм',spec:'2500 × 1250 × 12 мм',price:1090,unit:'лист',image:'category-1',tag:'Для стройки',details:'Лист OSB-3 для каркасного строительства и отделочных работ.',specs:[['Толщина','12 мм'],['Размер','2500 × 1250 мм'],['Тип','OSB-3']]},
  {id:14,cat:'drywall',name:'Профиль направляющий 27 × 28 мм',spec:'Длина 3 м · оцинкованный',price:189,unit:'шт.',image:'category-4',tag:'Для ремонта',details:'Направляющий профиль для гипсокартонных конструкций. Совместимость проверяется по выбранной системе.',specs:[['Сечение','27 × 28 мм'],['Длина','3 м'],['Материал','Оцинкованная сталь']]},
  {id:15,cat:'other',name:'Лента малярная 48 мм',spec:'Длина 50 м',price:139,unit:'шт.',image:'category-9',tag:'Для ремонта',details:'Вспомогательный материал для защиты поверхностей во время отделочных работ.',specs:[['Ширина','48 мм'],['Длина','50 м'],['Тип','Малярная лента']]},
  {id:16,cat:'fasteners',name:'Саморезы кровельные 4,8 × 35 мм',spec:'С шайбой · 100 шт.',price:590,unit:'уп.',image:'category-7',tag:'Для стройки',details:'Пример крепежа с уплотнительной шайбой. Тип и шаг крепления выбирают по конструкции.',specs:[['Диаметр','4,8 мм'],['Длина','35 мм'],['Упаковка','100 шт.']]},
  {id:17,cat:'wood',name:'Вагонка хвоя 12,5 × 96 мм',spec:'Длина 3 м · сорт АВ',price:265,unit:'шт.',image:'category-2',tag:'Для ремонта',details:'Деревянная вагонка для внутренней отделки стен и потолков.',specs:[['Сечение','12,5 × 96 мм'],['Длина','3 м'],['Сорт','АВ']]},
  {id:18,cat:'boards',name:'Фанера берёзовая ФК 18 мм',spec:'1525 × 1525 мм · сорт IV/IV',price:1690,unit:'лист',image:'product-2',tag:'Для стройки',details:'Берёзовая фанера увеличенной толщины. Характеристики приведены как пример заполнения карточки.',specs:[['Толщина','18 мм'],['Размер','1525 × 1525 мм'],['Марка','ФК']]}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#${name}"/></svg>`;
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = value => new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
const productById = id => products.find(p => p.id === Number(id));
const readStore = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const rawFavorites=readStore('stroymarket:favorites',[]);
const favorites = new Set(Array.isArray(rawFavorites) ? rawFavorites.filter(id=>productById(id)).map(Number) : []);
const cart = {};
const rawCart=readStore('stroymarket:cart',{});
if(rawCart && typeof rawCart==='object' && !Array.isArray(rawCart)) for(const [id,quantity] of Object.entries(rawCart)) if(productById(id) && Number.isInteger(quantity) && quantity>0 && quantity<=9999) cart[id]=quantity;
const quantities={};
const state={category:'all',query:'',sort:'popular',sale:false,favorites:false,limit:8};
let toastTimer;
let previousFocus;

function persist(){ try { localStorage.setItem('stroymarket:cart',JSON.stringify(cart));localStorage.setItem('stroymarket:favorites',JSON.stringify([...favorites])); } catch { /* Browser storage is optional. */ } }
function toast(message){ $('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2500); }
function updateCounters(){
  const count=Object.values(cart).reduce((sum,n)=>sum+n,0);
  for(const el of [$('#cartCount'),$('#mobileCount')]){el.textContent=count;el.hidden=count===0;}
  $('#favoriteCount').textContent=favorites.size;$('#favoriteCount').hidden=favorites.size===0;
  $('#favoritesButton').setAttribute('aria-pressed',String(state.favorites));
  $('#mobileFavorites').setAttribute('aria-pressed',String(state.favorites));
}
function openDialog(id){
  previousFocus=document.activeElement;
  $$('dialog[open]').forEach(dialog=>dialog.close());
  $(id).showModal();document.body.classList.add('dialog-open');
}
function closeDialogs(){ $$('dialog[open]').forEach(d=>d.close());document.body.classList.remove('dialog-open'); }
function scrollToSection(id){ document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'}); }
function chooseCategory(category){
  closeDialogs();state.category=category;state.query='';state.favorites=false;state.sale=false;state.limit=8;$('#searchInput').value='';renderProducts();scrollToSection('catalog');
}
function renderCategories(){
  $('#categoryGrid').innerHTML=categories.map(c=>`<button class="category-card" data-category="${c.id}"><h3>${c.name}</h3><span class="cat-meta">${c.note}</span><img src="assets/category-${c.image}.webp" alt="" loading="lazy">${icon('arrow')}</button>`).join('');
  $('#catalogMenu').innerHTML=categories.map(c=>`<button data-category="${c.id}"><img src="assets/category-${c.image}.webp" alt="" loading="lazy"><span>${c.name}</span>${icon('chevron')}</button>`).join('');
}
function getFilteredProducts(){
  const query=state.query.toLocaleLowerCase('ru').replace(/ё/g,'е');
  let result=products.filter(p=>(state.category==='all'||p.cat===state.category)&&(!state.sale||p.old)&&(!state.favorites||favorites.has(p.id)));
  if(query) result=result.filter(p=>`${p.name} ${p.spec} ${categories.find(c=>c.id===p.cat)?.name} ${String(1000+p.id)}`.toLocaleLowerCase('ru').replace(/ё/g,'е').includes(query));
  if(state.sort==='price-asc') result.sort((a,b)=>a.price-b.price);
  if(state.sort==='price-desc') result.sort((a,b)=>b.price-a.price);
  if(state.sort==='name') result.sort((a,b)=>a.name.localeCompare(b.name,'ru'));
  return result;
}
function quantityControl(id, context='product'){
  const n=context==='cart'?cart[id]:(quantities[id]||1);
  return `<div class="quantity"><button data-qty="${id}" data-context="${context}" data-step="-1" aria-label="Уменьшить количество" ${n<=1?'disabled':''}>−</button><output aria-label="Количество">${n}</output><button data-qty="${id}" data-context="${context}" data-step="1" aria-label="Увеличить количество" ${n>=9999?'disabled':''}>+</button></div>`;
}
function productCard(p){return `<article class="product-card"><span class="product-tag ${p.old?'sale':''}">${p.tag}</span><button class="favorite ${favorites.has(p.id)?'active':''}" data-favorite="${p.id}" aria-label="${favorites.has(p.id)?'Удалить из избранного':'Добавить в избранное'}: ${p.name}" aria-pressed="${favorites.has(p.id)}">${icon('heart')}</button><button class="product-picture" data-product="${p.id}" aria-label="Открыть: ${p.name}"><img src="assets/${p.image}.webp" alt="${p.name} — иллюстрация категории" loading="lazy"></button><span class="product-code">АРТИКУЛ: СМ-${1000+p.id}</span><button class="product-title" data-product="${p.id}">${p.name}</button><p class="product-spec">${p.spec}</p><span class="stock example">Наличие: пример</span><div class="product-price">${money(p.price)} <small>/ ${p.unit}</small>${p.old?`<del>${money(p.old)}</del>`:''}</div><div class="product-controls">${quantityControl(p.id)}<button class="add-cart ${cart[p.id]?'added':''}" data-add="${p.id}">${icon(cart[p.id]?'check':'cart')}<span>${cart[p.id]?'Добавить ещё':'В корзину'}</span></button></div></article>`;}
function renderProducts(){
  const filtered=getFilteredProducts();
  const title=state.favorites?'Избранные материалы':state.sale?'Выгодные предложения':state.query?'Результаты поиска':state.category!=='all'?categories.find(c=>c.id===state.category).name:'Популярные материалы';
  $('#catalogTitle').textContent=title;
  const chips=[{id:'all',name:'Все материалы'},...categories.slice(0,3),categories[6]];
  $('#categoryChips').innerHTML=chips.map(c=>`<button class="chip ${state.category===c.id&&!state.sale&&!state.favorites?'active':''}" data-category="${c.id}">${c.name}</button>`).join('');
  $('#activeFilters').hidden=!(state.query||state.sale||state.favorites||state.category!=='all');
  $('#activeFilters').innerHTML=`${state.query?`По запросу «${escapeHtml(state.query)}» · `:''}Найдено: ${filtered.length}<button data-reset>Сбросить фильтры ×</button>`;
  $('#productsGrid').innerHTML=filtered.length?filtered.slice(0,state.limit).map(productCard).join(''):`<div class="empty-results">${icon(state.favorites?'heart':'search')}<h3>${state.favorites?'Здесь будут любимые материалы':'Материалы не найдены'}</h3><p>${state.favorites?'Нажмите на сердечко в карточке товара, чтобы сохранить его здесь.':'Попробуйте другой запрос или откройте весь каталог.'}</p><button class="button yellow" data-reset>Открыть весь каталог ${icon('arrow')}</button></div>`;
  $('#resultsCount').textContent=`Показано ${Math.min(state.limit,filtered.length)} из ${filtered.length} товаров`;
  $('#showMore').hidden=filtered.length<=state.limit;
  $('#sortSelect').value=state.sort;
  updateCounters();
}
function showProduct(id){
  const p=productById(id);if(!p)return;
  $('#productDetail').innerHTML=`<div class="product-detail"><div class="detail-image"><img src="assets/${p.image}.webp" alt="${p.name} — иллюстрация категории"></div><div class="detail-info"><span class="eyebrow muted">${categories.find(c=>c.id===p.cat).name}</span><h2>${p.name}</h2><span class="stock example">Пример товарной карточки</span><p>${p.details}</p><dl class="specs">${p.specs.map(([key,value])=>`<div><dt>${key}</dt><dd>${value}</dd></div>`).join('')}</dl><div class="product-price">${money(p.price)} <small>/ ${p.unit}</small></div><div class="product-controls">${quantityControl(p.id)}<button class="add-cart" data-add="${p.id}">${icon('cart')}В корзину</button></div><p class="detail-demo">Цена, наличие и изображения приведены для демонстрации. Это не предложение о продаже.</p></div></div>`;
  $('#productDialog').dataset.product=id;openDialog('#productDialog');
}
function renderCart(){
  const entries=Object.entries(cart).map(([id,n])=>({p:productById(id),n}));
  $('#cartHeadingCount').textContent=entries.length?`(${entries.length})`:'';
  $('#cartItems').innerHTML=entries.length?entries.map(({p,n})=>`<article class="cart-line"><img class="cart-line-image" src="assets/${p.image}.webp" alt=""><div class="cart-line-info"><h3>${p.name}</h3><button class="remove-item" data-remove="${p.id}" aria-label="Удалить ${p.name}">×</button><span class="product-spec">${money(p.price)} / ${p.unit}</span><div class="cart-line-bottom">${quantityControl(p.id,'cart')}<span class="cart-line-price">${money(p.price*n)}</span></div></div></article>`).join(''):`<div class="cart-empty">${icon('cart')}<h3>Начнём с первого материала?</h3><p>Добавьте нужные товары из каталога.<br>Ваш список сохранится в этом браузере.</p><button class="button yellow" data-category="all">Перейти в каталог ${icon('arrow')}</button></div>`;
  $('#cartSummary').hidden=entries.length===0;
  $('#cartSummary').innerHTML=entries.length?`<div class="summary-total"><span>Итого по примеру</span><strong>${money(entries.reduce((sum,{p,n})=>sum+p.price*n,0))}</strong></div><small>Без расчёта доставки. Все цены демонстрационные.<br>Сохранение списка не оформляет заказ.</small><button class="button yellow" id="downloadCart">${icon('file')}Сохранить список в файл</button><button class="clear-cart" id="clearCart">Очистить список</button>`:'';
}
function addToCart(id){
  if(!productById(id))return;
  cart[id]=Math.min(9999,(cart[id]||0)+(quantities[id]||1));persist();renderProducts();renderCart();toast('Материал добавлен в ваш список');
}
function showCart(){renderCart();openDialog('#cartDialog');}
function toggleFavorites(){state.favorites=!state.favorites;state.category='all';state.query='';state.sale=false;state.limit=8;$('#searchInput').value='';renderProducts();scrollToSection('catalog');}
const info={
  location:{title:'Санкт-Петербург и область',icon:'pin',text:'В шаблоне выбран Санкт-Петербург. При подготовке реального магазина здесь можно добавить города, адреса складов и зоны доставки.'},
  delivery:{title:'Доставка под вашу задачу',icon:'truck',text:'Здесь будут условия доставки: доступные районы, типы машин, сроки, стоимость и разгрузка. В демонстрационной версии доставка не рассчитывается и не заказывается.'},
  cut:{title:'Распил под размер',icon:'ruler',text:'В этом разделе можно разместить услуги распила фанеры, OSB и других листовых материалов, допустимые размеры и прайс. В текущем шаблоне услуга не заказывается.'},
  storage:{title:'Хранение и комплектация',icon:'house',text:'Место для условий ответственного хранения, комплектации и погрузки. Здесь можно добавить реальные фотографии склада и правила вашей компании.'},
  project:{title:'Начнём с вашего списка',icon:'file',text:'В готовом магазине здесь может быть форма загрузки заявки или сметы. Сейчас можно выбрать демонстрационные товары, собрать корзину и сохранить список на устройство.'},
  about:{title:'Шаблон вашего строймаркета',icon:'house',text:'Работают категории, поиск, сортировка, карточки, избранное и локальная корзина. Контент демонстрационный. Название, товары и условия можно заменить. Оплата, отправка заявок и интеграции с учётной системой не подключены.'},
  contacts:{title:'Здесь будут ваши контакты',icon:'pin',text:'Для вашего магазина сюда можно добавить телефон, электронную почту, адрес склада, график работы и карту. В шаблоне не используются контакты сторонней компании.'},
  privacy:{title:'Данные остаются в браузере',icon:'file',text:'Корзина и избранное сохраняются локально в вашем браузере. Этот шаблон не отправляет заявки, не запрашивает платёжные данные и не содержит рекламных счётчиков. Очистить список можно в корзине, а все локальные данные — в настройках браузера.'}
};
function showInfo(key){
  const content=info[key];if(!content)return;
  $('#infoContent').innerHTML=`<svg class="info-icon" aria-hidden="true"><use href="#${content.icon}"/></svg><span class="eyebrow muted" style="display:block;margin-top:20px">ДЕМОНСТРАЦИОННЫЙ ШАБЛОН</span><h2>${content.title}</h2><p>${content.text}</p><button class="button yellow" data-close>Понятно ${icon('check')}</button>`;openDialog('#infoDialog');
}
const slides=[
  {image:1,alt:'Фанера, OSB и листовые материалы',title:'Большие планы<br>начинаются<br>с <span>хороших материалов.</span>',text:'От первого листа фанеры до последнего самореза.<br>Всё для строительства и ремонта в одном месте.',tag:'Листовые материалы',note:'Для надёжной основы',background:'#f3f4f0'},
  {image:2,alt:'Доски, брус и деревянные материалы',title:'Дерево с характером.<br>Для дома<br>с <span>вашим характером.</span>',text:'Доска, вагонка и брус для ваших идей.<br>Выберите материал, с которым приятно работать.',tag:'Пиломатериалы',note:'Натурально. Тепло. Надолго.',background:'#f4efe5'},
  {image:3,alt:'Материалы для утепления дома',title:'Сохраняем тепло.<br>Строим<br><span>для комфорта.</span>',text:'Теплоизоляция для разных конструкций.<br>Сравните характеристики и соберите свой список.',tag:'Теплоизоляция',note:'Тепло начинается с выбора',background:'#edf1e5'}
];
function changeSlide(index){
  const slide=slides[index];if(!slide)return;
  $('.hero h1').innerHTML=slide.title;$('.hero-copy>p').innerHTML=slide.text;
  $('#heroImage').src=`assets/category-${slide.image}.webp`;$('#heroImage').alt=slide.alt;
  $('#heroTag').innerHTML=`${slide.tag}<small>${slide.note}</small>`;
  $('.hero').style.background=slide.background;
  $('.hero-bottom>span').innerHTML=`0${index+1} <i>/</i> 03`;
  $$('[data-slide]').forEach(button=>button.setAttribute('aria-current',String(Number(button.dataset.slide)===index)));
}
function downloadCart(){
  const lines=['СТРОЙМАРКЕТ — демонстрационный список материалов','Это не заказ. Цены условные.',''];
  let total=0;
  Object.entries(cart).forEach(([id,n])=>{const p=productById(id);total+=p.price*n;lines.push(`${p.name} | ${p.spec} | ${n} ${p.unit} | ${money(p.price*n)}`);});
  lines.push('',`Итого по демонстрационным ценам: ${money(total)}`,'Доставка не рассчитана.');
  const url=URL.createObjectURL(new Blob(['\ufeff'+lines.join('\r\n')],{type:'text/plain;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download='stroymarket-spisok-materialov.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);toast('Список материалов сохранён');
}
document.addEventListener('click',event=>{
  const button=event.target.closest('button');if(!button)return;
  if(button.hasAttribute('data-close')){button.closest('dialog')?.close();return;}
  if(button.hasAttribute('data-category')){chooseCategory(button.dataset.category);return;}
  if(button.hasAttribute('data-reset')){state.sort='popular';chooseCategory('all');return;}
  if(button.hasAttribute('data-info')){showInfo(button.dataset.info);return;}
  if(button.hasAttribute('data-scroll')){scrollToSection(button.dataset.scroll);return;}
  if(button.hasAttribute('data-slide')){changeSlide(Number(button.dataset.slide));return;}
  if(button.hasAttribute('data-product')){showProduct(Number(button.dataset.product));return;}
  if(button.hasAttribute('data-favorite')){
    const id=Number(button.dataset.favorite);if(favorites.has(id)){favorites.delete(id);toast('Материал удалён из избранного');}else{favorites.add(id);toast('Материал сохранён в избранном');}persist();renderProducts();return;
  }
  if(button.hasAttribute('data-add')){addToCart(Number(button.dataset.add));return;}
  if(button.hasAttribute('data-remove')){delete cart[button.dataset.remove];persist();renderCart();renderProducts();return;}
  if(button.hasAttribute('data-qty')){
    const id=Number(button.dataset.qty),step=Number(button.dataset.step);
    if(button.dataset.context==='cart'){cart[id]=Math.max(1,Math.min(9999,cart[id]+step));persist();renderCart();renderProducts();}
    else{
      quantities[id]=Math.max(1,Math.min(9999,(quantities[id]||1)+step));
      renderProducts();
      if($('#productDialog').open){const root=$('.detail-info .quantity');root.outerHTML=quantityControl(id);}
    }
    return;
  }
  if(button.id==='downloadCart')downloadCart();
  if(button.id==='clearCart'){for(const key of Object.keys(cart))delete cart[key];persist();renderCart();renderProducts();toast('Список очищен');}
});
$('#searchForm').addEventListener('submit',event=>{event.preventDefault();state.query=$('#searchInput').value.trim().slice(0,150);state.category='all';state.sale=false;state.favorites=false;state.limit=8;renderProducts();scrollToSection('catalog');});
$('#searchInput').addEventListener('search',()=>{if(!$('#searchInput').value){state.query='';renderProducts();}});
$('#sortSelect').addEventListener('change',event=>{state.sort=event.target.value;renderProducts();});
$('#showMore').addEventListener('click',()=>{state.limit+=8;renderProducts();});
$('#saleButton').addEventListener('click',()=>{state.sale=true;state.favorites=false;state.category='all';state.query='';state.limit=8;$('#searchInput').value='';renderProducts();scrollToSection('catalog');});
for(const id of ['catalogButton','mobileCatalog'])$('#'+id).addEventListener('click',()=>openDialog('#catalogDialog'));
for(const id of ['cartButton','mobileCart','deliveryCartButton'])$('#'+id).addEventListener('click',showCart);
for(const id of ['favoritesButton','mobileFavorites'])$('#'+id).addEventListener('click',toggleFavorites);
$$('dialog').forEach(dialog=>{
  dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]')){document.body.classList.remove('dialog-open');if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});}});
  dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
});
renderCategories();renderProducts();updateCounters();

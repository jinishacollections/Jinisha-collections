const products = [
  {id:1,title:"Women’s Stylish Kurti Set",price:699,img:"https://i.imgur.com/1Yc0XjK.jpg",affiliate:"https://amzn.to/example1"},
  {id:2,title:"Beauty Essentials Kit",price:499,img:"https://i.imgur.com/2Yc0XjK.jpg",affiliate:"https://meesho.com/example2"},
  {id:3,title:"Home Décor Wall Frame",price:799,img:"https://i.imgur.com/3Yc0XjK.jpg",affiliate:"https://amzn.to/example3"},
  {id:4,title:"Trendy Handbag",price:899,img:"https://i.imgur.com/4Yc0XjK.jpg",affiliate:"https://meesho.com/example4"},
  {id:5,title:"Smartwatch (Unisex)",price:1599,img:"https://i.imgur.com/5Yc0XjK.jpg",affiliate:"https://amzn.to/example5"}
];
const grid = document.getElementById('products');
products.forEach(p=>{
  const card = document.createElement('div'); card.className='card';
  const img = document.createElement('img'); img.src=p.img; card.appendChild(img);
  const h = document.createElement('h3'); h.textContent=p.title; card.appendChild(h);
  const price = document.createElement('div'); price.style.color='#ccc'; price.textContent='₹'+p.price; card.appendChild(price);
  const btnDiv = document.createElement('div'); btnDiv.style.display='flex'; btnDiv.style.gap='8px'; btnDiv.style.marginTop='8px';
  const buy = document.createElement('a'); buy.href=p.affiliate; buy.target='_blank'; buy.className='buy'; buy.textContent='Buy Now';
  const wa = document.createElement('a'); wa.href='https://wa.me/918595597807?text='+encodeURIComponent('Hi Jinisha Collections, I want to order: '+p.title+' (₹'+p.price+')'); wa.className='waBtn'; wa.textContent='Order on WhatsApp';
  btnDiv.appendChild(buy); btnDiv.appendChild(wa); card.appendChild(btnDiv);
  grid.appendChild(card);
});

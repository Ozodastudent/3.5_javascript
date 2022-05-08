var info = {};
alert("Assalomu aleykum siz bilan shaxsiyat testini amalga oshiramiz");
info.askReady = prompt("Boshlashga tayyormisiz?", "Yes");
info.fullName = prompt("To'liq ismingizni kiriting:", "Mark Smith");
info.question = prompt("Odatda qanday narsalar uchun jahlingiz chiqadi?");
info.desicion = prompt(
  "Ko'rgan narsangizga ishonib qaror qilasizmi yoki sizdagi malumotlargami?",
  "Korgan narsamga chunki faktlarni tahlil qiladigan darajada aqilli emasman"
);
info.lifeDesicion = prompt(
  "Hayotingizdagi eng muhim qaror qanday bo'ladi deb o'ylaysiz?",
  "Soat 9p.m da uxlash :-)"
);
info.personality = prompt(
  "O'zingizni introvert deb o'ylaysizmi yoki extrawort?"
);
info.request = prompt(
  "Testimiz orqali o'z fe'l atvoringiz haqida bilib oldingizmi?",
  "Savollarga tushunmadim"
);
info.advice = prompt("Xizmatimiz haqida fikringiz", "Super");
alert("Biz bilan bo'lganingiz uchun rahmat ))");
console.log(info);

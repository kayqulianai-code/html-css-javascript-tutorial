// ===== ۱. پیدا کردن عنصر و تغییر محتوایش =====
// document یعنی کل صفحه. getElementById عنصری را با id مشخص پیدا می‌کند.
const greeting = document.getElementById("greeting");

// ساعت فعلی را از کامپیوتر می‌گیریم
const hour = new Date().getHours();

// با if/else تصمیم می‌گیریم چه متنی نشان بدهیم
if (hour < 12) {
  greeting.textContent = "صبح بخیر! این متن را جاوااسکریپت براساس ساعت شما نوشته است.";
} else if (hour < 18) {
  greeting.textContent = "عصر بخیر! این متن را جاوااسکریپت براساس ساعت شما نوشته است.";
} else {
  greeting.textContent = "شب بخیر! این متن را جاوااسکریپت براساس ساعت شما نوشته است.";
}


// ===== ۲. شمارنده: متغیر + رویداد کلیک =====
let count = 0; // متغیر: جایی برای نگهداری یک مقدار که می‌تواند تغییر کند

const countText = document.getElementById("count");
const countBtn = document.getElementById("count-btn");
const resetBtn = document.getElementById("reset-btn");

// addEventListener یعنی: وقتی این اتفاق افتاد، این تابع را اجرا کن
countBtn.addEventListener("click", function () {
  count = count + 1;               // یکی اضافه کن
  countText.textContent = count;   // عدد جدید را در صفحه نشان بده
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countText.textContent = count;
});


// ===== ۳. حالت شب: تغییر کلاس CSS =====
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  // toggle: اگر کلاس هست حذفش کن، اگر نیست اضافه‌اش کن
  document.body.classList.toggle("dark-mode");
  // ظاهر را CSS تعیین می‌کند؛ جاوااسکریپت فقط تصمیم می‌گیرد کی اعمال شود
});


// ===== ۴. خواندن ورودی کاربر =====
const nameInput = document.getElementById("name-input");
const helloBtn = document.getElementById("hello-btn");
const helloResult = document.getElementById("hello-result");

helloBtn.addEventListener("click", function () {
  const name = nameInput.value.trim(); // مقدار نوشته‌شده، بدون فاصله‌های اضافی

  if (name === "") {
    helloResult.textContent = "لطفاً اول نامتان را بنویسید.";
  } else {
    helloResult.textContent = "سلام " + name + "! خوش آمدید.";
  }
});

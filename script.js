let count = 0;

// কাউন্টার ইনক্রিমেন্ট
document.getElementById("increment").addEventListener("click", function () {
    count++;
    document.getElementById("count").innerText = count;
});

// কাউন্টার রিসেট
document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    document.getElementById("count").innerText = count;
    document.getElementById("zikr").value = "";
});

// ডার্ক / লাইট মোড টগল
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

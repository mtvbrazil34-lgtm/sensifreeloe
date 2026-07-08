// ===== VIP PASSWORD =====
const VIP_PASSWORD = "1motive22";

function checkPassword() {
    const input = document.getElementById("vipPassword").value.trim();

    if (input === VIP_PASSWORD) {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("generator").style.display = "block";
    } else {
        alert("❌ Incorrect password.\n\nContact 1motive651 via Discord or @1._motive on TikTok / @motive2calm on Instagram for access.");
    }
}

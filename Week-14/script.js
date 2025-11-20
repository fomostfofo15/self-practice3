function calculate() {
    const input = document.getElementById("birthday").value;
    const error = document.getElementById("error");
    const result = document.getElementById("result");

    error.textContent = "";
    result.textContent = "";

    if(!input){
        error.textContent = "⚠ กรุณาเลือกวันเกิดก่อน";
        return;
    }

    const birthday = new Date(input);
    const today = new Date();

    if (birthday > today) {
        error.textContent = "⚠ วันเกิดต้องไม่เป็นอนาคต";
        return;
    }

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (months < 0){
        years --;
        months += 12;
    }
// ถ้าวันติดลบ = ยังไม่ถึงวันเกิดของเดือนนี้
    if (days < 0){
        months--;

// หา last day ของเดือนก่อนหน้า
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
}
    result.textContent = `อายุ: ${years} ปี ${months} เดือน ${days} วัน`;
}   
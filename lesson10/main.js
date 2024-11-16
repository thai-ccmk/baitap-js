// Đồng hồ và thời gian bắt đầu
let timers = [
    { element: document.getElementById('timer1'), time: 138, interval: null, running: false, paused: false },  // 02:18
    { element: document.getElementById('timer2'), time: 136, interval: null, running: false, paused: false },  // 02:16
    { element: document.getElementById('timer3'), time: 137, interval: null, running: false, paused: false },  // 02:17
    { element: document.getElementById('timer4'), time: 140, interval: null, running: false, paused: false },  // 02:20
    { element: document.getElementById('timer5'), time: 143, interval: null, running: false, paused: false }   // 02:23
];

// Hàm chuyển đổi giây thành định dạng mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Cập nhật thời gian cho mỗi đồng hồ
function updateTimer(timer) {
    timer.element.textContent = formatTime(timer.time);
}

// Hàm chạy đồng hồ
function startTimer(timer) {
    if (timer.running || timer.paused) return;
    timer.running = true;
    timer.interval = setInterval(() => {
        timer.time++;
        updateTimer(timer);
    }, 1000);
}

// Hàm dừng đồng hồ
function stopTimer(timer) {
    clearInterval(timer.interval);
    timer.running = false;
    timer.time = 0;
    updateTimer(timer);
}

// Hàm tạm dừng đồng hồ
function pauseTimer(timer) {
    clearInterval(timer.interval);
    timer.running = false;
    timer.paused = true;
}

// Hàm tiếp tục chạy đồng hồ
function resumeTimer(timer) {
    if (timer.paused) {
        timer.running = true;
        timer.paused = false;
        startTimer(timer);
    }
}

// Hàm stop tất cả các đồng hồ
function stopAllTimers() {
    timers.forEach(timer => stopTimer(timer));
}

// Hàm start tất cả các đồng hồ
function startAllTimers() {
    timers.forEach(timer => startTimer(timer));
}

// Gán sự kiện cho các nút
document.getElementById('start1').onclick = () => startTimer(timers[0]);
document.getElementById('stop1').onclick = () => stopTimer(timers[0]);
document.getElementById('pause1').onclick = () => pauseTimer(timers[0]);

document.getElementById('start2').onclick = () => startTimer(timers[1]);
document.getElementById('stop2').onclick = () => stopTimer(timers[1]);
document.getElementById('pause2').onclick = () => pauseTimer(timers[1]);

document.getElementById('start3').onclick = () => startTimer(timers[2]);
document.getElementById('stop3').onclick = () => stopTimer(timers[2]);
document.getElementById('pause3').onclick = () => pauseTimer(timers[2]);

document.getElementById('start4').onclick = () => startTimer(timers[3]);
document.getElementById('stop4').onclick = () => stopTimer(timers[3]);
document.getElementById('pause4').onclick = () => pauseTimer(timers[3]);

document.getElementById('start5').onclick = () => startTimer(timers[4]);
document.getElementById('stop5').onclick = () => stopTimer(timers[4]);
document.getElementById('pause5').onclick = () => pauseTimer(timers[4]);

// Các nút Start All và Stop All
document.getElementById('startAll').onclick = startAllTimers;
document.getElementById('stopAll').onclick = stopAllTimers;
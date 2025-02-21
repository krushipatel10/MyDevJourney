</style>
</head>
<body>
    <div>
        <div class="timer" id="timer">00:00:00</div>
        <div>
            <button onclick="startTimer()">Start</button>
            <button onclick="stopTimer()">Stop</button>
            <button onclick="resetTimer()">Reset</button>
        </div>
    </div>

    <script>
        let timer;
        let seconds = 0;

        function startTimer() {
            if (!timer) {
                timer = setInterval(() => {
                    seconds++;
                    document.getElementById('timer').textContent = formatTime(seconds);
                }, 1000);
            }
        }

        function stopTimer() {
            clearInterval(timer);
            timer = null;
        }

        function resetTimer() {
            stopTimer();
            seconds = 0;
            document.getElementById('timer').textContent = '00:00:00';
        }

        function formatTime(s) {
            const hrs = String(Math.floor(s / 3600)).padStart(2, '0');
            const mins = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
            const secs = String(s % 60).padStart(2, '0');
            return `${hrs}:${mins}:${secs}`;
        }
    </script>
</body>

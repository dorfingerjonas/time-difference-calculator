window.addEventListener('load', () => {
    const calculateDuration = document.querySelector('#calculateDuration');

    calculateDuration.addEventListener('click', () => {
        let startDate = document.querySelector('#startdateInput').value;
        let endDate = document.querySelector('#enddateInput').value;

        console.log(startDate);
        console.log(endDate);
    
        if (startDate === '' || endDate === '') {
            if (startDate === '') document.querySelector('#error').textContent = 'Ungültiges Anfangsdatum!';
            else if (endDate === '') document.querySelector('#error').textContent = 'Ungültiges Enddatum!';
            
            document.querySelector('#timeScreen').style.opacity = 0;
        } else {
            startDate = new Date(startDate).getTime();
            endDate = new Date(endDate).getTime();

            document.querySelector('#timeScreen').style.opacity = 1;
            document.querySelector('#error').innerHTML = '&nbsp;';

            let difference = endDate - startDate;
            let days = Math.floor(difference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
            let percent = ((days + (hours / 24) + (minutes / 60 / 24)) * 100) / 365;
            percent = percent.toFixed(2);
            
            document.getElementById('percent').textContent = `${percent}% of the year ${new Date().getFullYear()}`;

            let restDays = days + (hours / 24) + (minutes / 60 / 24);
            restDays = parseInt(restDays);

            if (restDays === 1) document.getElementById('days').textContent = `${restDays} Tag`;
            else document.getElementById('days').textContent = `${restDays} Tage`;

            let restWeeks = parseInt(restDays / 7);
            let restDaysWithoutWeeks = restDays - (restWeeks * 7);

            if (restWeeks === 1) document.getElementById('weeks').textContent = `${restWeeks} Woche und `;
            else document.getElementById('weeks').textContent = `${restWeeks} Wochen und `;

            if (restDaysWithoutWeeks === 1) document.getElementById('weeks').textContent += `${restDaysWithoutWeeks} Tag`;
            else document.getElementById('weeks').textContent += `${restDaysWithoutWeeks} Tage`;
            
            let restHours = (days * 24) + hours + (minutes / 60);
            restHours = parseInt(restHours);

            if (restHours === 1) document.getElementById('hours').textContent = `${restHours} Stunde`;
            else document.getElementById('hours').textContent = `${restHours} Stunden`;

            let restMinutes = (days * 24 * 60) + (hours * 60) + minutes;
            restMinutes = parseInt(restMinutes);

            if (restMinutes === 1) document.getElementById('minutes').textContent = `${restMinutes} Minute`;
            else document.getElementById('minutes').textContent = `${restMinutes} Minuten`;

            let restSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60);
            restSeconds = parseInt(restSeconds);

            if (restSeconds === 1) document.getElementById('seconds').textContent = `${restSeconds} Sekunde`;
            else document.getElementById('seconds').textContent = `${restSeconds} Sekunden`;
        }
    });
});
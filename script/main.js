$.each(data, function (index, animal) {

    let divBox = $(`<div class="card-wrapper">
        <div class="card-content">
            <div class="card-number">${animal.group}${animal.group_number}</div>
            <div class="card-title">${animal.name_german}</div>
            <img src="images/Illustartionen/${animal.image_filename}" alt="${animal.name_german}" class="card-image" />
            <div class="card-trivia">
                ${animal.trivia_german}  
            </div>

            <div class="card-stats-container">
                <div class="card-stats">
                    <div class="stat-icon"><img src="images/Icons2/balance.png" alt="weight" /></div>
                    <div class="stat-value">${animal.max_weight} kg</div>
                </div>

                <div class="card-stats">
                    <div class="stat-icon"><img src="images/Icons2/ruler.png" alt="length" /></div>
                    <div class="stat-value">${animal.max_length} cm</div>
                </div>

                <div class="card-stats">
                    <div class="stat-icon"><img src="images/Icons2/hourglass.png" alt="maximum age" /></div>
                    <div class="stat-value">${animal.max_age} Jahre</div>
                </div>

                <div class="card-stats">
                    <div class="stat-icon"><img src="images/Icons2/clock.png" alt="max speed" /></div>
                    <div class="stat-value">${animal.top_speed} kmh</div>
                </div>

                <div class="card-stats">
                    <div class="stat-icon"><img src="images/Icons2/milk-bottle.png" alt="offspring count per cycle" /></div>
                    <div class="stat-value">${animal.litter_size} Kinder</div>
                </div>

                <div class="card-stats">
                    <div class="stat-icon"><img src="images/Icons2/skull.png" alt="casualties per year" /></div>
                    <div class="stat-value">${animal.deaths} Tote</div>
                </div>
            </div>
        </div>
    </div>`);
    
    $(divBox).find('.card-number').addClass(`group-${animal.group}`);
    $(divBox).find('.card-content').addClass(`group-${animal.group}-background`);
        $('#wrapper').append(divBox);
        
});

//Navigationsleiste Farben
$(document).ready(function() {
    const groupColors = {
        'A': 'rgb(250, 199, 57)',
        'B': 'rgb(124, 121, 121)',
        'C': 'rgb(104, 205, 136)',
        'D': 'rgb(114, 184, 204)',
        'E': 'rgb(135, 166, 225)',
        'F': 'rgb(231, 153, 94)',
        'G': 'rgb(244, 117, 75)',
        'H': 'rgb(235, 125, 232)'
    };

    $('nav ul li').on('click', function() {
        $('nav ul li').removeClass('selected').css({
            'background-color': '',
            'color': ''
        });
        
        $(this).addClass('selected');

        if ($(this).text() === 'Ganzes Set') {
            $(this).css({
                'background-color': 'transparent',
                'color': 'rgb(7, 62, 40)'
            });
        } else {
            const group = $(this).data('group');
            if (group && groupColors[group]) {
                $(this).css({
                    'background-color': groupColors[group],
                    'color': 'white'
                });
            }
        }
//Karten ein und ausblenden
        const selectedGroup = $(this).data('group');
        
        $('.card-wrapper').hide();

        if (selectedGroup === 'all') {
            $('.card-wrapper').show();
            $('main').css({
                "display": "flex",
                "justify-content": "center",
                "flex-wrap": "wrap",
                "align-items": "center"
            });
        } else {
            $(`.group-${selectedGroup}`).closest('.card-wrapper').show();
            
            $('main').css({
                "display": "flex",
                "justify-content": "center",
                "flex-wrap": "wrap",
                "align-items": "center"
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    burgerMenu.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
});

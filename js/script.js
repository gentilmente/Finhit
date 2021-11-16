document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        document.getElementById('interactive');
        $('#load').addClass('hidden');
        $('.main-content').removeClass('hidden');
    }
};



if ($(".owl-carousel").length) {
    $('.cards-carousel').owlCarousel({
        loop: false,
        margin: 10,
        items: 1,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            }
        }
    });

    $('.bills-carousel').owlCarousel({
        loop: false,
        margin: 8,
        items: 2,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            }
        }
    });

    $('.send-money-carousel').owlCarousel({
        loop: false,
        margin: 8,
        items: 5,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4
            },
            360: {
                items: 5
            },
            450: {
                items: 6
            },
            550: {
                items: 7
            }
        }
    });

    $('.money-loan-carousel').owlCarousel({
        loop: false,
        margin: 8,
        items: 2,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 3
            }
        }
    });

    $('.latest-news-carousel').owlCarousel({
        loop: false,
        margin: 7,
        items: 2,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            520: {
                items: 3
            }
        }
    });
};

if ($("#popChart").length) {
    var moneyChart = document.getElementById("popChart");
    var dataIncome = {
        label: "Income",
        data: [22, 37, 24, 2, 33],
        fill: false,
        borderColor: '#40c4ff'
    };
    var dataExpenses = {
        label: "Expenses",
        data: [8, 61, 87, 57, 70],
        fill: false,
        borderColor: '#ff5252'
    };
    var dataBills = {
        label: "Bills",
        data: [90, 80, 42, 44, 19],
        fill: false,
        borderColor: '#4db6ac'
    };
    var dataSaving = {
        label: "Saving",
        data: [22, 68, 61, 79, 79],
        fill: false,
        borderColor: '#002e45'
    };

    var allCharts = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [dataIncome, dataExpenses, dataBills, dataSaving]
    };

    var chartOptions = {
        legend: {
            display: false
        }
    };
    var lineChart = new Chart(moneyChart, {
        type: 'line',
        data: allCharts,
        options: chartOptions
    });
};

if ($("#incomeChart").length) {
    var moneyChartIncome = document.getElementById("incomeChart");
    var dataIncome = {
        label: "Income",
        data: [22, 37, 24, 2, 33],
        fill: false,
        borderColor: '#40c4ff'
    };

    var incomeCharts = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [dataIncome]
    };

    var chartOptions = {
        legend: {
            display: false
        }
    };
    var lineChart = new Chart(moneyChartIncome, {
        type: 'line',
        data: incomeCharts,
        options: chartOptions
    });
};

if ($("#expenseChart").length) {
    var moneyChartExpense = document.getElementById("expenseChart");

    var dataExpenses = {
        label: "Expenses",
        data: [8, 61, 87, 57, 70],
        fill: false,
        borderColor: '#ff5252'
    };

    var expenseCharts = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [dataExpenses]
    };

    var chartOptions = {
        legend: {
            display: false
        }
    };
    var lineChart = new Chart(moneyChartExpense, {
        type: 'line',
        data: expenseCharts,
        options: chartOptions
    });
};

if ($("#billsChart").length) {
    var moneyChartBills = document.getElementById("billsChart");

    var dataBills = {
        label: "Bills",
        data: [90, 80, 42, 44, 19],
        fill: false,
        borderColor: '#4db6ac'
    };

    var billsCharts = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [dataBills]
    };

    var chartOptions = {
        legend: {
            display: false
        }
    };
    var lineChart = new Chart(moneyChartBills, {
        type: 'line',
        data: billsCharts,
        options: chartOptions
    });
};

if ($("#savingsChart").length) {
    var moneyChartSavings = document.getElementById("savingsChart");

    var dataSaving = {
        label: "Saving",
        data: [22, 68, 61, 79, 79],
        fill: false,
        borderColor: '#002e45'
    };

    var savingsCharts = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [dataSaving]
    };

    var chartOptions = {
        legend: {
            display: false
        }
    };
    var lineChart = new Chart(moneyChartSavings, {
        type: 'line',
        data: savingsCharts,
        options: chartOptions
    });
};



$(document).ready(function() {
    $('#accordionFlush1').on('shown.bs.collapse', function(){
        var header = $(this).find('.accordion-content.show').prev('.accordion-header');
        let chosenColorClassName=$(header).data('color-class-name');
        $(header).addClass(chosenColorClassName);
    })
    $('#accordionFlush1').on('hide.bs.collapse', function(e){
        var header = $(this).find('.show').prev('.accordion-header');
        let chosenColorClassName=$(header).data('color-class-name');
        $(this).find('.colored-accordion .accordion-header').removeClass(chosenColorClassName);
    })
    $('#accordionFlush2').on('shown.bs.collapse', function(){
        var header = $(this).find('.accordion-content.show').prev('.accordion-header');
        let chosenColorClassName=$(header).data('color-class-name');
        $(header).addClass(chosenColorClassName);
    })
    $('#accordionFlush2').on('hide.bs.collapse', function(e){
        var header = $(this).find('.show').prev('.accordion-header');
        let chosenColorClassName=$(header).data('color-class-name');
        $(this).find('.colored-accordion .accordion-header').removeClass(chosenColorClassName);
    })

    $('#accordionFlushExample4').on('shown.bs.collapse', function(){
        var header = $(this).find('.accordion-content.show').prev('.accordion-header');
        let chosenColorClassName=$(header).data('color-class-name');
        $(header).addClass(chosenColorClassName);
    })
    $('#accordionFlushExample4').on('hide.bs.collapse', function(e){
        var header = $(this).find('.show').prev('.accordion-header');
        let chosenColorClassName=$(header).data('color-class-name');
        $(this).find('.colored-accordion .accordion-header').removeClass(chosenColorClassName);
    })

    $('#accordionFlushExample5').on('shown.bs.collapse', function(){
        var header = $(this).find('.accordion-content.show').prev('.accordion-header');
        let chosenColorClassName=$(header).data('color-class-name');
        $(header).addClass(chosenColorClassName);
    })
    $('#accordionFlushExample5').on('hide.bs.collapse', function(e){
        var header = $(this).find('.show').prev('.accordion-header');
        let chosenColorClassName=$(header).data('color-class-name');
        $(this).find('.colored-accordion .accordion-header').removeClass(chosenColorClassName);
    })
    $('#closeButton').on('click', function(e) {
        $('#previewBox').remove();
    });
    $('#closeButton1').on('click', function(e) {
        $('#previewBox1').remove();
    });
    $('#closeButton2').on('click', function(e) {
        $('#previewBox2').remove();
    });
    $('#closeButton3').on('click', function(e) {
        $('#previewBox3').remove();
    });
    $('#closeButton4').on('click', function(e) {
        $('#previewBox4').remove();
    });
    $('#closeButton5').on('click', function(e) {
        $('#previewBox5').remove();
    });
    $('#closeButton6').on('click', function(e) {
        $('#previewBox6').remove();
    });
    $('#closeButton7').on('click', function(e) {
        $('#previewBox7').remove();
    });
    $('#closeButton8').on('click', function(e) {
        $('#previewBox8').remove();
    });
    $('#closeButton9').on('click', function(e) {
        $('#previewBox9').remove();
    });
    $('#closeButton10').on('click', function(e) {
        $('#previewBox10').remove();
    });
    $('#closeButton11').on('click', function(e) {
        $('#previewBox11').remove();
    });
    $('#closeButton12').on('click', function(e) {
        $('#previewBox12').remove();
    });
    $('#closeButton13').on('click', function(e) {
        $('#previewBox13').remove();
    });
    $('#closeButton14').on('click', function(e) {
        $('#previewBox14').remove();
    });
    $('#closeButton15').on('click', function(e) {
        $('#previewBox15').remove();
    });
    $('#closeButton16').on('click', function(e) {
        $('#previewBox16').remove();
    });
    $('#closeButton17').on('click', function(e) {
        $('#previewBox17').remove();
    });
    $('#closeButton18').on('click', function(e) {
        $('#previewBox18').remove();
    });
});

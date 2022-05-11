console.log('js')

$(document).ready(onReady);

function onReady() {
    console.log( 'so ready!' );

    let titleHeader = $('h1');
    // let titleHeader = <h1>..<h1>
    console.log('titleHeader', titleHeader );
    //console.log('titleHeader', <h1>..</h1>)


    let allListItems = $('li');
    console.log('li elements', allListItems );

    let justThatOneListItem = $('#mrs-li-element');
    justThatOneListItem
    .text('DOM Manipulation')
    .css('transform', 'rotate(-45deg)')

    // <li>...</li>.text('DOM Manipulation)  CHANGE THIS TO DOM MANIPULATION


    $('.first-and-last').css('color', 'blue');

    $('ul').append('<li>forms<button>ALIEN</button>?</li>');

    $('#the-button').on('click', WhenIClickTheButton)
    //                     undefined if function has () at end

    function WhenIClickTheButton() {
        console.log('Someone clicked me!!');
        $('li').last().remove();

        let titleText = $('h1').text();
        console.log('title text is', titleText);
       // let louderTitleText = titleText.toUpperCase();
        $('h1').text(titleText.toUpperCase());
    }



}// end of onReady


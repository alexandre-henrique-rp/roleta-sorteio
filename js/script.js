function shuffle( array ) {
    var currentIndex=array.length,
        randomIndex;

    while( 0!==currentIndex ) {
        randomIndex=Math.floor( Math.random()*currentIndex );
        currentIndex--;
        [ array[ currentIndex ], array[ randomIndex ] ]=[
            array[ currentIndex ],
            array[ currentIndex ],
        ];
    }
    return array;
}

function spin() {
    wheel.play();
    const box=document.getElementById( "box" );
    const element=document.getElementById( "mainbox" );
    let SelectedItem="";

    let OV=shuffle( [ 1890, 2250, 2610 ] );
    let copo=shuffle( [ 1850, 2210, 2570 ] );
    let OV2=shuffle( [ 1770, 2130, 2490 ] );
    let ecoB=shuffle( [ 1810, 2170, 2530 ] );
    let regua=shuffle( [ 1750, 2110, 2470 ] );
    let perdeu=shuffle( [ 1630, 1990, 2350 ] );
    let des10=shuffle( [ 1570, 1930, 2290 ] );


    let results=shuffle( [
        OV[ 0 ],
        copo[ 0 ],
        OV2[ 0 ],
        ecoB[ 0 ],
        regua[ 0 ],
        perdeu[ 0 ],
        des10[ 0 ],

    ] );

    if( OV.includes( results[ 0 ] ) ) SelectedItem="PASSOU A VEZ";
    if( copo.includes( results[ 0 ] ) ) SelectedItem="COPO REDE BRASIL RP";
    if( OV2.includes( results[ 0 ] ) ) SelectedItem="PASSOU A VEZ";
    if( ecoB.includes( results[ 0 ] ) ) SelectedItem="ECO BAG REDE BRASIL RP";
    if( regua.includes( results[ 0 ] ) ) SelectedItem="REGUA REDE BRASIL RP";
    if( perdeu.includes( results[ 0 ] ) ) SelectedItem="QUE PENA PERDEU A VEZ";
    if( des10.includes( results[ 0 ] ) ) SelectedItem="10% DE DESCONTO";


    box.style.setProperty( "transition", "all ease 5s" );
    box.style.transform="rotate("+results[ 0 ]+"deg)";
    element.classList.remove( "animate" );

    console.log( results[ 0 ] )
    setTimeout( () => {
        element.classList.add( "animate" );
    }, 5000 );

    if( SelectedItem!=="QUE PENA PERDEU A VEZ" ) {
        if( SelectedItem==="PASSOU A VEZ" ) {
            setTimeout( () => {
                Swal.fire( {
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'gire novamente',
                } )
            }, 5500 );

        } else {
            setTimeout( () => {
                applause.play();
                Swal.fire( {
                    title: 'Heee',
                    html: 'Você ganhou '+SelectedItem+' | '+'<b>Parabéns!!</b>',
                    imageUrl: './assets/17924.jpg',
                    imageWidth: 360,
                    imageHeight: 240,
                    imageAlt: 'Custom image',
                } )
            }, 5500 );
        }
    }
    
    if( SelectedItem==="QUE PENA PERDEU A VEZ" ) {
        setTimeout( () => {
            boo2.play()
            Swal.fire( {
                icon: 'error',
                title: 'QUE PENA',
                text: 'infelismente não foi dessa vez',
            } )
        }, 5500 );

    }

    setTimeout( () => {
    }, 5500 );

    setTimeout( () => {
        box.style.setProperty( "transition", "initial" );
        box.style.transform="rotate(90deg)";
    }, 6000 )
}

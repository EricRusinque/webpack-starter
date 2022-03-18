import '../css/components.css'
import webpackLogo from '../assets/img/webpack-logo.png'

export const greeting = ( name ) => {
     
    console.log('Creating tag');

    const h1 = document.createElement('h1');
    h1.innerText = `Hello, ${ name }`;

    document.body.append( h1 );


    //IMG

    const img = document.createElement('img');
    img.src = webpackLogo;
    document.body.append( img )
}


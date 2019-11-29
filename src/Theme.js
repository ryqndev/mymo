let setp = ( attr, val ) => { document.documentElement.style.setProperty(attr, val) }

const Theme = ( dark ) => {
    if(dark){
        setp('--dark-mode', '1');
        setp('--text-color-1', '#FFFFFF'); // color on dark background
        setp('--text-color-2', '#63539b'); //color on lighter background
        setp('--text-color-3', '#FFFFFF'); //color on lighter background
        setp('--text-color-4', '#FFFFFF'); //color on lighter background
        setp('--text-color-5', '#5726ff'); //color on lighter background
        setp('--logo', `url('/assets/calendar-dark.svg')`);
        setp('--dark-accent', '#200F3D');
        setp('--light-accent', '#FF78F2');
        setp('--bg-1', '#FFFFFF');
        setp('--background-color', '#5ac5b3e6');
        setp('--background-highlight', '#5ac5b3e6');
        setp('--darker-background-color', '#63539bcc');
        setp('--background-gradient', 'linear-gradient(230deg, #33685f, #413766)');
    }else{
        setp('--dark-mode', '0');
        setp('--text-color-1', '#FFFFFF'); // color on dark background
        setp('--text-color-2', '#FF6363'); // color on lighter background
        setp('--text-color-3', '#FF7B7B'); // color on lighter background
        setp('--text-color-4', '#FFF8DF'); // color on lighter background
        setp('--text-color-5', '#FF6363'); //color on lighter background
        setp('--logo', `url('/assets/calendar-light.svg')`);
        setp('--dark-accent', '#FF7B7B');
        setp('--light-accent', '#FF00FF');
        setp('--bg-1', '#FFFFFF');
        setp('--background-color', '#FFF8DFe6');
        setp('--darker-background-color', '#FFABAB');
        setp('--background-gradient', 'linear-gradient(230deg, #FFF8DF, #FF7B7B)');
    }
}

export default Theme;
const Theme = ( dark ) => {
    let root = document.documentElement.style;
    if(dark){
        root.setProperty('--dark-mode', '1');
        root.setProperty('--text-color-1', '#FFFFFF'); // color on dark background
        root.setProperty('--text-color-2', '#63539b'); //color on lighter background
        root.setProperty('--logo', `url('/assets/calendar-dark.svg')`);
        root.setProperty('--highlight', '#200F3D');
        root.setProperty('--background-color', '#5ac5b3e6');
        root.setProperty('--background-highlight', '#5ac5b3e6');
        root.setProperty('--darker-background-color', '#63539bcc');
        root.setProperty('--background-gradient', 'linear-gradient(230deg, #33685f, #413766)');
    }else{
        root.setProperty('--dark-mode', '0');
        root.setProperty('--text-color-1', '#FFFFFF'); // color on dark background
        root.setProperty('--text-color-2', '#FF7B7B'); // color on lighter background
        root.setProperty('--logo', `url('/assets/calendar-light.svg')`);
        root.setProperty('--highlight', '#FF7B7B');
        root.setProperty('--background-color', '#FFF8DFe6');
        root.setProperty('--darker-background-color', '#FFABAB');
        root.setProperty('--background-gradient', 'linear-gradient(230deg, #FFF8DF, #FF7B7B)');
    }
}
export default Theme;
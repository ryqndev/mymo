const Theme = ( dark ) => {
    let root = document.documentElement.style;
    if(dark){
        root.setProperty('--text-color-1', '#FFFFFF');
        root.setProperty('--text-color-2', '#200F3D;');
        root.setProperty('--logo', `url('/assets/calendar-dark.svg')`);
        root.setProperty('--highlight', '#151515');
        root.setProperty('--background-color', '#5ac5b3e6');
        root.setProperty('--background-highlight', '#5ac5b3e6');
        root.setProperty('--darker-background-color', '#63539bcc');
        root.setProperty('--background-gradient', 'linear-gradient(230deg, #33685f, #413766)');
    }else{
        root.setProperty('--text-color-1', '#151515');
        root.setProperty('--text-color-2', '#FFFFFF');
        root.setProperty('--logo', `url('/assets/calendar-light.svg')`);
        root.setProperty('--highlight', '#FF7B7B');
        root.setProperty('--background-color', '#FFF8DFe6');
        root.setProperty('--darker-background-color', '#ffabab');
        root.setProperty('--background-gradient', 'linear-gradient(230deg, #FFF8DF, #FF7B7B)');
    }
}
export default Theme;
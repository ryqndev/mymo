let setp = ( attr, val ) => { document.documentElement.style.setProperty(attr, val) }

const Theme = ( dark ) => {
    if(dark){
        setp('--dark-mode', '1'); // on
        setp('--text-color-1', '#FFFFFF'); // white
        setp('--text-color-2', '#63539b'); // medium purple
        setp('--text-color-3', '#FFFFFF'); // white
        setp('--text-color-4', '#FFFFFF'); // white
        setp('--text-color-5', '#5726ff'); // accent purple
        setp('--logo', `url('/assets/calendar-dark.svg')`);
        setp('--dark-accent', '#200F3D');  // dark purple
        setp('--light-accent', '#FF78F2'); // light pink
        setp('--bg-1', '#FFFFFF');         // white
        setp('--background-color', '#5ac5b3e6'); //semi transparent purple
        setp('--background-highlight', '#5ac5b3e6');
        setp('--darker-background-color', '#63539bcc');
        setp('--background-gradient', 'linear-gradient(230deg, #33685f, #413766)');
        document.getElementById('favicon').href = '/assets/calendar-dark.svg'; // change favicon based on theme
    }else{
        setp('--dark-mode', '0'); // off
        setp('--text-color-1', '#FFFFFF'); // white
        setp('--text-color-2', '#FF6363'); // salmon
        setp('--text-color-3', '#FF7B7B'); // light salmon
        setp('--text-color-4', '#FFF8DF'); // off white
        setp('--text-color-5', '#FF6363'); // accent salmon
        setp('--logo', `url('/assets/calendar-light.svg')`);
        setp('--dark-accent', '#FF7B7B');  // light salmon
        setp('--light-accent', '#FF00FF'); // hot pink
        setp('--bg-1', '#FFFFFF');
        setp('--background-color', '#FFF8DFe6');
        setp('--darker-background-color', '#E3533D');
        setp('--background-gradient', 'linear-gradient(230deg, #FFF8DF, #FF7B7B)');
        document.getElementById('favicon').href = '/assets/calendar-light.svg'; // change favicon based on theme
    }
}

export default Theme;
var check;
if (check==true)

function isChecked()
{  
    if (document.getElementById("check1").checked)
    {
            document.body.classList.toggle("dark-theme");
            theme = 'dark';
            localStorage.setItem("check", true);

    }
    if (document.getElementById("check1").checked == false){
            document.body.classList.remove("dark-theme");
            theme = 'light';
            localStorage.setItem("check", false);
}


localStorage.setItem("pageTheme", JSON.stringify(theme));
}

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));

if (getTheme === 'dark'){
    document.body.classlist.toggle("dark-theme");
}

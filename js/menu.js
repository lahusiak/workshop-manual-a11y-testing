function load() {
    const menuItems = Array.from(document.querySelectorAll('.megamenu-navitem'));
    const submenuItems = Array.from(document.querySelectorAll('.megamenu-section'));
    

    function resetSubmenus(event) {
        let activeSubmenu = document.querySelector('.megamenu-section.active');
        console.log('in reset menu' + activeSubmenu);
        console.log('event ' + event.code);
        if (activeSubmenu && !activeSubmenu.contains(event.target) || activeSubmenu && event.code === 'Escape') {
            activeSubmenu.classList.remove('active')
        }

    }
    
    menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener('click', function(event) {
            let parent = menuItem.parentNode;
            if (parent.classList.contains('active')) {
                parent.classList.remove('active')
            } else {
                parent.classList.add('active')
            }
        })  
    })

    submenuItems.forEach((subItem, index) => {
        subItem.addEventListener('keyup', function(event) {
            if (event.code === 'Escape' && subItem.classList.contains('active')) {
                subItem.classList.remove('active');
                subItem.querySelector('.megamenu-navitem').focus();
            }
        })
    })
    //Helps close the menus once you leave the nav area
    document.addEventListener('click', (event) => {
        resetSubmenus(event);
    })
}

document.addEventListener('DOMContentLoaded', load)
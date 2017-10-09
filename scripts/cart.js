    
    /*remove an item from the cart*/
    function removeItem(row_num){
        var row_id = "entry_" + row_num;
        var elem = document.getElementById(row_id);
        elem.parentNode.removeChild(elem);
        return false;
    }
    
    function addClickListeners(buttons){
        for(var i = 0; i < buttons.length; i++) {
            var item = buttons[i];
            item.onclick = function(e) {  
                var button_id = e.target.id;
                button_element = document.getElementById(button_id);
                row_num = button_element.getAttribute('value');
                console.log(row_num)
                removeItem(row_num)
            }
        }
    }
    
    window.onload = function() {
        var remove_buttons = document.getElementsByClassName("remove");
        addClickListeners(remove_buttons);
    }

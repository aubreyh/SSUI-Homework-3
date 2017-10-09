
    /*fill the page with content associated with the selected item*/
    function updateContent(){
        /*dictionary containing product details corresponding to item number clicked */
        var product_details = [
            /*product 1 */
            {name:"cat harness", price:"$10.99", description:"Cat Harness", photo_1:"./resources/images/products/product_1.png", 
            photo_2:"./resources/images/products/product_1_2.png", photo_3:"./resources/images/products/product_1_3.png"},
            /*product 2 */
            {name:"cat harness", price:"$13.00", description:"Cat Harness", photo_1:"./resources/images/products/product_2.png", 
            photo_2:"./resources/images/products/product_2.png", photo_3:"./resources/images/products/product_2.png"},
            /*product 3 */
            {name:"water attachment", price:"$7.99", description:"Portable pet cat water bottle dispenser.", photo_1:"./resources/images/products/product_3.png", 
            photo_2:"./resources/images/products/product_3_2.png", photo_3:"./resources/images/products/product_3_3.png"},
            /*product 4 */
            {name:"gps tracker collar", price:"$51.65", description:"GPS Tracker Collar", photo_1:"./resources/images/products/product_4.png", 
            photo_2:"./resources/images/products/product_4_2.png", photo_3:"./resources/images/products/product_4_3.png"},
            /*product 5 */
            {name:"cat harness", price:"$14.99", description:"Cat harness", photo_1:"./resources/images/products/product_5.png", 
            photo_2:"./resources/images/products/product_5.png", photo_3:"./resources/images/products/product_5.png"},
            /*product 6 */
            {name:"gps tracker collar", price:"$32.80", description:"GPS Tracker Collar", photo_1:"./resources/images/products/product_6.png", 
            photo_2:"./resources/images/products/product_6.png", photo_3:"./resources/images/products/product_6.png"},
            /*product 7 */
            {name:"cat harness", price:"$7.00", description:"Cat harness", photo_1:"./resources/images/products/product_7.png", 
            photo_2:"./resources/images/products/product_7.png", photo_3:"./resources/images/products/product_7.png"},
            /*product 8 */
            {name:"water attachment", price:"$4.25", description:"Portable pet cat water bottle dispenser.", photo_1:"./resources/images/products/product_8.png", 
            photo_2:"./resources/images/products/product_8.png", photo_3:"./resources/images/products/product_8.png"},
            /*product 9 */
            {name:"water attachment", price:"$5.85", description:"Portable pet cat water bottle dispenser.", photo_1:"./resources/images/products/product_9.png", 
            photo_2:"./resources/images/products/product_9.png", photo_3:"./resources/images/products/product_9.png"},
           /*product 10 */
            {name:"cat harness", price:"$19.99", description:"Cat harness", photo_1:"./resources/images/products/product_10.png", 
            photo_2:"./resources/images/products/product_10.png", photo_3:"./resources/images/products/product_10.png"},
            /*product 11 */
            {name:"cat harness", price:"$24.95", description:"Cat harness", photo_1:"./resources/images/products/product_11.png", 
            photo_2:"./resources/images/products/product_11.png", photo_3:"./resources/images/products/product_11.png"},
            /*product 12 */
            {name:"gps tracker collar", price:"$26.99", description:"GPS Tracker Collar", photo_1:"./resources/images/products/product_12.png", 
            photo_2:"./resources/images/products/product_12.png", photo_3:"./resources/images/products/product_12.png"}
        ];
        var query = window.location.search.slice(1);
        var product_num = parseInt(query)
        
        var product_name = product_details[product_num-1].name;
		var product_price = product_details[product_num-1].price;
        var product_description = product_details[product_num-1].description;
        var photo_1_source = product_details[product_num-1].photo_1;
        var photo_2_source = product_details[product_num-1].photo_2;
        var photo_3_source = product_details[product_num-1].photo_3;
        
        //update breadcrumb
        document.getElementById('breadcrumb_product_name').innerHTML = product_name.toUpperCase();
  
        //update product name
        document.getElementById('product_name').innerHTML = product_name.toUpperCase();
        
        //update price
        document.getElementById('price').innerHTML = product_price;
        
        //update description
        document.getElementById('product_description').innerHTML = product_description;
        
        //update images
        document.getElementById("main_image").src = photo_1_source;  
        document.getElementById("thumb_1").src = photo_1_source;
        document.getElementById("thumb_2").src = photo_2_source;
        document.getElementById("thumb_3").src = photo_3_source;   
    }
    
    /*Update the number of items in the cart with the quantity of items selected*/
    function addToCart(){
		'use strict';
        var add_button = document.getElementById('add_to_cart');
        add_button.onclick = function(e) {  
            var previous_count = document.getElementById('cart_items').innerHTML;
            var quantity = document.getElementById('qty').value;
            var new_value = parseInt(previous_count) + parseInt(quantity);
            document.getElementById('cart_items').innerHTML = new_value;
            document.getElementById('cart_items').style.display = 'block';
        };
    }

    /*update the text description associated with the selected element*/
    function updateText(type, new_item){
		'use strict';
        var string_id = type + "_string";
        var content = type + ": " + new_item.getAttribute('value');
        content = content.toUpperCase();
        
        if(type === "size"){
            content += " (In Stock)";
        }
        
        var text_element = document.getElementById(string_id);
        text_element.innerHTML = content;
    }
    
    /*add the 'active' class to the current item*/
    function addActiveClass(event, class_name){
		'use strict';
        var new_item_id = event.target.id;
        var new_item = document.getElementById(new_item_id);
        new_item.classList.add(class_name); 
        return new_item;
    }
    
    /*remove the 'active' class on the previously selected item*/
    function removeActiveClass(class_name){
		'use strict';
        var previous_item_id = document.getElementsByClassName(class_name)[0].id;
        var old_item = document.getElementById(previous_item_id);
        old_item.classList.remove(class_name);
    }
    
    function addSelectionListeners(elements, type){
		'use strict';
        for(var i = 0; i < elements.length; i++) {
            var item = elements[i];
            item.onclick = function(e) {  
                var class_name = "active_" + type;
                removeActiveClass(class_name);
                var new_item = addActiveClass(e, class_name);
                updateText(type, new_item);
            };
        }
    }
    
    window.onload = function() {
		'use strict';
        updateContent();
        
        var colors = document.getElementsByClassName("color_swatch");
        addSelectionListeners(colors, "color");
        
        var sizes = document.getElementsByClassName("size_option");
        addSelectionListeners(sizes, "size");
        
        addToCart();
    };

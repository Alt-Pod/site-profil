/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var openedPopups = new Array();
var openedPopups_params = {};
function createPopup(id, options) {
    options = options || {}
    options.width = options.width || 400
    options.height = options.height || 300
    options.top = options.top || 10
    var page_size = getPageSize()
    options.pageHeight = page_size.pageHeight;
    options.pageWidth = page_size.pageWidth;
    if (openedPopups.length == 0) {
        document.body.appendChild(popupMask(options.pageHeight));
    }

    document.body.appendChild(popupHTML(id, options));
    options.loaderTitle = options.loaderTitle || '';
    setPopupLoader(id, options);
    setUrl(id, options.url, options.url_params);
    setPopupTitle(id, options.title);
    openedPopups.push(id);
    openedPopups_params[id] = options;

    if (openedPopups.length > 1) {
        hideShowParentPopup(true)
    }
    hideObjects(true);
    return document.getElementById('popup_content_' + id);
}

function hideShowParentPopup(state) {
    var index = (state) ? (openedPopups.length - 2) : openedPopups.length - 1
    document.getElementById("popup_" + openedPopups[index]).style.display = (state) ? 'none' : ''
}

function closePopup(id) {
    document.body.removeChild(document.getElementById('popup_' + id));
    if (openedPopups.length == 1) {
        document.body.removeChild(document.getElementById('popup_mask'));
    }
    //Remove popup from popup list
    openedPopups.splice(openedPopups.indexOf(id), 1);
    //Run callback if any
    if (openedPopups_params[id].callbacks) {
            eval(openedPopups_params[id].callbacks.close_callback);
    }
    if (openedPopups.length >= 1) {
        hideShowParentPopup(false)
    }
    hideObjects(false)
}

function popupMask(height) {
    var popup_mask = document.createElement('div');
    popup_mask.className = 'popup_mask';
    popup_mask.id = 'popup_mask'
    popup_mask.style.height = height + 'px'
    return popup_mask
}

function popupHTML(id, options) {
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.id = 'popup_' + id
    popup.style.width = options.width + 32 + 'px';
    popup.style.top = options.top + 'px';
    popup.style.left = (options.pageWidth - options.width) / 2 + 'px';
    popup.innerHTML = "<div class='close_button' onclick='closePopup(" + '"' + id + '"' + ")'></div>\
      <table cellpadding='0' cellspacing='0' class='popup_table'><tr><td class='l_head'></td><td class='c_head'><div class='popup_title' id='popup_head_title_" + id + "'>&nbsp;</div></td><td class='r_head'></td></tr></table>\
      <table cellpadding='0' cellspacing='0' class='popup_table'><tr><td class='l_body'></td><td class='c_body'><div class='popup_content' id='popup_content_" + id + "' style='height:" + options.height + 'px;width:' + options.width + 'px' + "'></div></td><td class='r_body'></td></tr></table>\
      <table cellpadding='0' cellspacing='0' class='popup_table'><tr><td class='l_foot'></td><td class='c_foot'>&nbsp;</td><td class='r_foot'></td></tr></table>\
    "
    return popup;
}

function setPopupLoader(id, options) {
    var loader = document.createElement('span');
    loader.className = 'popup_content_loader';
    loader.id = 'popup_content_loader_' + id;
    loader.style.top = options.height / 2 + 'px';
    loader.innerHTML = "<div class='loader_popup'>"+options.loaderTitle+"</div>";
    document.getElementById('popup_content_' + id).appendChild(loader)
}

function endPopupLoader(id) {
    if (document.getElementById('popup_content_loader_' + id) != undefined) {
        document.getElementById('popup_content_' + id).removeChild(document.getElementById('popup_content_loader_' + id))
        document.getElementById('popup_content_fram_' + id).style.height = '100%';
    }
}

function getPageSize() {
    var windowWidth, windowHeight;
    var pageHeight, pageWidth;
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }
    if (self.innerHeight) {  // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }
    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;

    }
    return {
        pageWidth: pageWidth,
        pageHeight: pageHeight,
        windowWidth: windowWidth,
        windowHeight: windowHeight
    };
}

function setUrl(id, url, params) {
    if (url != undefined) {
        $.get(url, params, function (data) {
            $('#popup_content_' + id).html(data);
        });
    }
}

function setPopupTitle(id, title) {
    title = title || '&nbsp;'
    document.getElementById('popup_head_title_' + id).innerHTML = title
}

function setPopupUrl(id, url) {
    document.getElementById('popup_content_fram_' + id).src = url
}

function hideObjects(hid) {
    if (navigator.appName.indexOf("Microsoft") != -1) {

        var flashobjects = document.getElementsByTagName("object");
        for (var i = 0; i < flashobjects.length; i++) {
            flashobjects[i].style.visibility = (hid) ? 'hidden' : 'visible';
        }
        var selectbjects = document.getElementsByTagName("select");
        for (var j = 0; j < selectbjects.length; j++) {
            selectbjects[j].style.visibility = (hid) ? 'hidden' : 'visible';
        }

    }
}

function getPopupContent(popup) {
    return document.getElementById('popup_content_' + popup);
}

function setPopupContent(popup, content) {
    document.getElementById('popup_content_' + popup).innerHTML = content;
}

function refreshPopup(id) {
    //Refresh the popup with the stored url + params
    var url = openedPopups_params[id].url;
    var params = openedPopups_params[id].params;
    setUrl(id, url, params)
}
;

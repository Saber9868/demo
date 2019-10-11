var EventUtil = {
	addHandler: function(element, type, handler) {
		//绑定事件
		//Chrome Firefox IE9等     addEventListener 
		//IE8及IE8以下的浏览器     attachEvent 
		if(element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if(element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler
		}
	},
	getCharCode: function(event) {
		if(typeof event.charCode == "number") {
			return event.charCode;
		} else {
			event.keyCode;
		}
	},
	removeHandler: function(element, type, handler) {
		//移除事件
		//Chrome Firefox IE9等      
		//IE8及IE8以下的浏览器     
		if(element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if(element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler
		}
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if(event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	stopPropagation: function(event) {
		if(event.stopPropagation) {
			event.stopPropagation()
		} else {
			event.cancelBubble = true;
		}
	}
}
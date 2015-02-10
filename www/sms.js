var sms = {
	send: function(phone, message, method, success, failure) {
		phone = sms.convertPhoneToArray(phone);
		cordova.exec(
			success,
			failure,
			'Sms',
			'send',
			[phone, message, method]
		);
	},
	//Start receiving sms, and the successCallback function receives one string as parameter formatted such as [phonenumber]>[message]
	startReception:function(success, failure) {
    		cordova.exec(
    			success,
    			failure,
    			'Sms',
    			'RECEIVE_SMS',
    			[]);
	},
	//Stop receiving sms
	stopReception:function(success, failure) {
		cordova.exec(
			success,
			failure,
			'Sms',
			'STOP_RECEIVE_SMS',
			[]);
	},
	//Check if the device has a possibility to send and receive SMS
	isSupported:function(success, failure) {
    		cordova.exec(
    			success,
    			failure,
    			'Sms',
    			'HAS_SMS_POSSIBILITY',
    			[]);
	},

	convertPhoneToArray: function(phone) {
		if(typeof phone === 'string' && phone.indexOf(',') !== -1) {
			phone = phone.split(',');
		}
		if(Object.prototype.toString.call(phone) !== '[object Array]') {
			phone = [phone];
		}
		return phone;
	}
};

module.exports = sms;

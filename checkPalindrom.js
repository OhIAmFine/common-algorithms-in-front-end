
/**判断回文
 * @param  {[type]}
 * @return {[type]}
 */

export  function checkPalindrom(str) {
	return str === str.split('').reverse().join('');
};
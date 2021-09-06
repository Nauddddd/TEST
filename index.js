const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question(``, s => {
	s = lengthOfLongestSubstring(s);
    console.log(s);
	readline.close();
});


function lengthOfLongestSubstring(s) {
    if (!s || s.length === 0){
        return 0;
    } else{
		var max =0;
		var temp_len;
		var start = 0;
		var cur;
		for(cur = 0; cur < s.length; cur++) {
			if(!(s.indexOf(s[cur], start) == cur)) { //The duplicate happens
				temp_len = cur - start;
				start = s.indexOf(s[cur],start)+1;
				if (temp_len > max)
                	max = temp_len;
			}
		}
	}
    // Reach the end of the string
	temp_len = cur - start;
    if (temp_len > max)
        max = temp_len;
    return max;
};

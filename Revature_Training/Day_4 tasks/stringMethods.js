//1)Remove 'e' from the following string:
// Method 1
function remove_e(str){
    let array='';
    for(ele of str){
        if(ele!=='e'){
            array+=ele;
        }
    }
    return array;
}
const str = "abcedgedcve";
let removed_e=remove_e(str);
console.log(removed_e);
// Method 2
const string= "abcedgedcve";
let arr=string.replaceAll('e','')
console.log(arr)

// 2)Convert the following string into an array:

const str_2= "Hello there I am jack";
let split_str=str_2.split(' ');
console.log(split_str)

 // 3)check if the given string is a palindrome or not:
// Method 1
function reversed_string(str){
    let rev_str='';
    for(let i=str.length-1;i>=0;i--){
        rev_str+=str[i];
    };
    if(str===rev_str){
        return 'The given string is palindrome';
    }else{
        return 'The given string is not a palindrome';
    };
};
const str_3= "racecar";
const result=reversed_string(str_3)
console.log(result)

// Method 2
const str3= "helo";
let rev_str=str3.split('').reverse().join('');
if(str3===rev_str){
    console.log('The given string is palindrome');
 }else{
     console.log('The given string is not a palindrome');
 };

 // 3)Create a function that takes a string and returns the number of vowels in the string:
// Method 1
function vowels_count(str){
    let small_str=str.toLowerCase();
    let vow=['a','e','i','o','u'];
    let count=0;
    for(let alphabet of small_str){
        for(let vowels of vow){
            if(alphabet==vowels){
                count+=1
            }
        }
    }
    return count
}
    const str_4= "Hello, World!";
    let total_count=vowels_count(str_4)
    console.log(total_count)
    // Method 2
    let small_str_4=str_4.toLowerCase()
    let vow=['a','e','i','o','u']
    count=0;
    for(let i of small_str_4){
        if(vow.includes(i)){;
        count++
        }
    }
    console.log(count)

// 5)Write a function to check if a given string is a valid email address:

    function check_email(str){
        if(str.includes('@')){
            return 'Valid email address';
        }else{
            return 'Invalid email address';
        }
    }
    const email1 = "example@example.com";
    let valid_email=check_email(email1);
    console.log(valid_email);

// 6)Reverse the given string:
    function reverse_string(str){
        return str_6.split('').reverse().join('');
    }
    const str_6 = "Hello, World!";
    let reversed_str=reverse_string(str_6);
    console.log(reversed_str)

// 7)Convert the given string to uppercase:
    function convert_uppercase(str){
         return str_7.toUpperCase();
    };
    const str_7 = "hello, world";
    let converted_str=convert_uppercase(str_7);
    console.log(converted_str);

// 8)Count the number of occurrences of a specific character in a string:

    function specific_character(str,char){
        let chr_count=0;
        for(let specific of str){
            if(specific===char){
                chr_count++
            }
        }
        return chr_count
    }
    const str_8= "hello world";
    const char = "l";
    let spec_char=specific_character(str_8,char)
    console.log(spec_char)

// 9) Replace all occurrences of a specific substring with another substring:
    function replace_occurrence(str,substr1,substr2){
        let replace_occ=str.replace(substr1,substr2)
        return replace_occ;
    }
    const str_9= "The quick brown fox jumps over the lazy dog";
    const substr1 = "brown";
    const substr2 = "red";
    replaced_str=replace_occurrence(str_9,substr1,substr2);
    console.log(replaced_str)

// 10) Check if a string starts with a specific substring:
    
    function starts_with_specific_substring(str,substr){
        return str.startsWith(substr);
    };
    const str_10= "Hello, World!";
    const substr = "Hello";
    let result_str=starts_with_specific_substring(str_10,substr)
    console.log(result_str)

// 11)Check if a string ends with a specific substring:
    function ends_with_specific_substring(str,substr){
        return str.endsWith(substr);
    };
    const str_11= "Hello, World!";
    const substr_1 = "world";
    let result_str_1=ends_with_specific_substring(str_11,substr)
    console.log(result_str)

// 12)Extract a substring from a string:

    function exract_substring(str,start,end){
        return str.slice(start,end);
    }
    const str_12= "Hello, World!";
    const start = 7;
    const end = 12;
    let extracted_substring=exract_substring(str_12,start,end);
    console.log(extracted_substring)

// 13)Trim leading and trailing whitespaces from a string:
    function trim_string(str){
        return str.trim();
    };
    const str_13= "   Hello, World!   ";
    let trimed_str=trim_string(str_13);
    console.log(trimed_str);

// 14)Convert a string to an array of characters:
    function string_array_char(str){
        return str.split('');
    };
    const str_14= "Hello, World!";
    converted_arr=string_array_char(str_14);
    console.log(converted_arr);

// 15)Concatenate two or more strings:
    function concat_string(str1,str2,str3){
        let concact_str1=str1.concat(str2);
        let concact_str2=concact_str1.concat(str3);
        return concact_str2;
    };
    const str_15 = "Hello, ";
    const str_16 = "World!";
    const str_17 = " How are you?";
    let concated_str=concat_string(str_15,str_16,str_17);
    console.log(concated_str)
    
//17)Capitalize the first letter of each word in the given string: 
    
    function capitalize_string(str){
        let words=str.split('')
        for(let i=0;i<words.length;i++){
            words[i]=words[i][0].toUpperCase()+words[i].substr(1);
            let new_str=words.join('')
            return new_str;
        }
    }
    var str_18="Hello, World";
    let cap_str=capitalize_string(str_18);
    console.log(cap_str)

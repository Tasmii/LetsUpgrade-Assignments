#Question:
#Write a Python function that takes in a string and returns the string with all the vowels removed.

#Answer:
def remove_vowels(input_string):
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    result = ""
    for char in input_string:
        if char not in vowels:
            result += char
    return result

input_str = input("Enter a string: ")
result_str = remove_vowels(input_str)
print("String without vowels:", result_str)

def LetterOccurrences(the_list: list):
    letters = []
    for m in range(26):
        letters.append(0)
    for j in range (len(the_list)):
        for k in range (len(the_list[j])):
            l = (ord(the_list[j][k]) - ord('a'))
            letters[l] = letters[l] + 1
    for m in range(26):
        print(chr(m + ord('a')), ':', letters[m])

def sortNames(the_list: list):
    length_of_list = len(the_list)
    for q in range(length_of_list - 1):
        for g in range(length_of_list - q - 1):
            if (the_list[g]) > (the_list[g + 1]):
                the_list[g], the_list[g + 1] = the_list[g + 1], the_list[g]
    print(the_list)
	
def main():	
    the_list = []
    elements = int(input('Enter the desired amount of words in the list: '))
    while elements > 0:
        name = input('Enter name: ')
        the_list.append(name)
        if elements == 0:
            break
        elements -= 1
    print(the_list)
    for m in range (len(the_list)):
        d = the_list[m]
        l = d.lower()
        the_list[m] = l
    LetterOccurrences(the_list)
    sortNames(the_list)

main()
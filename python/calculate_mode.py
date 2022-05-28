def calculate_mode(li):
    this_dict = {}
    for i, x in enumerate(li):
        if x in this_dict:
            this_dict[x] += 1
        else:
            this_dict[x] = 1

    compare = 0
    for x in this_dict:
        if this_dict[x] > compare:
            compare = this_dict[x]
    print(compare)

    result = []
    for x in this_dict:
        if this_dict[x] == compare:
            result.append(x)

    return result
print(calculate_mode([1,2,3,4,5,4,4,5]))
print(calculate_mode([1,1,2,2,5,4,4,5]))
print(calculate_mode(["who", "what", "where", "who"]))
number=int(input("Enter a number: "))
print("Even numbers are:")
for i in range(number):
    if(i%2==0):
        print(i)
print("Odd numbers are:")
for i in range(number):
    if(i%2!=0):
        print(i)
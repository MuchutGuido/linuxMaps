import sys
import os

try:
    #def splitter(y):
    #    fop = open(y,'w')
    #    fop.write('hello world\n')
    #    return fop

    #filehandl = splitter(sys.argv[1])

    #filehandl.write('now got here\n')
    va = "C:\Users\Guido\Desktop\linuxMaps\server\db\escuelas.csv"
    string1 = 'awk \'END { print NR }\' '+ va #> '+filehandl.name+'_2'

    os.system(string1)

    print(string1)

    #os.system('cat '+filehandl.name+'_2')
    input("presione enter")
except IOError as e:
    print("no anda")
